import { useState } from 'react';

const teamRoles = {
  admin: 'admin',
  editor: 'editor',
  noRights: 'no-rights',
};

const teamJobPosition = {
  developer: 'developer',
  ceo: 'CEO',
};

const initialTeamMembers = [
  {
    id: 1,
    firstName: 'Victor',
    jobPosition: teamJobPosition.developer,
    role: teamRoles.editor,
    pets: [
      { name: 'Wuff', type: 'cat' },
      {
        name: 'Miau',
        type: 'dog',
      },
    ],
  },
  {
    id: 2,
    firstName: 'Karl',
    jobPosition: teamJobPosition.ceo,
    role: teamRoles.noRights,
    pets: [],
  },
  {
    id: 3,
    firstName: 'Antje',
    jobPosition: teamJobPosition.designer,
    role: teamRoles.editor,
    pets: [],
  },
  {
    id: 4,
    firstName: 'Matthias',
    jobPosition: teamJobPosition.designer,
    role: teamRoles.editor,
    pets: [],
  },
  {
    id: 5,
    firstName: 'Lukas',
    jobPosition: teamJobPosition.designer,
    role: teamRoles.editor,
    pets: [],
  },
];

export default function ExampleDataModeling() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  return (
    <>
      <div>
        {teamMembers.map((teamMember) => {
          return (
            <div key={`team-member-${teamMember.id}`}>
              <div>Name: {teamMember.firstName}</div>
              <div>Role: {teamMember.role}</div>
              <br />
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          const karl = teamMembers.find((teamMember) => {
            return teamMember.firstName === 'Karl';
          });
          // Update team member
          karl.role = teamRoles.admin;
          // use spread operator to trigger rerender in React
          // immutable step
          setTeamMembers([...teamMembers]);
        }}
      >
        Update Karls roles to Admin
      </button>
      <button
        onClick={() => {
          // Copy and update the currentState using map to copy and modifying the array

          const newTeamMembers = teamMembers.map((teamMember) => {
            if (teamMember.firstName === 'Victor') {
              // return copied object, and change role
              return { ...teamMember, role: teamRoles.admin };
            }
            return teamMember;
          });

          // set state to the copied Array
          setTeamMembers(newTeamMembers);
        }}
      >
        Update Victors role to Admin
      </button>
    </>
  );
}
