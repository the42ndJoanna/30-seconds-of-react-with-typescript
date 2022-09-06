interface ControlledInputProps {
  value: string;
  onValueChange: (value: string) => void;
  type: string;
  placeholder: string;
}

const ControlledInput = ({
  value,
  onValueChange,
  ...rest
}: ControlledInputProps) => {
  return (
    <input
      value={value}
      onChange={({ target: { value } }) => onValueChange(value)}
      {...rest}
    />
  );
};

export default ControlledInput;
