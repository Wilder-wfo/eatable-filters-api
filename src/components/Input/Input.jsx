import { InputContainer, StyledInput, StyledLabel } from './ui';

const Input = ({
  label,
  name,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
}) => {
  return (
    <InputContainer>
      {label && <StyledLabel htmlFor={id || name}>{label}</StyledLabel>}
      <StyledInput
        type={type}
        name={name}
        id={id || name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

export default Input;
