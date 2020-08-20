export type UIButtonProps = {
  title: string;
  action: string;
  icon: string;
};

export interface CommonButtonProps extends UIButtonProps {
  onClick: (ev: MouseEvent) => void;
}

export interface ModalButtonProps extends UIButtonProps {
  modalTitle: string;
}

export interface ModalProps {
  title: string;
  onSubmit: (args: unknown) => void;
  onClose: () => void;
}
