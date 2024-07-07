import './style.css'
import Trash from '../../assets/trash.png'
import Brand from '../../assets/onlyDevs.png'
import Flash from '../../assets/flash.png'
import Star from '../../assets/star.png'

function Home() {

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
              <h3>Get Templates PRO</h3>
              <p>Done for own influencers of pair programming published on Figma exclusive</p>
              <img src={Star} />
            </div>
          </div>

        </div>
        
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
      </section>

    </>
  )
}

export default Home 
