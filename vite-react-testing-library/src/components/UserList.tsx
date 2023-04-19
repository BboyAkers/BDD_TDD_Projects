import { User } from "../App.tsx"

interface IProps {
  users: User[]
}

export const UserList = ({ users }: IProps ) => {

  const renderedUsers = users.map((user) => {
    return <tr key={user.name}>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        { renderedUsers }
      </tbody>
    </table>
  )
}