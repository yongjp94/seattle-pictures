import React, { Component } from 'react';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar">
        <div className="nav-wrap">
            <div className="navbar-inner">
                <NavbarLeft>
                    <div>
                        <a href="#">Instagram Home</a>
                    </div>
                </NavbarLeft>
                <NavbarCenter>
                    <input className="searchbox" />
                </NavbarCenter>
                <NavbarRight>
                    <div className="menu">
                        <a href="#" style={{"paddingRight":"20px"}}>Explore</a>
                        <a href="#" style={{"paddingRight":"20px"}}>Notification</a>
                        <a href="#">Profile</a>
                    </div>
                </NavbarRight>
            </div>
        </div>
      </nav>
    )
  }
}

class NavbarLeft extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(          
      <div className="navbar-left">
        {this.props.children}
      </div>
    )
  }
}

class NavbarCenter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar-center">
        {this.props.children}
      </div>
    )
  }
}

class NavbarRight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(          
      <div className="navbar-right">
        {this.props.children}
      </div>
    )
  }
}
