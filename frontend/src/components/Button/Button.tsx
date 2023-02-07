import styled from 'styled-components';
import { theme } from '../../theme';

type Props = {
  children: string;
  onClick: (e: React.SyntheticEvent<EventTarget>) => void;
  status: number;
};

const StyledButton = styled.button<Props>`
  width: 160px;
  margin-left: 25px;
  background: ${({ status }) => (status === 200 ? theme.palette.primary : theme.palette.black)};
  color: ${theme.palette.white};
  text-align: center;
  outline: none;
  border: none;
  border-radius: 9999px;
  padding: 16px 34px;
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background: ${theme.palette.primary};
  }
`;

const Button = ({ children, onClick, status }: Props) => {
  return (
    <StyledButton onClick={onClick} status={status}>
      {children}
    </StyledButton>
  );
};

export default Button;
