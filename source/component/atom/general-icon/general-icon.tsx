import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ForwardedRef, ReactElement} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const GeneralIcon = createWithRef(
  require("./general-icon.scss"), "GeneralIcon",
  function ({
    icon,
    label,
    flip = "none",
    rotation = 0,
    spin = false,
    ...rest
  }: {
    icon: IconDefinition,
    label?: string,
    flip?: "none" | "horizontal" | "vertical" | "both",
    rotation?: 0 | 90 | 180 | 270,
    spin?: boolean,
    className?: string,
    ref: ForwardedRef<SVGSVGElement>
  } & AdditionalProps): ReactElement {

    return (
      <FontAwesomeIcon
        styleName="root"
        icon={icon}
        title={label}
        flip={flip === "none" ? undefined : flip}
        rotation={rotation === 0 ? undefined : rotation}
        spin={spin}
        {...rest}
      />
    );

  }
);