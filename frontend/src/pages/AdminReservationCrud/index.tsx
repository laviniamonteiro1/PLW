import React from 'react';
import { NavbarComAvatar } from '/app/src/components/NavbarWithAvatar';
import { Footer } from '/app/src/components/Footer';
import  AdminReservationCrud from '/app/src/components/AdminReservationCrud/AdminReservationCrud';
import { AdminPageContainer, ContentWrapper } from './styles';

const AdminPage: React.FC = () => {
  return (
    <AdminPageContainer>
      <NavbarComAvatar />
      <ContentWrapper>
        <AdminReservationCrud />
      </ContentWrapper>
      <Footer />
    </AdminPageContainer>
  );
};

export default AdminPage;