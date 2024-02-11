import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/sharp-regular-svg-icons";
import {ForwardedRef, ReactElement} from "react";
import {createWithRef} from "/source/component/create";
import {useTrans} from "/source/hook";
import {AdditionalProps} from "/source/module/data";


export const LoadingIcon = createWithRef(
  require("./loading-icon.scss"), "LoadingIcon",
  function ({
    ...rest
  }: {
    className?: string,
    ref: ForwardedRef<SVGSVGElement>
  } & AdditionalProps): ReactElement {

    const {trans} = useTrans("loadingIcon");

    return (
      <FontAwesomeIcon
        styleName="root"
        icon={faCircleNotch}
        title={trans("loading")}
        spin={true}
        {...rest}
      />
    );

  }
);