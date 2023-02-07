import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

type Props = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  children: ReactNode;
};

const StyledHeading = styled.h1<Props>`
  color: ${({ color }) => (color ? color : theme.palette.black)};
  line-height: 1.2;
  margin: 0;
  margin-bottom: 0.5rem;
  text-align: center;
  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return `
          font-size: ${theme.headings[0]}px;
        `;
      case 'h2':
        return `
          font-size: ${theme.headings[1]}px;
        `;
      case 'h3':
        return `
          font-size: ${theme.headings[2]}px;
        `;
      case 'h4':
        return `
          font-size: ${theme.headings[3]}px;
        `;
      case 'h5':
        return `
          font-size: ${theme.headings[4]}px;
        `;
      case 'h6':
        return `
          font-size: ${theme.headings[5]}px;
        `;
    }
  }};
`;

const Heading = ({ variant = 'h1', color, children }: Props) => {
  return (
    <StyledHeading variant={variant} color={color}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
