//

import {
  FloatingContext,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTransitionStatus
} from "@floating-ui/react";
import {faCalendar, faClock} from "@fortawesome/sharp-regular-svg-icons";
import {
  ChangeEvent,
  Dispatch,
  FocusEvent,
  ForwardedRef,
  Fragment,
  MutableRefObject,
  ReactElement,
  ReactNode,
  SetStateAction,
  useCallback,
  useRef,
  useState,
  useTransition
} from "react";
import {AsyncOrSync} from "ts-essentials";
import {GeneralIcon} from "/source/component/atom/general-icon";
import {createWithRef} from "/source/component/create";
import {MenuContextProvider} from "/source/component/module/menu/menu-context";
import {MenuList} from "/source/component/module/menu/menu-list";
import {AdditionalProps, aria, data} from "/source/module/data";
import {InputMenuItem} from "./input-menu-item";


export const Input = createWithRef(
  require("./input.scss"), "Input",
  function ({
    value,
    defaultValue,
    name,
    type = "text",
    autoComplete,
    autoFocus,
    error,
    readonly,
    required,
    disabled,
    suggest,
    onSet,
    onChange,
    onBlur,
    children,
    className,
    ref,
    ...rest
  }: {
    value?: string,
    defaultValue?: string,
    name?: string,
    type?: InputType,
    autoComplete?: string,
    autoFocus?: boolean,
    error?: boolean,
    readonly?: boolean,
    required?: boolean,
    disabled?: boolean,
    suggest?: (pattern: string) => AsyncOrSync<Array<SuggestionSpec>>,
    onSet?: (value: string) => unknown,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown,
    onBlur?: (event: FocusEvent<HTMLInputElement>) => unknown,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLInputElement>
  } & AdditionalProps): ReactElement {

    const [open, setOpen] = useState(false);
    const [suggestionSpecs, setSuggestionSpecs] = useState<Array<SuggestionSpec>>([]);
    const [, startTransition] = useTransition();

    const innerRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergeRefs<HTMLInputElement>([ref, innerRef]);

    const {refs, floatingStyles, context} = useFloating({open, onOpenChange: setOpen, placement: "bottom-start"});
    const {isMounted, status} = useTransitionStatus(context, {duration: 100});
    const {
      listRef,
      activeIndex,
      setActiveIndex,
      getReferenceProps,
      getFloatingProps,
      getItemProps
    } = useInputInteraction(context);

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
      onSet?.(value);
      onChange?.(event);
    }, [suggest, setActiveIndex, onSet, onChange]);

    const updateValue = useCallback(function (value: string): void {
      if (innerRef.current !== null) {
        innerRef.current.value = value;
        innerRef.current.setSelectionRange(value.length, value.length);
        onSet?.(value);
      }
    }, [onSet]);

    return (
      <Fragment>
        <div styleName="root" className={className} ref={refs.setReference} {...data({error})}>
          <input
            styleName="input"
            value={value}
            defaultValue={defaultValue}
            name={name}
            type={toHtmlInputType(type)}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            readOnly={readonly}
            required={required}
            disabled={disabled}
            {...aria({invalid: error})}
            {...rest}
            {...getReferenceProps({
              ref: mergedRef,
              onChange: handleChange,
              onBlur
            })}
          />
          {children}
          {isAddonType(type) && (
            <span styleName="builtin-addon">
              <GeneralIcon icon={(type === "time") ? faClock : faCalendar}/>
            </span>
          )}
        </div>
        <MenuList
          className={className}
          open={open}
          mounted={isMounted}
          status={status}
          context={context}
          combobox={true}
          style={floatingStyles}
          ref={refs.setFloating}
          {...getFloatingProps()}
        >
          <MenuContextProvider value={{setOpen, listRef, activeIndex, getItemProps}}>
            {suggestionSpecs.map((spec, index) => (
              <InputMenuItem key={index} index={index} spec={spec} updateValue={updateValue}/>
            ))}
          </MenuContextProvider>
        </MenuList>
      </Fragment>
    );

  }
);


type InputInteractionSpec = ReturnType<typeof useInteractions> & {
  listRef: MutableRefObject<Array<HTMLElement>>,
  activeIndex: number | null,
  setActiveIndex: Dispatch<SetStateAction<number | null>>
};

function useInputInteraction(context: FloatingContext): InputInteractionSpec {
  const listRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dismiss = useDismiss(context);
  const listNavigation = useListNavigation(context, {listRef, activeIndex, onNavigate: setActiveIndex, virtual: true});
  const role = useRole(context, {role: "listbox"});
  const {getReferenceProps, getFloatingProps, getItemProps} = useInteractions([dismiss, listNavigation, role]);
  return {
    listRef,
    activeIndex,
    setActiveIndex,
    getReferenceProps,
    getFloatingProps,
    getItemProps
  };
}

function toHtmlInputType(type: InputType): string {
  if (type === "datetime") {
    return "datetime-local";
  } else {
    return type;
  }
}

function isAddonType(type: InputType): boolean {
  return type === "date" || type === "time" || type === "datetime" || type === "month" || type === "week";
};

export type InputType = "text" | "search" | "email" | "url" | "tel" | "date" | "time" | "datetime" | "month" | "week";
export type SuggestionSpec = {replacement: string, node: ReactNode};