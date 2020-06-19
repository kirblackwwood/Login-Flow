import React, {Component} from 'react'
import LoadingButton from './LoadingButton'
import {Link} from 'react-router'

import {logout, clearError} from '../../actions'

class Nav extends Component {
  constructor (props) {
    super(props)
    this._logout = this._logout.bind(this)
    this._clearError = this._clearError.bind(this)
  }

  render () {
    const navButtons = this.props.loggedIn ? (
      <div>
        <Link to='/dashboard' className='btn btn--dash btn--nav'>Dashboard</Link>
        {this.props.currentlySending ? (
          <LoadingButton className='btn--nav' />
        ) : (
          <a href='#' className='btn btn--login btn--nav' onClick={this._logout}>Выйти</a>
        )}
      </div>
    ) : (
      <div>
        <Link to='/register' className='btn btn--login btn--nav' onClick={this._clearError}>Регистрация</Link>
        <Link to='/login' className='btn btn--login btn--nav' onClick={this._clearError}>Войти</Link>
      </div>
    )

    return (
      <div className='nav'>
        <div className='nav__wrapper'>
          <Link to='/register' className='nav__logo-wrapper' onClick={this._clearError}>
            <h1 className='nav__logo'>Авторизация</h1>
          </Link>
          {navButtons}
        </div>
      </div>
    )
  }

  _logout () {
    this.props.dispatch(logout())
  }

  _clearError () {
    this.props.dispatch(clearError())
  }
}

Nav.propTypes = {
  loggedIn: React.PropTypes.bool,
  currentlySending: React.PropTypes.bool,
  dispatch: React.PropTypes.func
}

export default Nav
