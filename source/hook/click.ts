//

import {
  CompositionEvent,
  CompositionEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  useCallback,
  useRef
} from "react";


type UseEnterDownReturn<T> = {
  handleKeyDown: KeyboardEventHandler<T>,
  handleCompositionEnd: CompositionEventHandler<T>
};

export function useEnterDown<T>(onEnter: (event: KeyboardEvent<T>) => unknown): UseEnterDownReturn<T> {
  const isSafari = navigator.userAgent.toLowerCase().includes("safari");
  const afterCompositionEndRef = useRef(false);
  const handleKeyDown = useCallback(function (event: KeyboardEvent<T>): void {
    if (isSafari && afterCompositionEndRef.current) {
      afterCompositionEndRef.current = false;
    } else if (!event.nativeEvent.isComposing) {
      if (event.key === "Enter") {
        onEnter(event);
      }
    }
  }, [isSafari, onEnter]);
  const handleCompositionEnd = useCallback(function (event: CompositionEvent<T>): void {
    afterCompositionEndRef.current = true;
  }, []);
  return {handleKeyDown, handleCompositionEnd};
}