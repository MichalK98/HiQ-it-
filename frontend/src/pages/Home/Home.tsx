import { Heading } from '../../components';
import { CommonLayout } from '../../layouts';
import { UploadContainer } from '../../containers';

const Home = () => {
  return (
    <CommonLayout>
      <Heading>HiQ some text files!</Heading>
      <UploadContainer />
    </CommonLayout>
  );
};

export default Home;
