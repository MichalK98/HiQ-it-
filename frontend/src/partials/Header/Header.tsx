import styled from 'styled-components';
import { Image } from '../../components';
import { theme } from '../../theme';

const StyledHeader = styled.header`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  background: ${theme.palette.black};
`;

const Header = () => {
  return (
    <StyledHeader>
      <Image src='/images/logo.svg' alt='HiQ it - logo' />
    </StyledHeader>
  );
};

export default Header;
