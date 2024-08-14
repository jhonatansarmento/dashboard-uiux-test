import * as S from './styles';

const Dashboard = () => {
  return (
    <S.DashboardContainer>
      <S.Title>Dashboard Overview</S.Title>
      <S.CardsContainer>
        <S.Card>
          <S.CardTitle>Usuários Ativos</S.CardTitle>
          <S.CardValue>1,024</S.CardValue>
        </S.Card>
        <S.Card>
          <S.CardTitle>Novos Registros</S.CardTitle>
          <S.CardValue>245</S.CardValue>
        </S.Card>
        <S.Card>
          <S.CardTitle>Taxa de Retenção</S.CardTitle>
          <S.CardValue>76%</S.CardValue>
        </S.Card>
      </S.CardsContainer>
      <S.ChartContainer>
        <S.ChartTitle>Atividade dos Usuários</S.ChartTitle>
        <S.ChartPlaceholder>Gráfico Placeholder</S.ChartPlaceholder>
      </S.ChartContainer>
    </S.DashboardContainer>
  );
};

export default Dashboard;
