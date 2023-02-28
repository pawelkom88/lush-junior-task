import Modal from "@components/modal/Modal";
import Image from "next/image";
import { useState } from "react";
import joke from "../images/joke.webp";

export default function ShoppingBagIcon({ size = 25 }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <span onClick={() => setShowModal(true)}>
        <svg
          width={size}
          viewBox="0 0 16 16"
          aria-hidden="true"
          focusable="false"
          role="presentation">
          <path d="M15.07 5.023h-2.452V4.54a4.617 4.617 0 0 0-9.233 0v.482H.93L-.072 16h16.144zM4.883 4.54a3.118 3.118 0 0 1 6.233 0v.482H4.883zM1.572 14.5l.73-7.977h11.4l.73 7.977z"></path>
        </svg>
      </span>
      {showModal && (
        <Modal>
          <Image style={{ margin: "1rem" }} src={joke} width={500} height={500} alt="joke" />
        </Modal>
      )}
    </>
  );
}
