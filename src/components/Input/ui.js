import styled from '@emotion/styled';
import { colors, typography } from '../../styles';

const StyledInput = styled.input`
  ${typography.text.md};
  border: none;
  border-bottom: 1px solid ${colors.black};
  padding: 5px 0;
  background: transparent;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${colors.gray.dark};
  }

  &::placeholder {
    color: ${colors.gray.dark};
  }
`;

const StyledLabel = styled.label`
  ${typography.text.sm};
  color: ${colors.gray.dark};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 8px;
`;

export { StyledInput, StyledLabel, InputContainer };
