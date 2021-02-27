import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }


    render() {
        return(
            <React.Fragment>
                {/* Jumbotron header that contains business logo and tag line */}
                <Jumbotron fluid className="m-0 p-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img className="logo-rectangular" src="/assets/images/BadPandaRectLogo.png" alt="Bad Panda Logo"></img>
                            </div>
                            <div className="col align-self-center">
                                    <h2 className="d-none d-sm-block" id="head-text">The best tattoos in the Pacific Northwest!</h2>
                            </div>                
                        </div>
                    </div>
                </Jumbotron>


                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/artists">
                                        Artists
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/matcher">
                                        Matcher
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Gallery
                                        </DropdownToggle>
                                        <DropdownMenu left="true">
                                            <DropdownItem>
                                                <NavLink className="nav-link text-dark" to="/gallery">
                                                    Style Gallery
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                            <NavLink className="nav-link text-dark" to="/artistgallery">
                                                    Artist Gallery
                                                </NavLink>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/shop">
                                        Shop
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/news">
                                        News
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/FAQ">
                                        FAQ
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>

                        </Collapse>
                    </div>
            </Navbar>
            </React.Fragment>
        );
        
    }
}

export default Header;