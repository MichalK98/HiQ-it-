import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

type Props = {
  children: ReactNode;
  color?: string;
};

const StyledParagraph = styled.p<Props>`
  color: ${({ color }) => (color ? color : theme.palette.black)};
`;

const Text = ({ color, children }: Props) => {
  return <StyledParagraph color={color}>{children}</StyledParagraph>;
};

export default Text;
