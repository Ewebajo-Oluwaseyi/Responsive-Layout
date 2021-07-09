import React from 'react';
import { Collapse } from 'reactstrap';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Navbar = (props) => {
    return(
        <React.Fragment>
            <div className="topnav">
                <div className="container-fluid">
                    <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
                        <Collapse isOpen={props.leftMenu} className="navbar-collapse" id="topnav-menu-content">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link">
                                    <i className="fas fa-home mr-2"></i>
                                    <span>Home</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">
                                    <i className="fas fa-ticket-alt mr-2"></i>
                                    <span>Tickets</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">
                                    <i className="fas fa-briefcase mr-2"></i>
                                    <span>Projects</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">
                                    <i className="fas fa-comment mr-2"></i>
                                    <span>Discussions</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">
                                    <i className="fas fa-chart-line mr-2"></i>
                                    <span>Activities</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">
                                    <i className="fas fa-inbox mr-2"></i>
                                    <span>Inbox</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">
                                    <i className="fas fa-user-friends mr-2"></i>
                                    <span>Member</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">
                                    <i className="fas fa-file-signature mr-2"></i>
                                    <span>Forms</span>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStatetoProps = state => {
    const { leftMenu } = state.Layout;
    return { leftMenu };
}

export default withRouter(connect(mapStatetoProps, {  })((Navbar)));
