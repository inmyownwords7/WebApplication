// src/components/TeamSection.tsx
// @ts-ignore
import React from 'react';
import TeamMember from './TeamMember';

const TeamSection: React.FC = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Our Team</h2>
      <div className="row">
        <TeamMember
          name="Jane Doe"
          role="CEO & Founder"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="jane@example.com"
          imageSrc="/w3images/team1.jpg"
        />
        <TeamMember
          name="Mike Ross"
          role="Art Director"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="mike@example.com"
          imageSrc="/w3images/team2.jpg"
        />
        <TeamMember
          name="John Doe"
          role="Designer"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="john@example.com"
          imageSrc="/w3images/team3.jpg"
        />
      </div>
    </div>
  );
};

export default TeamSection;
