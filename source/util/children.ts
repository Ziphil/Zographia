import {Children, ReactElement, cloneElement} from "react";
import {isElement, isFragment} from "react-is";


export const createChildren = (element: ReactElement): Array<ReactElement> => {
  if (isFragment(element)) {
    const elements = Children.map(element.props.children, (element, index) => {
      if (isElement(element)) {
        return cloneElement(element, {key: index});
      } else {
        return element;
      }
    });
    return elements;
  } else {
    throw new Error();
  }
};