import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src="data:image/jpeg;base64,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" />

        <div className={s.loginBlock}> 
            { props.isAuth ? props.login
            : <NavLink to={'/login'} >Login</NavLink>}
        </div>
    </header>
}

export default Header;