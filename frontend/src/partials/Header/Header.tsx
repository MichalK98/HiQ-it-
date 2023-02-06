import styled from 'styled-components';
import { Text } from '../../components';
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
      <Text color={theme.palette.white}>HiQ it!</Text>
    </StyledHeader>
  );
};

export default Header;
