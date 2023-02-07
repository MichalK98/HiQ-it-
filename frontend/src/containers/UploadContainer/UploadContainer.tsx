import { useState } from 'react';
import { toast } from 'react-toastify';
import { theme } from '../../theme';
import { Box, Button, Flex, Heading, Span, Text, Textarea, Upload } from '../../components';
import styled from 'styled-components';

const UploadContainer = () => {
  type dataProps = {
    status: number;
    modifiedText: string;
    text: string;
    mostFrequentWord: string;
  };

  const [selectedFile, setSelectedFile] = useState();
  const [data, setData] = useState<dataProps>({
    status: 404,
    modifiedText: '',
    text: '',
    mostFrequentWord: '',
  });

  console.log('data', data);

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
        if (result.status !== 200) {
          toast.warning('Something went wrong!');
        } else {
          toast.success('Most frequent word found!');
          setData(result);

          setSelectedFile(undefined);
        }
      })
      .catch((error) => {
        toast.error(error.message);
        console.error('Error:', error);
      });
  };

  const StyledUploadContainer = styled.div``;
  const StyledForm = styled.div``;

  return (
    <StyledUploadContainer>
      <StyledForm>
        <Flex mt={5} justify='center'>
          <Upload
            name='file'
            type='file'
            accept='.txt, .rtf'
            onChange={changeHandler}
            selectedFile={selectedFile}
          />

          {selectedFile && (
            <Button onClick={handleSubmission} status={data.status}>
              Submit
            </Button>
          )}
        </Flex>
        <Flex mt={4} justify='center'>
          {!selectedFile ? (
            <Text>Pelase, select a text file (.txt, .rtf).</Text>
          ) : (
            <Text>Press submit to continue.</Text>
          )}
        </Flex>
      </StyledForm>

      <Box mt={5}>
        {data.mostFrequentWord.length >= 1 && (
          <Heading variant='h2'>
            Most frequent: <Span color={theme.palette.primary}>{data.mostFrequentWord}</Span>
          </Heading>
        )}
        {data.text.length >= 1 && (
          <Box mt={4}>
            <Text>Original text:</Text>
            <Textarea>{data.text}</Textarea>
          </Box>
        )}
        {data.modifiedText.length >= 1 && (
          <Box mt={4}>
            <Text>Foo-bar'ed text:</Text>
            <Textarea dangerouslySetInnerHTML={{ __html: data.modifiedText }}></Textarea>
          </Box>
        )}
      </Box>
    </StyledUploadContainer>
  );
};

export default UploadContainer;
