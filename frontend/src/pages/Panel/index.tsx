import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileInfo from '/app/src/components/ProfileInfo';
import { NavbarComAvatar } from '/app/src/components/NavbarWithAvatar';
import { Footer } from '/app/src/components/Footer';
import { Container, UserHeader, StatusBadge, Section, Button } from './styles';
import firstGuest from '/app/src/assets/images/avatars/first_guest.png'

const PanelPage: React.FC = () => {
  const navigate = useNavigate();

  const irParaReservas = () => {
    navigate('/reservas'); 
  };

  return (
    <Container>
      <NavbarComAvatar />

      <UserHeader>
        <div data-role="user-info">
          <img src={firstGuest} alt="Avatar de Fulana da Silva" data-role="user-avatar" />
          <div data-role="user-text">
            <strong>Olá, Fulana da Silva</strong>
            <p>Preparado(a) para sua própria viagem?</p>
          </div>
        </div>
        <StatusBadge>Ativo</StatusBadge>
      </UserHeader>

      <Section>
        <ProfileInfo />
        <div style={{ marginTop: ' 5 rem' }}>
          <Button onClick={irParaReservas}>Ver Minhas Reservas</Button>
        </div>
      </Section>

      <Footer />
    </Container>
  );
};

export default PanelPage;
