// Map is a method that allows to transform arrays into new arrays
// Map doesn't change the length of the Array
// Map behaves as loop over Arrays

export default function ExampleMappingOverArrays() {
  // const teamMembers = [
  //  'Karl',
  //  'Victor',
  //  'Lukas',
  //  'Lukas', // 💥 will cause issues with duplicated keys ];

  const teamMembers = [
    {
      id: 1,
      name: 'Karl',
    },
    {
      id: 2,
      name: 'Victor',
    },
    {
      id: 3,
      name: 'Lukas',
    },
  ];

  // <div>Karl</div>
  // <div>Victor</div>
  // <div>Lukas</div>

  return (
    <>
      {teamMembers.map((teamMember) => {
        return (
          // <div key={`teamMember-${teamMember}`}> // 💥
          <div key={`teamMember-${teamMember.id}`}>
            <div>{teamMember.name}</div>
          </div>
        );
      })}
    </>
  );
}
