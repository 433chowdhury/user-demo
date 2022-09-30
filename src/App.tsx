import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Overlay, Search, Table } from "./components";
import { getData } from "./features/users/usersAPI";
import { selectUsers, setUsers } from "./features/users/userSlice";
import { userURLs } from "./features/users/userURLs";

function App() {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState("");

  const [status, setStatus] = useState("");

  const fetchUser = useCallback(
    async (noLoading?: boolean) => {
      !noLoading && setStatus("loading");
      try {
        const response = await getData(userURLs.fetchUser);
        response?.data && dispatch(setUsers({ users: response.data }));
        !noLoading && setTimeout(() => setStatus(""), 1500);
      } catch (error) {
        console.log(error);
        !noLoading && setTimeout(() => setStatus(""), 1500);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="relative">
      <Search {...{ value, setValue }} />
      <Table {...{ users, value }} onRefresh={() => fetchUser()} />
      {status && <Overlay message="Refreshing..." />}
    </div>
  );
}

export default App;
