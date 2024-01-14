//

import {MouseEvent, ReactElement, useCallback} from "react";
import type {SuggestionSpec} from "/source/component/atom/input/input";
import {MenuItem} from "/source/component/compound/menu";
import {create} from "/source/component/create";


export const InputMenuItem = create(
  null, "InputMenuItem",
  function ({
    index,
    spec,
    updateValue
  }: {
    index: number,
    spec: SuggestionSpec,
    updateValue: (value: string) => unknown
  }): ReactElement {

    const handleClick = useCallback(function (event: MouseEvent<HTMLButtonElement>): void {
      updateValue(spec.replacement);
    }, [spec.replacement, updateValue]);

    return (
      <MenuItem onClick={handleClick} {...{index}}>
        {spec.node}
      </MenuItem>
    );

  }
);