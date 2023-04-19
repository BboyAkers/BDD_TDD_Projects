import { FormEvent, useState } from "react"
import { User } from "../App.tsx";

interface IProps {
  onUserAdd: (name: User) => void;
}

export const UserForm = ({ onUserAdd }: IProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    onUserAdd({name, email});
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
        <input
        type="text"
        name="name"
        id="name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Austin Akers"
        value={name}
        onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <div className="mt-2">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email
        </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
      </div>
      <button className="mt-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add User</button>
    </form>
  )
}