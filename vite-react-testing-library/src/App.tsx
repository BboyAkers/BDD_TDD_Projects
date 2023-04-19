import { useState } from 'react';
import { UserForm } from './components/UserForm.tsx';
import { UserList } from './components/UserList.tsx';

export interface User {
  name: string,
  email: string
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const onUserAdd = (user: User) => {
    setUsers([...users, user]);
  }
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <UserForm onUserAdd={onUserAdd} />
        <hr className='my-6' />
        <UserList users={users} />
      </div>
    </div>
  )
}

export default App
