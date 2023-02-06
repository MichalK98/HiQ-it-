import styled from 'styled-components';
import { theme } from '../theme';

type SpacingRange = 0 | 1 | 2 | 3 | 4 | 5;

type FlexDirections = 'row' | 'column';

type BoxProps = {
  // Margin
  m?: SpacingRange;
  mt?: SpacingRange;
  mr?: SpacingRange;
  mb?: SpacingRange;
  ml?: SpacingRange;
  mx?: SpacingRange;
  my?: SpacingRange;

  // Padding
  p?: SpacingRange;
  pt?: SpacingRange;
  pr?: SpacingRange;
  pb?: SpacingRange;
  pl?: SpacingRange;
  px?: SpacingRange;
  py?: SpacingRange;

  // Size
  fullHeight?: boolean;
  height?: string;
  width?: string;

  // Colors
  background?: string;
};

type FlexProps = {
  direction?: FlexDirections;
};

export const Box = styled.div<BoxProps>`
  // Margin
  ${({ m }) => m && `margin: ${theme.spacing[m]}rem;`}
  ${({ mt }) => mt && `margin-top: ${theme.spacing[mt]}rem;`}
  ${({ mr }) => mr && `margin-right: ${theme.spacing[mr]}rem;`}
  ${({ mb }) => mb && `margin-right: ${theme.spacing[mb]}rem;`}
  ${({ ml }) => ml && `margin-left: ${theme.spacing[ml]}rem;`}
  ${({ mx }) =>
    mx && `margin-left: ${theme.spacing[mx]}rem; margin-right: ${theme.spacing[mx]}rem; `}
  ${({ my }) =>
    my && `margin-top: ${theme.spacing[my]}rem; margin-bottom: ${theme.spacing[my]}rem; `}
  // Padding
  ${({ p }) => p && `padding: ${theme.spacing[p]}rem;`}
  ${({ pt }) => pt && `padding-top: ${theme.spacing[pt]}rem;`}
  ${({ pr }) => pr && `padding-right: ${theme.spacing[pr]}rem;`}
  ${({ pb }) => pb && `padding-bottom: ${theme.spacing[pb]}rem;`}
  ${({ pl }) => pl && `padding-left: ${theme.spacing[pl]}rem;`}
  ${({ px }) =>
    px && `margin-top: ${theme.spacing[px]}rem; margin-bottom: ${theme.spacing[px]}rem; `}
  ${({ py }) =>
    py && `margin-top: ${theme.spacing[py]}rem; margin-bottom: ${theme.spacing[py]}rem; `}
  // Size
  ${({ fullHeight }) => fullHeight && 'height: 100vh;'}
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`}
  // Colors
  ${({ background }) => background && `background: ${background};`}
`;

export const Container = styled(Box)`
  width: 100%;
  max-width: ${theme.containers.lg}px;
  margin-left: auto;
  margin-right: auto;
  padding: ${theme.spacing[3]}rem;
`;

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${({ direction }) => direction && `flex-direction: ${direction};`}
`;

export const FlexGrow = styled(Box)<FlexProps>`
  flex: 1;
`;
