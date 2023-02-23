import { useState } from "react";
import Overlay from "components/modal/Overlay";
import classes from "./Modal.module.scss";
import { ChildrenType } from "types/types";

export default function Modal({ children }: ChildrenType) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <Overlay onClose={() => setIsOpen(false)}>
          <dialog className={classes.modal} onClick={e => e.stopPropagation()} open>
            {children}
          </dialog>
        </Overlay>
      )}
    </>
  );
}
