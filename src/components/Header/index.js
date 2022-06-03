import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdCancel} from 'react-icons/md'
import Cookies from 'js-cookie'
import './index.css'

class Header extends Component {
  state = {
    showMenu: false,
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  onClickChangeMenuStatus = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }))
  }

  render() {
    const {showMenu} = this.state

    return (
      <nav>
        <div className="nav-bar">
          <Link to="/">
            <div className="nav-logo-container">
              <img
                className="logo"
                src="https://res.cloudinary.com/aguruprasad/image/upload/v1643612415/Frame_274_aycyqn.png"
                alt="website logo"
              />
              <img
                className="logo-text"
                src="https://res.cloudinary.com/aguruprasad/image/upload/v1643612415/Features_g3bsqp.png"
                alt="website logo"
              />
            </div>
          </Link>
          <div className="nav-keys-list">
            <Link to="/">
              <button className="nav-keys" type="button">
                Home
              </button>
            </Link>
            <Link to="/cart">
              <button className="nav-keys" type="button">
                Cart
              </button>
            </Link>
            <button
              className="logout-btn"
              type="button"
              onClick={this.onClickLogout}
            >
              Logout
            </button>
          </div>
          <GiHamburgerMenu
            className="hand-burger-menu-icon"
            onClick={this.onClickChangeMenuStatus}
          />
        </div>
        {showMenu && (
          <div className="burger-menu-container">
            <Link to="/">
              <button className="nav-keys" type="button">
                Home
              </button>
            </Link>
            <Link to="/cart">
              <button className="nav-keys" type="button">
                Cart
              </button>
            </Link>
            <button
              className="logout-btn"
              onClick={this.onClickLogout}
              type="button"
            >
              Logout
            </button>
            <MdCancel
              className="cancel-button"
              onClick={this.onClickChangeMenuStatus}
            />
          </div>
        )}
      </nav>
    )
  }
}

export default withRouter(Header)
