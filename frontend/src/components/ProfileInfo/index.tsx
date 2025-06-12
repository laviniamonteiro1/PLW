import React from 'react';
import { ProfileInfoMock } from '/app/src/mocks/ProfileInfoMock';



const ProfileInfo: React.FC = () => {
  const profile = ProfileInfoMock;

  return (
    

      <div className="profile-details">
        <ul>
          <li>
            <strong>Nome Completo:</strong> {profile.fullName}
          </li>
          <li>
            <strong>E-mail:</strong> {profile.email}
          </li>
          <li>
            <strong>Data de Nascimento:</strong> {profile.birthDate}
          </li>
          <li>
            <strong>Telefone:</strong> {profile.phone}
          </li>
          <li>
            <strong>Documento:</strong> {profile.document}
          </li>
          <li>
            <strong>Endereço:</strong> {profile.address}
          </li>
        </ul>
      </div>
  
  );
};

export default ProfileInfo;
