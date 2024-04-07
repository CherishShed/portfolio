import { create } from "zustand";
import { produce } from "immer";
import { useRef } from "react";

type nameStoreType = {
  ref: React.MutableRefObject<null>;
  setRef: (element: React.RefAttributes<HTMLParagraphElement>) => void;
};
export const nameStore = create<nameStoreType>()((set) => ({
  ref: useRef(null),
  setRef: (element: React.RefAttributes<HTMLParagraphElement>) => {
    set(
      produce((store) => {
        store.ref = element;
      })
    );
  },
}));
