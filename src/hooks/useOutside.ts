import { useEffect, RefObject } from "react";
export default function useOutside(ref: RefObject<HTMLElement>, fun: Function) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        ref.current &&
        !ref.current.contains((event as Event & { target: HTMLElement }).target)
      ) {
        fun();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
