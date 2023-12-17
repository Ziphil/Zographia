//

import {useDismiss, useFloating, useFocus, useInteractions, useListNavigation, useRole, useTransitionStatus} from "@floating-ui/react";
import {faCalendar, faClock} from "@fortawesome/sharp-regular-svg-icons";
import {ChangeEvent, ForwardedRef, ReactElement, ReactNode, useCallback, useMemo, useRef, useState} from "react";
import {AsyncOrSync} from "ts-essentials";
import {GeneralIcon} from "/source/component/atom/general-icon";
import {MenuItem} from "/source/component/atom/menu";
import {MenuContextProvider} from "/source/component/atom/menu/menu-context";
import {MenuList} from "/source/component/atom/menu/menu-list";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, aria} from "/source/module/data";


export const Input = createWithRef(
  require("./input.scss"), "Input",
  function ({
    value,
    name,
    type = "text",
    autoComplete = "off",
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
    ...rest
  }: {
    value?: string,
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
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => unknown,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLInputElement>
  } & AdditionalProps): ReactElement {

    const [isOpen, setOpen] = useState(false);
    const listRef = useRef([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const {refs, floatingStyles, context} = useFloating({open: isOpen, onOpenChange: setOpen, placement: "bottom-start"});
    const {isMounted, status} = useTransitionStatus(context, {duration: 100});
    const focus = useFocus(context);
    const dismiss = useDismiss(context);
    const listNavigation = useListNavigation(context, {listRef, activeIndex, onNavigate: setActiveIndex});
    const role = useRole(context, {role: "combobox"});
    const {getReferenceProps, getFloatingProps, getItemProps} = useInteractions([focus, dismiss, listNavigation, role]);

    const contextValue = useMemo(() => ({
      setOpen,
      listRef,
      activeIndex,
      getItemProps
    }), [
      setOpen,
      listRef,
      activeIndex,
      getItemProps
    ]);

    const handleChange = useCallback(function (event: ChangeEvent<HTMLInputElement>): void {
      const value = event.target.value;
      onSet?.(value);
      onChange?.(event);
    }, [onSet, onChange]);

    return (
      <>
        <label
          styleName="root"
          className={className}
          ref={refs.setReference}
        >
          <input
            styleName="input"
            value={value}
            name={name}
            type={toHtmlInputType(type)}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            readOnly={readonly}
            required={required}
            disabled={disabled}
            onChange={(onSet !== undefined || onChange !== undefined) ? handleChange : undefined}
            onBlur={onBlur}
            {...aria({
              invalid: error
            })}
            {...getReferenceProps()}
          />
          {children}
          {isAddonType(type) && (
            <div styleName="builtin-addon">
              <GeneralIcon icon={type === "time" ? faClock : faCalendar}/>
            </div>
          )}
        </label>
        <MenuList
          className={className}
          open={isOpen}
          mounted={isMounted}
          status={status}
          context={context}
          style={floatingStyles}
          ref={refs.setFloating}
          {...getFloatingProps()}
        >
          <MenuContextProvider value={contextValue}>
            <MenuItem index={0}>0</MenuItem>
            <MenuItem index={1}>1</MenuItem>
            <MenuItem index={2}>2</MenuItem>
          </MenuContextProvider>
        </MenuList>
      </>
    );

  }
);


function toHtmlInputType(type: InputType): string {
  if (type === "datetime") {
    return "datetime-local";
  } else {
    return type;
  }
}

function isAddonType(type: string): boolean {
  return type === "date" || type === "time" || type === "datetime-local" || type === "month" || type === "week";
};

export type InputType = "text" | "search" | "email" | "url" | "tel" | "date" | "time" | "datetime" | "month" | "week";
export type SuggestionSpec = {replacement: string, node: ReactNode};