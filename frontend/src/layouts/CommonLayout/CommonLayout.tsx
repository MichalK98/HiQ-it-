import { Container, Flex, FlexGrow } from '../../components';
import { Footer, Header } from '../../partials';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const CommonLayout = ({ children }: Props) => {
  return (
    <Flex direction='column' fullHeight>
      <Header />
      <FlexGrow>
        <Container>{children}</Container>
      </FlexGrow>
      <Footer />
    </Flex>
  );
};

export default CommonLayout;
