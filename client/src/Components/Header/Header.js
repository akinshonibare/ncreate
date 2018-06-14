import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import styles from "./Header.css";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showSignUp: false
    };
  }

  navigateTo = loc => {
    if (!this.isActive(loc)) {
      const { history } = this.props;
      history.push(loc);
    }
  };

  isActive = activePath => {
    return this.props.location.pathname === activePath;
  };

  handleCloseLogin = () => {
    this.setState({ showLogin: false });
  };

  handleCloseSignUp = () => {
    this.setState({ showSignUp: false });
  };

  render() {
    return (
      <div>
        <LogIn
          showLogin={this.state.showLogin}
          handleCloseLogin={this.handleCloseLogin}
        />
        <SignUp
          showSignUp={this.state.showSignUp}
          handleCloseSignUp={this.handleCloseSignUp}
        />
        <Navbar collapseOnSelect className={styles.navbar}>
          <Navbar.Header>
            <Navbar.Brand className={styles.brand}>
              <Link to="/">creators</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem
                active={this.isActive("/newcreator")}
                eventKey={1}
                onClick={() => this.navigateTo("/newcreator")}
                className={styles.navItem}
              >
                become a creator
              </NavItem>
              {/* <NavItem
                active={this.isActive("/login")}
                eventKey={2}
                onClick={() => this.setState({ showLogin: true })}
                className={styles.navItem}
              >
                log in
              </NavItem>
              <NavItem
                active={this.isActive("/signup")}
                eventKey={3}
                onClick={() => this.setState({ showSignUp: true })}
                className={styles.navItem}
              >
                join
              </NavItem> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Header);
