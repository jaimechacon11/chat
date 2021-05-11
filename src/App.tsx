import Channel from "./components/Channel";
import { useUser } from "./context/user";
import style from "../src/components/Estilos.module.css"


const App = () => {
  const { user, login } = useUser();

  return (
    <div>
      {user ? <Channel /> : <button onClick={login} className = {style.login}>Login with google</button>}
    </div>
  );
};

export default App;
