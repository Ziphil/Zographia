//

import {MouseEvent, ReactElement, useCallback} from "react";
import type {SuggestionSpec} from "/source/component/atom/input/input";
import {create} from "/source/component/create";
import {MenuItem} from "/source/component/module/menu";


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
  }): ReactElement | null {

    const handleClick = useCallback(function (event: MouseEvent<HTMLButtonElement>): void {
      updateValue(spec.replacement);
    }, [spec.replacement, updateValue]);

    return (
      <MenuItem index={index} onClick={handleClick}>
        {spec.node}
      </MenuItem>
    );

  }
);