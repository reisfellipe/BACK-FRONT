import styles from '../Help/pageStyles';
import Trash from '../../assets/trash.png'
import Brand from '../../assets/onlyDevs.png'
import Flash from '../../assets/flash.png'
import Star from '../../assets/star.png'
import api from '../../services/api'

export default function Login(){

    return(
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
        </>
    )


}