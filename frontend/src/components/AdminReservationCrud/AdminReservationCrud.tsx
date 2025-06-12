import React, { useState } from 'react';
import { reservationMock } from '/app/src/mocks/ReservationMock';
import { Container, Title, ReservationList, ReservationItem, StatusBadge, DetailsButton, DeleteButton, ButtonContainer, FormContainer, SectionTitle } from './styles';

const AdminReservationCrud: React.FC = () => {
  const [reservations, setReservations] = useState(reservationMock);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    address: '',
    checkIn: '',
    checkOut: '',
    status: 'Confirmado' as 'Confirmado' | 'Cancelada' | 'Finalizado',
    formaPagamento: '',
    valorTotal: '',
    adicional: '',
    politicaCancelamento: '',
    numeroReserva: '',
    hotel: '',
    tipoQuarto: '',
    contatoHotel: {
      telefone: '',
      email: '',
    },
  });

  const handleAddReservation = () => {
    setReservations([
      ...reservations,
      {
        ...formData,
        id: `${reservations.length + 1}`,
        hotel: formData.hotel || 'Hotel Padrão',
        tipoQuarto: formData.tipoQuarto || 'Quarto Padrão',
        contatoHotel: {
          telefone: formData.contatoHotel.telefone || 'Telefone Padrão',
          email: formData.contatoHotel.email || 'email@hotel.com',
        },
      },
    ]);
    setFormData({
      id: '',
      title: '',
      address: '',
      checkIn: '',
      checkOut: '',
      status: 'Confirmado',
      formaPagamento: '',
      valorTotal: '',
      adicional: '',
      politicaCancelamento: '',
      numeroReserva: '',
      hotel: '',
      tipoQuarto: '',
      contatoHotel: {
        telefone: '',
        email: '',
      },
    });
  };

  const handleDeleteReservation = (id: string) => {
    setReservations(reservations.filter((res) => res.id !== id));
  };

  const handleEditReservation = (id: string) => {
    const reservation = reservations.find((res) => res.id === id);
    if (reservation) {
      setFormData(reservation);
    }
  };

  const handleUpdateReservation = () => {
    setReservations(
      reservations.map((res) => (res.id === formData.id ? formData : res))
    );
    setFormData({
      id: '',
      title: '',
      address: '',
      checkIn: '',
      checkOut: '',
      status: 'Confirmado',
      formaPagamento: '',
      valorTotal: '',
      adicional: '',
      politicaCancelamento: '',
      numeroReserva: '',
      hotel: '',
      tipoQuarto: '',
      contatoHotel: {
        telefone: '',
        email: '',
      },
    });
  };

  return (
    <Container>
      <SectionTitle>Área Administrativa - Gerenciamento de Reservas</SectionTitle>
      <Title>Administração de Reservas</Title>

      <FormContainer>
        <input
          type="text"
          placeholder="Título"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Endereço"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Check-in"
          value={formData.checkIn}
          onChange={(e) =>
            setFormData({ ...formData, checkIn: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Check-out"
          value={formData.checkOut}
          onChange={(e) =>
            setFormData({ ...formData, checkOut: e.target.value })
          }
        />
        <select
          value={formData.status}
          onChange={(e) =>
            setFormData({ ...formData, status: e.target.value as 'Confirmado' | 'Cancelada' | 'Finalizado' })
          }
        >
          <option value="Confirmado">Confirmado</option>
          <option value="Cancelada">Cancelada</option>
          <option value="Finalizado">Finalizado</option>
        </select>
        <input
          type="text"
          placeholder="Hotel"
          value={formData.hotel}
          onChange={(e) =>
            setFormData({ ...formData, hotel: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Tipo de Quarto"
          value={formData.tipoQuarto}
          onChange={(e) =>
            setFormData({ ...formData, tipoQuarto: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Telefone do Hotel"
          value={formData.contatoHotel.telefone}
          onChange={(e) =>
            setFormData({
              ...formData,
              contatoHotel: { ...formData.contatoHotel, telefone: e.target.value },
            })
          }
        />
        <input
          type="email"
          placeholder="E-mail do Hotel"
          value={formData.contatoHotel.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              contatoHotel: { ...formData.contatoHotel, email: e.target.value },
            })
          }
        />
        <button onClick={formData.id ? handleUpdateReservation : handleAddReservation}>
          {formData.id ? 'Atualizar' : 'Adicionar'}
        </button>
      </FormContainer>

      <ReservationList>
        {reservations.map((reservation) => (
          <ReservationItem key={reservation.id}>
            <h3>{reservation.title}</h3>
            <p><strong>Endereço:</strong> {reservation.address}</p>
            <p><strong>Check-in:</strong> {reservation.checkIn}</p>
            <p><strong>Check-out:</strong> {reservation.checkOut}</p>
            <StatusBadge status={reservation.status}>
              {reservation.status}
            </StatusBadge>
            <ButtonContainer>
              <DetailsButton onClick={() => handleEditReservation(reservation.id)}>
                Editar
              </DetailsButton>
              <DeleteButton onClick={() => handleDeleteReservation(reservation.id)}>
                Apagar
              </DeleteButton>
            </ButtonContainer>
          </ReservationItem>
        ))}
      </ReservationList>
    </Container>
  );
};

export default AdminReservationCrud;
