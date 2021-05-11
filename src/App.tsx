import Channel from "./components/Channel";
import { useUser } from "./context/user";

const App = () => {
  const { user, login } = useUser();

  return (
    <div>
      {user ? <Channel /> : <button onClick={login}>login with google</button>}
    </div>
  );
};

export default App;
