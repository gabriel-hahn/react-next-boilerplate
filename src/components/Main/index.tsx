import * as S from './styles';

const Main = ({
  title = 'React - NextJS',
  description = 'TypeScript, ReactJS e NextJS',
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
);

export default Main;
