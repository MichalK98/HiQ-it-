import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

type Props = {
  children: ReactNode;
  color?: string;
};

const StyledSpan = styled.span<Props>`
  color: ${({ color }) => (color ? color : theme.palette.black)};
`;

const Span = ({ color, children }: Props) => {
  return <StyledSpan color={color}>{children}</StyledSpan>;
};

export default Span;
