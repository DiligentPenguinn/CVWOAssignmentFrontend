export type LoginFormProps = {
  status: string;
  handleClose: () => void;
  setStatus: (value: React.SetStateAction<string>) => void;
}
