import Input from "../Input/Input";
import { StyledButton, StyledForm } from "./ui";

const Form = ({ onChange, onSubmit, children }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        label={'Email Address'}
        name={'email'}
        id={'email'}
        type={'email'}
        placeholder='example@mail.com'
        onChange={onChange}
      />
      <Input
        label={'Password'}
        name={'password'}
        id={'password'}
        type={'password'}
        placeholder='********'
        onChange={onChange}
      />
      <StyledButton type='submit'>{children}</StyledButton>
    </StyledForm>
  );
};

export default Form;
