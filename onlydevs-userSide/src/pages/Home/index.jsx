import './style.css'
import Trash from '../../assets/trash.png'
import Brand from '../../assets/onlyDevs.png'

function Home() {

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <h1>OnlyDevs+</h1>
            <img src={Brand} />
          </div>
        </nav>
      </header>

      <div className="container">
        <form>
          <h1>Create your login</h1>
          <input type="text" name="nome" placeholder='Your name'/>
          <input type="number" name='idade' placeholder='Your age' aria-valuemin={18} />
          <input type="email" name='email' placeholder='Your best e-mail' />
          <button>Register me</button>
        </form>

        <div>
          <div>
            <p>Name:</p>
            <p>Age:</p>
            <p>Email:</p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>

      </div>
    </>
  )
}

export default Home 
