import { isLoggedInVar } from "../apollo";

function Home() {
  return (
    <div>
      <div>Home</div>
      <button onClick={() => isLoggedInVar(false)}>Log out now!</button>
    </div>
  );
}

export default Home;
