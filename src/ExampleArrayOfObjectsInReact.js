import { useState } from 'react';

const initialUsers = [
  {
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Harper',
      last: 'Williamson',
    },
    location: {
      city: 'Adelaide',
      state: 'Australian Capital Territory',
      country: 'Australia',
    },
    email: 'harper.williamson@example.com',
    id: 1,
    picture: 'https://randomuser.me/api/portraits/med/women/54.jpg',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Mirco',
      last: 'Moreira',
    },
    location: {
      city: 'Várzea Paulista',
      state: 'Australian Capital Territory',
      country: 'Brazil',
    },
    email: 'harper.williamson@example.com',
    id: 2,
    picture: 'https://randomuser.me/api/portraits/med/men/68.jpg',
  },
];

export default function ExampleArrayOfObjectsInReact() {
  const [users, setUsers] = useState(initialUsers);
  return (
    <>
      {users.map((user) => {
        return (
          <div key={`user-${user.id}`}>
            <h2>
              {user.name.title} {user.name.first} {user.name.last}
            </h2>
            <div>
              Location: {user.location.city}, {user.location.country}
            </div>
            <img src={user.picture} alt="user" />
          </div>
        );
      })}
      <button
        onClick={() => {
          const newUserId = users[users.length - 1].id + 1;
          const newUser = {
            gender: 'male',
            name: {
              title: 'Mr',
              first: 'Mile',
              last: 'Ivančević',
            },
            location: {
              city: 'Várzea Paulista',
              state: 'Australian Capital Territory',
              country: 'Brazil',
            },
            email: 'harper.williamson@example.com',
            id: newUserId,
            picture: 'https://randomuser.me/api/portraits/med/men/68.jpg',
          };
          // Don't do this!!
          // users.push(newUser);
          // console.log(users);

          // Do this!
          // // 1. Create a copy of the current state
          // // current state = initial users Array of Objects
          // const newUsers = [...users];
          // // 2. Update the copy with new user
          // newUsers.push(newUser);
          // // 3. Set state to the copy of the old state
          // setUsers(newUsers);
          setUsers([...users, newUser]);
        }}
      >
        Add user
      </button>
      <button
        onClick={() => {
          // 1. Create a copy of the current state
          const newUsers = [...users];
          // 2. Update the name of the first user
          newUsers[0].name.first = 'Peter';
          // 3. Set state to the copy of the old state
          setUsers(newUsers);
        }}
      >
        Set first name to Peter
      </button>
      <button
        onClick={() => {
          // 1. Create a copy of the current state
          const newUsers = [...users];
          // 2. Delete the last user in copied Array of Objects
          newUsers.pop();
          // 3. Set state to the copy of the old state
          setUsers(newUsers);
        }}
      >
        Remove last user
      </button>
    </>
  );
}
