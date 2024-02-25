//

import {ReactElement} from "react";
import {create} from "/source/component/create";
import {data} from "/source/module/data";


export const GoogleAdsense = create(
  null, "GoogleAdsense",
  function ({
    clientId,
    slotId
  }: {
    clientId: string,
    slotId: string
  }): ReactElement {

    return (
      <ins
        className="adsbygoogle"
        style={{display: "block", width: "100%", height: "90px"}}
        {...data({
          adClient: `ca-pub-${clientId}`,
          adSlot: `${slotId}`
        })}
      />
    );

  }
);