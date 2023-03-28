import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 48px;
`;

const StyledButton = styled.button`
  ${typography.text.sm}
  border: none;
  background-color: ${colors.orange};
  color: ${colors.white};
  padding: 24px 0;
  border-radius: 30px;
  letter-spacing: 0.5px;
  margin-top: 200px;
  cursor: pointer;
  &:hover {
    background-color: #ec4910;
  }
`;

export { StyledForm, StyledButton };
