export interface Reservation {
  id: string;
  title: string;
  address: string;
  checkIn: string;
  checkOut: string;
  status: "Confirmado" | "Cancelada" | "Finalizado";
  formaPagamento: string;
  valorTotal: string;
  adicional: string;
  politicaCancelamento: string;
  numeroReserva: string;
  hotel: string;
  tipoQuarto: string;
  contatoHotel: {
    telefone: string;
    email: string;
  };
}
