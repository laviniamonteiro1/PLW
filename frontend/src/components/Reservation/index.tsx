import React from 'react';
import { reservationMock } from '/app/src/mocks/ReservationMock';
import { Container, Title, ReservationList, ReservationItem, StatusBadge } from './styles';

const ReservationComponent: React.FC = () => {
  return (
    <Container>
      <Title>Minhas Reservas</Title>
      <ReservationList>
        {reservationMock.map((reservation) => (
          <ReservationItem key={reservation.id}>
            <h3>{reservation.title}</h3>
            <p><strong>Endereço:</strong> {reservation.address}</p>
            <p><strong>Check-in:</strong> {reservation.checkIn}</p>
            <p><strong>Check-out:</strong> {reservation.checkOut}</p>
            <StatusBadge status={reservation.status}>{reservation.status}</StatusBadge>
          </ReservationItem>
        ))}
      </ReservationList>
    </Container>
  );
};

export default ReservationComponent;
