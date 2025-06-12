import { type Reservation } from '/app/src/types/ReservationType';

export const reservationMock: Reservation[] = [
  {
    id: "1",
    title: "Suíte Garden View - Villa Serenità",
    address: "Rua Principal da Cidade, nº 1000, Rio de Janeiro - RJ, Brasil",
    checkIn: "10/08/2025 às 14h00",
    checkOut: "17/08/2025 às 12h00",
    status: "Confirmado",
    formaPagamento: "Cartão de Crédito",
    valorTotal: "R$ 2.500,00",
    adicional: "Wi-Fi gratuito e estacionamento incluso.",
    politicaCancelamento: "Cancelamento gratuito até 48h antes do check-in.",
    numeroReserva: "RV123456789",
    hotel: "Villa Serenità",
    tipoQuarto: "Suíte Garden View",
    contatoHotel: {
      telefone: "(21) 1234-5678",
      email: "reservas@villaseremita.com.br"
    }
  },
  {
    id: "2",
    title: "Suíte Garden View - Villa Serenità",
    address: "Rua Principal da Cidade, nº 1000, Rio de Janeiro - RJ, Brasil",
    checkIn: "20/08/2025 às 14h00",
    checkOut: "27/08/2025 às 12h00",
    status: "Cancelada",
    formaPagamento: "Boleto Bancário",
    valorTotal: "R$ 1.800,00",
    adicional: "Café da manhã incluso.",
    politicaCancelamento: "Cancelamento gratuito até 72h antes do check-in.",
    numeroReserva: "RV987654321",
    hotel: "Villa Serenità",
    tipoQuarto: "Suíte Garden View",
    contatoHotel: {
      telefone: "(21) 9876-5432",
      email: "contato@villaseremita.com.br"
    }
  },
  {
    id: "3",
    title: "Suíte Garden View - Villa Serenità",
    address: "Rua Principal da Cidade, nº 1000, Rio de Janeiro - RJ, Brasil",
    checkIn: "05/09/2025 às 14h00",
    checkOut: "12/09/2025 às 12h00",
    status: "Finalizado",
    formaPagamento: "Cartão de Crédito",
    valorTotal: "R$ 2.200,00",
    adicional: "Acesso ao spa incluso.",
    politicaCancelamento: "Cancelamento gratuito até 48h antes do check-in.",
    numeroReserva: "RV246810121",
    hotel: "Villa Serenità",
    tipoQuarto: "Suíte Garden View",
    contatoHotel: {
      telefone: "(21) 2345-6789",
      email: "reservas@villaseremita.com.br"
    }
  },
  {
    id: "4",
    title: "Suíte Garden View - Villa Serenità",
    address: "Rua Principal da Cidade, nº 1000, Rio de Janeiro - RJ, Brasil",
    checkIn: "15/11/2025 às 14h00",
    checkOut: "22/11/2025 às 12h00",
    status: "Confirmado",
    formaPagamento: "Transferência Bancária",
    valorTotal: "R$ 3.000,00",
    adicional: "Acesso gratuito ao centro de bem-estar e piscina.",
    politicaCancelamento: "Cancelamento gratuito até 7 dias antes do check-in.",
    numeroReserva: "RV556677889",
    hotel: "Villa Serenità",
    tipoQuarto: "Suíte Garden View",
    contatoHotel: {
      telefone: "(21) 3456-7890",
      email: "atendimento@villaseremita.com.br"
    }
  }
];

export default reservationMock;
