import { useEffect } from "react";
import "./style.css";
import Trash from "../../assets/imgs/trash.png";
import api from '../../services/api';

function Home() {
  // apagado abaixo porque vamos puxar dados diretamente fornecido pela api do back end
  // const users = [
  //   {
  //     id: "2342jsUnsb",
  //     name: "Ledger",
  //     age: 26,
  //     email: "ledger@email.com",
  //   },
  //   {
  //     id: "2024uoUAka",
  //     name: "Dylan",
  //     age: 23,
  //     email: "dylandior@email.com",
  //   },
  // ];

  let users = []

  async function getUsers(){
    users = await api.get('/usuarios')
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <div className="container">
        <form>
          <h1><span>OnlyDevs+ | </span>Registre-se</h1>
          <input name="nome" type="text" placeholder="Seu nome" />
          <input name="idade" type="number" placeholder="Sua idade" />
          <input name="email" type="email" placeholder="Seu e-mail" />
          <button type="button">Cadastrar</button>
        </form>

        {users.map((user) => (
          
          <div key={user.id} className="card">
            <div>
              <p>Nome:   <span>{user.name}</span> </p>
              <p>Idade:  <span>{user.age} </span></p>
              <p>E-mail: <span>{user.email}</span></p>
            </div>
            <button>
              <img src={Trash} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
