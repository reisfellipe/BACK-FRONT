import { useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.png'
import Brand from '../../assets/onlyDevs.png'
import Flash from '../../assets/flash.png'
import Star from '../../assets/star.png'
import api from '../../services/api'



function Home() {

  /*const users = [
    {
      id: '32dsd35454d',
      name:'Fellipe',
      age:19,
      email:'reisfellipedeveloper@gmail.com'
    },
    {
      id:'35d6efd6ea5f',
      name:'Dylan',
      age:21,
      email:"dylanschwartz@uol.com"
    }
  ]
*/
  
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers(){
    const usersFromApi = await api.get('/usuarios')
    
    setUsers(usersFromApi.data)
  }

  // useEffect(()=>{
  //   getUsers()
  // }, [])
  
  async function deleteUsers(id){
    await api.delete(`/usuarios/${id}`)
    getUsers()
  }

  async function createUsers(){
    
    await api.post('/usuarios',  {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })

  }
  

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <h1>Only<span>Devs</span></h1>
            <img src={Brand} />
          </div>
          <div className="navigator">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Plans</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">
                    <span>Login</span>
                  </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="copy">

        <div className="text">
          <h2>Our platform exclusive for <span>Developers</span> is available now!</h2>
          <p>Figure out another projects publisheds for teams of programming, create your own communities to share knowledge and get up a pair programming. You will know average ways to do structures using the technologies as <span>HTML, CSS, Javascript, React.JS, Node.JS, MongoDB Atlas, Prisma, SAAS, Bootstrap, Typescript</span> and so much others.
          </p>

          <div className="text-links">
            <div className="link-st">
              <div className="description">
                <h3>Get DevClub+</h3>
                <p>Where you can find templates created for experts like you</p>
              </div>
              <img src={Flash} />
            </div>

            <div className="link-nd">
              <div className="description">
                <h3>Get Templates PRO</h3>
                <p>Done for own influencers of pair programming published on Figma exclusive</p>
              </div>
              <img src={Star} />
            </div>
          </div>

        </div>
        
        <div className="container">
          <form>
            <h1><span>OnlyDevs+ | </span>Create your account</h1>
            <input type="text" name="nome" placeholder='Your name' ref={inputName}/>
            <input type="number" name='idade' placeholder='Your age' ref={inputAge} />
            <input type="email" name='email' placeholder='Your best e-mail' ref={inputEmail} />
            <button type='button' onClick={createUsers}>Sign up</button>
          </form>

          {/* onde irá ficar código javascript */}
          { users.map( user => (
            <>
              <div key={user.id} className='card'>
                <div>
                  <p><span>Name</span>: {user.name}</p>
                  <p><span>Age</span>: {user.age}</p>
                  <p><span>Email</span>: {user.email}</p>
                </div>
                <button type='button' onClick={() => deleteUsers(user.id)}>
                  <img src={Trash} />
                </button>
              </div>
            </>

          ))}


        </div>
      </section>

    </>
  )
}

export default Home 
