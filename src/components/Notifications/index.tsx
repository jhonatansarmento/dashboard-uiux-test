import * as S from './styles';

const Notifications = () => {
  return (
    <S.NotificationsContainer>
      <S.Title>Notificações</S.Title>
      <S.NotificationList>
        <S.NotificationItem>
          <S.NotificationTitle>Nova mensagem de suporte</S.NotificationTitle>
          <S.NotificationText>
            Você recebeu uma nova mensagem de suporte.
          </S.NotificationText>
        </S.NotificationItem>
        <S.NotificationItem>
          <S.NotificationTitle>Atualização de sistema</S.NotificationTitle>
          <S.NotificationText>
            O sistema foi atualizado com sucesso.
          </S.NotificationText>
        </S.NotificationItem>
      </S.NotificationList>
    </S.NotificationsContainer>
  );
};

export default Notifications;
