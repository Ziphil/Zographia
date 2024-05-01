//

import {faAngleDown, faAngleUp} from "@fortawesome/sharp-regular-svg-icons";
import {MouseEvent, ReactElement, ReactNode, Ref, useCallback, useContext} from "react";
import {Button} from "/source/component/atom/button";
import {GeneralIcon} from "/source/component/atom/general-icon";
import {createWithRef} from "/source/component/create";
import {useTrans} from "/source/hook";
import {AdditionalProps, data} from "/source/module/data";
import {truncateContext} from "./truncate-context";


export const TruncateButton = createWithRef(
  require("./truncate-button.scss"), "TruncateButton",
  function ({
    children,
    ...rest
  }: {
    children?: ReactNode,
    className?: string,
    ref: Ref<HTMLButtonElement>
  } & AdditionalProps): ReactElement {

    const {trans} = useTrans("truncate");

    const {ref, needTruncation, show, setShow, setScrollHeight} = useContext(truncateContext);

    const handleClick = useCallback(function (event: MouseEvent<HTMLButtonElement>) {
      const element = ref.current;
      if (element) {
        setScrollHeight(element.scrollHeight);
        setShow((show) => !show);
      }
    }, [ref, setShow, setScrollHeight]);

    return (
      <Button styleName="root" scheme="gray" variant="simple" onClick={handleClick} {...data({show, needTruncation})} {...rest}>
        <GeneralIcon styleName="icon" icon={(show) ? faAngleUp : faAngleDown} {...data({position: "left"})}/>
        {trans((show) ? "hide" : "show")}
      </Button>
    );

  }
);