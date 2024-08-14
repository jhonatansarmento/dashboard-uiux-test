import * as S from './styles';

const Settings = () => {
  return (
    <S.SettingsContainer>
      <S.Title>Configurações</S.Title>
      <S.SettingsSection>
        <S.SectionTitle>Preferências de Conta</S.SectionTitle>
        <S.SectionItem>Alterar Senha</S.SectionItem>
        <S.SectionItem>Configurações de Notificações</S.SectionItem>
      </S.SettingsSection>
      <S.SettingsSection>
        <S.SectionTitle>Preferências do Sistema</S.SectionTitle>
        <S.SectionItem>Modo Escuro</S.SectionItem>
        <S.SectionItem>Idioma</S.SectionItem>
      </S.SettingsSection>
    </S.SettingsContainer>
  );
};

export default Settings;
