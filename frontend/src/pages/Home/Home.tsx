import { useState } from 'react';
import parse from 'html-react-parser';
import { theme } from '../../theme';
import { Heading, Span, Text } from '../../components';
import { CommonLayout } from '../../layouts';

const Home = () => {
  type dataProps = {
    modifiedText: string;
    text: string;
    mostFrequentWord: string;
  };

  const [selectedFile, setSelectedFile] = useState();
  const [data, setData] = useState<dataProps>({
    modifiedText: '',
    text: '',
    mostFrequentWord: '',
  });

  const changeHandler = (e: React.SyntheticEvent<EventTarget>) => {
    setSelectedFile((e.target as HTMLFormElement).files[0]);
  };

  const handleSubmission = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);
    fetch('http://localhost:7070/api/file_accept', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <CommonLayout>
      <Heading>Home</Heading>
      <form>
        <input name='file' type='file' accept='.txt, .rtf' onChange={changeHandler} />
        {selectedFile && <button onClick={handleSubmission}>Submit</button>}
      </form>
      <Text>{data.text}</Text>
      <Text>
        Most frequent word: <Span color={theme.palette.primary}>{data.mostFrequentWord}</Span>
      </Text>
      <Text>{parse(data.modifiedText || '')}</Text>
    </CommonLayout>
  );
};

export default Home;
