//

import {
  useMergeRefs
} from "@floating-ui/react";
import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  KeyboardEvent,
  ReactElement,
  ReactNode,
  useCallback,
  useRef,
  useState,
  useTransition
} from "react";
import {AsyncOrSync} from "ts-essentials";
import {SuggestionSpec} from "/source/component/atom/input";
import {useInputFloating, useInputInteraction} from "/source/component/atom/input/input-hook";
import {InputMenuPane} from "/source/component/atom/input/input-menu-pane";
import {Tag, TagCloseButton} from "/source/component/atom/tag";
import {createWithRef} from "/source/component/create";
import {useEnterDown} from "/source/hook/click";
import {AdditionalProps, aria, data} from "/source/module/data";


export const TagInput = createWithRef(
  require("./tag-input.scss"), "TagInput",
  function ({
    values,
    autoFocus,
    error,
    readonly,
    disabled,
    suggest,
    onSet,
    children,
    className,
    ref,
    ...rest
  }: {
    values: Array<string>,
    autoFocus?: boolean,
    error?: boolean,
    readonly?: boolean,
    disabled?: boolean,
    suggest?: (pattern: string) => AsyncOrSync<Array<SuggestionSpec>>,
    onSet?: (values: Array<string>) => unknown,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLInputElement>
  } & AdditionalProps): ReactElement {

    const [suggestionSpecs, setSuggestionSpecs] = useState<Array<SuggestionSpec>>([]);
    const [, startTransition] = useTransition();

    const innerRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergeRefs<HTMLInputElement>([ref, innerRef]);

    const floatingSpec = useInputFloating();
    const interactionSpec = useInputInteraction(floatingSpec.context);
    const {open, setOpen, refs} = floatingSpec;
    const {setActiveIndex, getReferenceProps} = interactionSpec;

    const handleChange = useCallback(async function (event: ChangeEvent<HTMLInputElement>): Promise<void> {
      const value = event.target.value;
      if (suggest !== undefined && value) {
        const suggestionSpecs = await suggest(value);
        startTransition(() => {
          setSuggestionSpecs(suggestionSpecs);
          setOpen(true);
          setActiveIndex(0);
        });
      } else {
        setOpen(false);
      }
    }, [suggest, setOpen, setActiveIndex]);

    const handleEnterDownForAdd = useCallback(function (event: KeyboardEvent<HTMLInputElement>): void {
      const inputElement = innerRef.current;
      if (inputElement !== null) {
        const value = inputElement.value.trim();
        if (value) {
          onSet?.([...values, value]);
          requestAnimationFrame(() => inputElement.value = "");
        }
      }
    }, [values, onSet]);

    const handleKeyDownForRemove = useCallback(function (event: KeyboardEvent<HTMLInputElement>): void {
      if (event.key === "Backspace") {
        const target = event.currentTarget;
        const selectionPos = (target.selectionDirection === "forward") ? target.selectionEnd : target.selectionStart;
        if (selectionPos === 0) {
          onSet?.(values.slice(0, -1));
        }
      }
    }, [values, onSet]);

    const handleBlur = useCallback(function (event: FocusEvent<HTMLInputElement>): void {
      const inputElement = innerRef.current;
      if (inputElement !== null) {
        const value = inputElement.value.trim();
        if (value && !open) {
          onSet?.([...values, value]);
          requestAnimationFrame(() => inputElement.value = "");
        }
      }
    }, [values, open, onSet]);

    const {handleKeyDown: handleKeyDownForAdd, handleCompositionEnd} = useEnterDown(handleEnterDownForAdd);

    const handleKeyDown = useCallback(function (event: KeyboardEvent<HTMLInputElement>): void {
      handleKeyDownForAdd(event);
      handleKeyDownForRemove(event);
    }, [handleKeyDownForAdd, handleKeyDownForRemove]);

    const addTag = useCallback(function (value: string): void {
      const inputElement = innerRef.current;
      if (inputElement !== null && value) {
        onSet?.([...values, value]);
        inputElement.value = "";
      }
    }, [values, onSet]);

    const removeTag = useCallback(function (index: number): void {
      const inputElement = innerRef.current;
      onSet?.(values.filter((value, valueIndex) => valueIndex !== index));
      inputElement?.focus();
    }, [values, onSet]);

    return (
      <>
        <div styleName="root" className={className} ref={refs.setReference} {...data({error})}>
          {values.map((value, index) => (
            <Tag key={index} styleName="tag">
              {value}
              <TagCloseButton onClick={() => removeTag(index)}/>
            </Tag>
          ))}
          <input
            styleName="input"
            autoFocus={autoFocus}
            readOnly={readonly}
            disabled={disabled}
            {...aria({invalid: error})}
            {...rest}
            {...getReferenceProps({
              ref: mergedRef,
              onChange: handleChange,
              onKeyDown: handleKeyDown,
              onCompositionEnd: handleCompositionEnd,
              onBlur: handleBlur
            })}
          />
          {children}
        </div>
        <InputMenuPane suggestionSpecs={suggestionSpecs} updateValue={addTag} floatingSpec={floatingSpec} interactionSpec={interactionSpec}/>
      </>
    );

  }
);


export type TagSuggestionSpec = {replacement: string, node: ReactNode};