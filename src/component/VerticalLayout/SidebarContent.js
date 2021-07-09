import React from 'react';
import { Link } from 'react-router-dom'

function SidebarContent() {
    return (
        <React.Fragment>
            <div id="sidebar-menu">
                <ul className="metismenu list-unstyled">
                    <li className="menu-title">Menu</li>
                    <li>
                        <Link className="has-arrow waves-effect waves-ripple">
                        <i className="fas fa-home mx-2"></i>
                        <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect waves-ripple">
                        <i className="fas fa-briefcase mx-2"></i>
                        <span>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect waves-ripple">
                        <i className="fas fa-ticket-alt mx-2"></i>
                        <span>Tickets</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="has-arrow waves-effect waves-ripple">
                        <i className="fas fa-comments mx-2"></i>
                        <span>Discussions</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect waves-ripple">
                        <i className="fas fa-chart-line mx-2"></i>
                        <span>Activities</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="has-arrow waves-effect waves-ripple">
                        <i className="fas fa-inbox mx-2"></i>
                        <span>Inbox</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect waves-ripple">
                        <i className="fas fa-user-friends mx-2"></i>
                        <span>Member</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect waves-ripple">
                        <i className="fas fa-file-signature mx-2"></i>
                        <span>Forms</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default SidebarContent
