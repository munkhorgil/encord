import ReactModal from "react-modal";

type ModalProps = React.ComponentProps<typeof ReactModal>;
type Props = React.PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}> &
  ModalProps;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "auto",
    height: "auto",
    opacity: 1,
    transform: "translate(-50%, -50%)",
  },
};

const Modal = ({ isOpen, onClose, children }: Props) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      overlayClassName="Overlay"
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
