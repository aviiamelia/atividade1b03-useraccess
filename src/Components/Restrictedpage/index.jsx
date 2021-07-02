import "./styles.css";

const Restrictedpage = ({ isLoggedin, user, Login, Logout }) => {
  return (
    <div className="container">
      {isLoggedin ? (
        <div className="message Welcome">
          <h2>Bem vindo, {user}</h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div className="message notWelcome">
          <h2>Você não pode acessar essa página!</h2>
          <button onClick={Login}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Restrictedpage;
