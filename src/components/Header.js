import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{

    render(){
        const searchBtn = (
            <i className="material-icons">search</i>
        );

        const loginBtn = (
            <li>
                <Link to="/login">
                    <i className="material-icons">vpn_key</i>
                </Link>
            </li>
        );

        const logoutBtn = (
            <li>
                <i className="material-icons">lock_open</i>
            </li>
        );

        return (
            <div>
                <nav>
                    <div className="nav-wrapper blue darken-1">
                        <Link to="/" className="brand-logo center">MEMOPAD</Link>
                        <ul>
                            <li>
                                <a>{searchBtn}</a>
                            </li>
                        </ul>
                        <div className="right">
                            <ul>
                                {this.props.isLoggedIn ? logoutBtn : loginBtn}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

Header.propTypes = {
    isLoggedIn: React.PropTypes.bool,
    onLogout: React.PropTypes.func
}

Header.defaultProp = {
    isLoggedIn: false,
    onLogout: () => {
        console.error('logout function not defined.');
    }
}

export default Header;