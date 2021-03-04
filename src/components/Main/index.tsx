import * as S from './styles';

const asdasdas: string = 22;

const Main = ({
  title = 'React - NextJS',
  description = 'TypeScript, ReactJS, NextJS e Styled Components',
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
);

export default Main;
