import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ReactElement} from "react";
import {create} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const GeneralIcon = create(
  null, "GeneralIcon",
  function ({
    icon,
    label,
    flip = "none",
    rotation = 0,
    spin = false,
    className,
    ...reset
  }: {
    icon: IconDefinition,
    label?: string,
    flip?: "none" | "horizontal" | "vertical" | "both",
    rotation?: 0 | 90 | 180 | 270,
    spin?: boolean,
    className?: string
  } & AdditionalProps): ReactElement {

    return (
      <FontAwesomeIcon
        className={className}
        icon={icon}
        title={label}
        flip={flip === "none" ? undefined : flip}
        rotation={rotation === 0 ? undefined : rotation}
        spin={spin}
        {...reset}
      />
    );

  }
);