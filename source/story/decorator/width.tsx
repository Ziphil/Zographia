//

import {StoryObj as Story} from "@storybook/react";
import {ReactElement, createElement} from "react";
import {ValueOf} from "ts-essentials";


export function restrictWidth(width: number): ValueOf<Story["decorators"]> {
  const decorator = function (story: () => ReactElement): ReactElement {
    return (
      <div style={{width: "100%", maxWidth: `${width}px`}}>
        {createElement(story)}
      </div>
    );
  };
  return decorator;
}