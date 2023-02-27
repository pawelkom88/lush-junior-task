import { useState } from "react";
import Overlay from "components/modal/Overlay";
import classes from "./Modal.module.scss";
import { Props } from "types/types";

export default function Modal({ children }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  return (
    <>
      {isModalOpen && (
        <Overlay onModalClose={() => setIsModalOpen(false)}>
          <dialog className={classes.modal} onClickCapture={e => e.stopPropagation()} open>
            {children}
          </dialog>
        </Overlay>
      )}
    </>
  );
}
