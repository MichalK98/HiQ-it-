import styled from 'styled-components';
import { Text } from '../../components';
import { theme } from '../../theme';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  background: ${theme.palette.black};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Text color={theme.palette.white}>Created by Michal Kurowski</Text>
    </StyledFooter>
  );
};

export default Footer;
