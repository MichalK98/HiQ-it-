import styled from 'styled-components';
import { theme } from '../../theme';

type Props = {
  accept?: string;
  color?: string;
  name: string;
  onChange: (e: React.SyntheticEvent<EventTarget>) => void;
  selectedFile?: string;
  type?: string;
};

const StyledUpload = styled.input<Props>`
  color: transparent;
  width: 160px;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  &::before {
    content: 'Select file';
    display: inline-block;
    width: 100%;
    background: ${({ selectedFile }) =>
      selectedFile ? theme.palette.primary : theme.palette.black};
    color: ${theme.palette.white};
    text-align: center;
    outline: none;
    border-radius: 9999px;
    padding: 16px 34px;
    -webkit-user-select: none;
    cursor: pointer;
    font-weight: 700;
  }
`;

const Upload = ({ accept, name, onChange, selectedFile, type }: Props) => {
  return (
    <StyledUpload
      accept={accept}
      name={name}
      onChange={onChange}
      type={type}
      selectedFile={selectedFile}
    />
  );
};

export default Upload;
