// src/components/TeamMember.tsx
// @ts-ignore
import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  email: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  email,
  imageSrc,
}: TeamMemberProps) => {
  return (
    <div className="column">
      <div className="card">
        <img src={imageSrc} alt={name} style={{ width: '100%' }} />
        <div className="container">
          <h2>{name}</h2>
          <p className="title">{role}</p>
          <p>{description}</p>
          <p>{email}</p>
          <p>
            <button className="button">Contact</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
