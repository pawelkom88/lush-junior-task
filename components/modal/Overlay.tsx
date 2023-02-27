import classes from "./Overlay.module.scss";

export default function Overlay({
  children,
  onModalClose,
}: {
  children: React.ReactNode;
  onModalClose: () => void;
}) {
  return (
    <div onClick={onModalClose} className={classes.overlay}>
      {children}
    </div>
  );
}
