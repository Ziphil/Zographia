//

import {
  useMergeRefs
} from "@floating-ui/react";
import {
  ChangeEvent,
  ForwardedRef,
  KeyboardEvent,
  ReactElement,
  ReactNode,
  useCallback,
  useRef
} from "react";
import {AsyncOrSync} from "ts-essentials";
import {createWithRef} from "/source/component/create";
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
    suggest?: (pattern: string) => AsyncOrSync<Array<TagSuggestionSpec>>,
    onSet?: (values: Array<string>) => unknown,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLInputElement>
  } & AdditionalProps): ReactElement {

    const innerRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergeRefs<HTMLInputElement>([ref, innerRef]);

    const handleInputChange = useCallback(async function (event: ChangeEvent<HTMLInputElement>): Promise<void> {
      const value = event.target.value;
    }, []);

    const handleInputKeyDown = useCallback(function (event: KeyboardEvent<HTMLInputElement>): void {
      const inputElement = innerRef.current;
      if (inputElement !== null) {
        const value = inputElement.value.trim();
        if (event.key === ",") {
          if (value) {
            onSet?.([...values, value]);
            requestAnimationFrame(() => inputElement.value = "");
          }
        }
      }
    }, [onSet, values]);

    return (
      <>
        <div styleName="root" className={className} {...data({error})}>
          {values.map((value, index) => (
            <span key={index} styleName="tag">
              [{value}]
            </span>
          ))}
          <input
            styleName="input"
            ref={mergedRef}
            autoFocus={autoFocus}
            readOnly={readonly}
            disabled={disabled}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            {...aria({invalid: error})}
            {...rest}
          />
          {children}
        </div>
      </>
    );

  }
);


export type TagSuggestionSpec = {replacement: string, node: ReactNode};