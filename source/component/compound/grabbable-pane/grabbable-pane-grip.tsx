//

import {faGripVertical} from "@fortawesome/pro-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ReactElement, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const GrabbablePaneGrip = createWithRef(
  require("./grabbable-pane-grip.scss"), "GrabbablePaneGrip",
  function ({
    ...rest
  }: {
    className?: string,
    ref: Ref<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    return (
      <div styleName="root" {...rest}>
        <FontAwesomeIcon icon={faGripVertical}/>
      </div>
    );

  }
);
