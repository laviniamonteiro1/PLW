import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarComAvatar } from '/app/src/components/NavbarWithAvatar';
import { Footer } from '/app/src/components/Footer';
import ReservationComponent from '/app/src/components/Reservation';
import { Container, Button } from './styles';

const ReservationsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAdminRedirect = () => {
    navigate('/admin');
  };

  return (
    <Container>
      <NavbarComAvatar />
      <ReservationComponent />
      <Button onClick={handleAdminRedirect}>Ir para a Administração</Button>
      <Footer />
    </Container>
  );
};

export default ReservationsPage;
