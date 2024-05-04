//

import {useMergeRefs} from "@floating-ui/react";
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
import {InputMenuItem} from "/source/component/atom/input/input-menu-item";
import {InputMenuPane} from "/source/component/atom/input/input-menu-pane";
import {Tag, TagCloseButton} from "/source/component/atom/tag";
import {createWithRef} from "/source/component/create";
import {useEnterDown} from "/source/hook/click";
import {useDebouncedCallback} from "/source/hook/debounce";
import {AdditionalProps, aria, data} from "/source/module/data";


export const TagInput = createWithRef(
  require("./tag-input.scss"), "TagInput",
  function ({
    values,
    tagVariant = "light",
    autoFocus,
    error,
    readonly,
    disabled,
    suggest,
    suggestionDuration = 300,
    onSet,
    children,
    className,
    ref,
    ...rest
  }: {
    values: Array<string>,
    tagVariant?: "solid" | "light",
    autoFocus?: boolean,
    error?: boolean,
    readonly?: boolean,
    disabled?: boolean,
    suggest?: (pattern: string) => AsyncOrSync<Array<SuggestionSpec>>,
    suggestionDuration?: number,
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
    const interactionSpec = useInputInteraction(floatingSpec.context, suggest !== undefined);
    const {open, setOpen, refs} = floatingSpec;
    const {setActiveIndex, getReferenceProps} = interactionSpec;

    const updateSuggestionSpecs = useDebouncedCallback(async function (value: string): Promise<void> {
      if (suggest !== undefined) {
        const suggestionSpecs = await suggest(value);
        startTransition(() => {
          setSuggestionSpecs(suggestionSpecs);
          setOpen(true);
          setActiveIndex(0);
        });
      } else {
        setOpen(false);
      }
    }, suggestionDuration, [suggest, setOpen, setActiveIndex]);

    const handleChange = useCallback(async function (event: ChangeEvent<HTMLInputElement>): Promise<void> {
      const value = event.target.value;
      updateSuggestionSpecs(value);
    }, [updateSuggestionSpecs]);

    const handleEnterDownForAdd = useCallback(function (event: KeyboardEvent<HTMLInputElement>): void {
      const inputElement = innerRef.current;
      if (inputElement !== null) {
        const value = inputElement.value.trim();
        if (value) {
          onSet?.([...values, value]);
          setOpen(false);
          event.preventDefault();
          requestAnimationFrame(() => inputElement.value = "");
        }
      }
    }, [values, setOpen, onSet]);

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
      <div styleName="root" className={className} ref={refs.setReference} {...data({error})}>
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
        {values.map((value, index) => (
          <Tag styleName="tag" key={index} variant={tagVariant}>
            {value}
            <TagCloseButton onClick={() => removeTag(index)}/>
          </Tag>
        ))}
        {children}
        {(suggest !== undefined) && (
          <InputMenuPane floatingSpec={floatingSpec} interactionSpec={interactionSpec}>
            {suggestionSpecs.map((spec, index) => (
              <InputMenuItem key={index} index={index} spec={spec} updateValue={addTag}/>
            ))}
          </InputMenuPane>
        )}
      </div>
    );

  }
);