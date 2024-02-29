import React from 'react';

const UserCard = ({ users }) => {
  return (
    <div className='grid md:grid-cols-3 gap-4 md:m-10 '>
      {users.map(user => (
        <div key={user.id} className='flex flex-col items-center justify-center box-content bg-slate-500 bg-opacity-50 rounded-md p-2 pb-10 m-8 hover:scale-110 shadow-sm shadow-blue'>
          <img src={user.avatar} alt="User Avatar" className='rounded-full p-1' />
          <h3 className='text-xl font-bold tracking:tighter text-navy-700'>{user.first_name} {user.last_name}</h3>
          <p className='p-1'><i>Email: {user.email}</i></p>
        </div>
      ))}
    </div>
  );
}

export default UserCard;
