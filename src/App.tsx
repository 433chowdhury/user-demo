import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Search, Table } from "./components";
import { getData } from "./features/users/usersAPI";
import { selectUsers, setUsers } from "./features/users/userSlice";
import { userURLs } from "./features/users/userURLs";

function App() {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState("");

  const fetchUser = useCallback(async () => {
    try {
      const response = await getData(userURLs.fetchUser);
      response?.data && dispatch(setUsers({ users: response.data }));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div>
      <Search {...{ value, setValue }} />
      <Table {...{ users }} />
    </div>
  );
}

export default App;
