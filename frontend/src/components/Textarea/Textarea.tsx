import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

type Props = {
  children: ReactNode;
  color?: string;
};

const StyledParagraph = styled.p<Props>`
  border: 1px solid ${theme.palette.black};
  border-radius: 8px;
  padding: 10px;
  max-height: 200px;
  color: ${({ color }) => (color ? color : theme.palette.black)};
  overflow: auto;
`;

const Textarea = ({ color, children }: Props) => {
  return <StyledParagraph color={color}>{children}</StyledParagraph>;
};

export default Textarea;
