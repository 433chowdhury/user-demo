import { refresh } from "../assets/icons";
import { UsersState } from "../features/users/userSlice";
import Button from "./Button";
import Td from "./Td";
import Th from "./Th";

type Props = { users: UsersState["users"]; onRefresh?: () => void };

function Table({ users, onRefresh }: Props) {
  return (
    <div className="p-20">
      <div className="flex justify-end mb-10">
        <Button onClick={onRefresh} icon={refresh}>
          Refresh Table
        </Button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Website</Th>
            <Th>Company Name</Th>
          </tr>
        </thead>
        <tbody className='before:content-["_"] before:block before:pt-7 before:leading-10'>
          {users.map((user) => (
            <tr key={user.id} className="group">
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.username}</Td>
              <Td>
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-600 hover:underline"
                >
                  {user.website}
                </a>
              </Td>
              <Td>{user.company.name}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
