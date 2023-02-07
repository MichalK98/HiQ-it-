import styled from 'styled-components';

type Props = {
  alt: string;
  src: string;
};

const StyledImage = styled.img<Props>`
  width: 100px;
  margin: 10px;
`;

const Image = ({ alt, src }: Props) => {
  return <StyledImage alt={alt} src={src} />;
};

export default Image;
