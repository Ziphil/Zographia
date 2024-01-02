/* eslint-disable quote-props, @typescript-eslint/naming-convention */

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/sharp-regular-svg-icons";
import {Children, ReactElement, ReactNode, cloneElement, useCallback, useState} from "react";
import {isElement} from "react-is";
import {create} from "/source/component/create";
import {AdditionalProps, aria, data} from "/source/module/data";
import {useSelectFloating, useSelectInteraction} from "./select-hook";
import {SelectMenuPane} from "./select-menu-pane";
import {SelectOption} from "./select-option";


export const Select = create(
  require("./select.scss"), "Select",
  function <V>({
    value,
    defaultValue,
    error,
    onSet,
    children,
    className,
    ...rest
  }: {
    value?: V,
    defaultValue?: V,
    error?: boolean,
    onSet?: (value: V) => unknown,
    children?: ReactNode,
    className?: string
  } & AdditionalProps): ReactElement {

    const [innerValue, setInnerValue] = useState(defaultValue);
    const actualValue = (value !== undefined) ? value : innerValue;

    const optionMap = getOptionMap<V>(children);

    const floatingSpec = useSelectFloating();
    const interactionSpec = useSelectInteraction(floatingSpec.context);
    const {refs} = floatingSpec;
    const {getReferenceProps} = interactionSpec;

    const updateValue = useCallback(function (nextValue: V): void {
      if (value === undefined) {
        setInnerValue(nextValue);
      }
      onSet?.(nextValue);
    }, [value, onSet]);

    return (
      <div styleName="root" className={className} ref={refs.setReference} {...data({error})}>
        <button
          styleName="input"
          {...aria({invalid: error})}
          {...rest}
          {...getReferenceProps()}
        >
          {(actualValue !== undefined) ? optionMap.get(actualValue)?.props.label ?? "" : ""}
        </button>
        <span styleName="angle">
          <FontAwesomeIcon icon={faAngleDown}/>
        </span>
        <SelectMenuPane updateValue={updateValue} floatingSpec={floatingSpec} interactionSpec={interactionSpec}>
          {transformChildren(children)}
        </SelectMenuPane>
      </div>
    );

  }
);


function transformChildren(children: ReactNode): Array<ReactElement> | null | undefined {
  let index = -1;
  const nextChildren = Children.map(children, (child) => {
    if (isElement(child)) {
      if (child.type === SelectOption) {
        index ++;
        return cloneElement(child, {index});
      } else {
        return child;
      }
    } else {
      return undefined;
    }
  });
  return nextChildren;
};

function getOptionMap<V>(children: ReactNode): Map<V, ReactElement> {
  const map = new Map<V, ReactElement>();
  Children.forEach(children, (child) => {
    if (isElement(child)) {
      if (child.type === SelectOption) {
        return map.set(child.props.value, child);
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  });
  return map;
};