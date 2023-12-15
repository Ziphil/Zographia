//

import {ForwardRefExoticComponent, ForwardedRef, FunctionComponent, PropsWithoutRef, RefAttributes, forwardRef} from "react";
import cssModules from "react-css-modules";


export function create<C extends FunctionComponent<any>>(css: any, component: C): C;
export function create<C extends FunctionComponent<any>>(css: any, name: string, component: C): C;
export function create<C extends FunctionComponent<any>>(...args: [any, C] | [any, string, C]): C {
  let [css, component, name] = (args.length === 2) ? [args[0], args[1]] : [args[0], args[2], args[1]];
  if (css !== null && css !== undefined) {
    component = cssModules(css.default, {allowMultiple: true, handleNotFoundStyleName: "ignore"})(component);
  }
  component.displayName = name ?? "<unknown>";
  return component;
}

export function createWithRef<T, P>(css: any, component: FunctionComponentWithRef<T, P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
export function createWithRef<T, P>(css: any, name: string, component: FunctionComponentWithRef<T, P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
export function createWithRef<T, P>(...args: [any, FunctionComponentWithRef<T, P>] | [any, string, FunctionComponentWithRef<T, P>]): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  let [css, component, name] = (args.length === 2) ? [args[0], args[1]] : [args[0], args[2], args[1]];
  if (css !== null && css !== undefined) {
    component = cssModules(component, css.default, {allowMultiple: true, handleNotFoundStyleName: "ignore"});
  }
  const forwardedComponent = forwardRef<T, P>((props, ref) => component({...props, ref}));
  forwardedComponent.displayName = name ?? "<unknown>";
  return forwardedComponent;
}

type FunctionComponentWithRef<T, P> = FunctionComponent<P & {ref: ForwardedRef<T>}>;