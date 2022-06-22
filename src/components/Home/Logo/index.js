import './index.scss'
import nameLogo from '../../../assets/images/L.jpg';

const Logo = () => {
    return(
        <div className="logo-container">
            <img className="solid-logo" src={nameLogo} alt="name-logo" />
        </div>
    )
}
export default Logo;