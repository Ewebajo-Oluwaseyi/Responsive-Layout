import React, {useState} from 'react';
import logo from '../../assests/images/logo.jpg'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import img1 from '../../assests/images/users/avatar-1.jpg'

import { toggleLeftmenu, changeSidebarType, showRightSidebarAction } from '../../store/actions';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

function Header(props) {

    const [search, setSearch] = useState(false)

    const [menu, setMenu] = useState(false)

    const isMobile =  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    function tToggle() {
        props.toggleLeftmenu(!props.leftMenu);
        if (props.leftSideBarType === "default"){
            props.changeSidebarType("condensed", isMobile);
        } else if (props.leftSideBarType === "condensed"){
            props.changeSidebarType("default", isMobile)
        }
    }
    return (
        <React.Fragment>
            <header>
                <div id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <Link to="!#" className="logo">
                               { /*<span className="logo-lg">
                                    <img src={logo} alt="" height="40" />
                                </span>
                                <span className="logo-sm">
                                    <img src={logo} alt="" height="30" width="30"/>
    </span>*/}
                            </Link>
                        </div>
                        <buttton type="button" onClick={() => tToggle()} className="btn btn-sm px-3 mt-3 header-item">
                        <span style={{color: 'blue'}}>
                        <i className="fas fa-angle-left mx-2"></i>
                        </span>
                        <i className="fa fa-2x fa-bars mt-1"></i>
                        </buttton>

                        <form className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <input type="text" className="form-control" placeholder="Search.."/>
                                <span className="bx bx-search-alt"></span>
                            </div>
                        </form>

                    </div>


                    <div className="d-flex">
                        <div className="dropdown d-inline-block d-lg-none ml-2">
                            <button onClick={() => {setSearch(!search)}} type="button" className="btn noti-icon header-item waves-effect" id="page-header-search">
                            <i className="mdi mdi-magnify"></i>
                            </button>

                            <div className={search ? "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show" :  "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 "} aria-labelledby="page-header-search">
                                <form className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search.."></input>
                                            <div className="input-grroup-append">
                                                <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <Dropdown
                            isOpen={menu}
                            toggle={() => setMenu(!menu)}
                            className="d-inline-block"
                        >
                        <DropdownToggle
                            className="btn header-item header-item-dark waves-effect waves-effect-dark" tag="button">
                            <img className="rounded-circle header-profile-user" src={img1} alt=""/>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <div className="dropdown-item mr-3">
                                <h5 className="font-size-16 align-middle text-dark">Home</h5>
                                <div className="dropdown-divider"></div>
                                <h5 className="font-size-16 align-middle text-dark">Profile</h5>
                            </div>
                        </DropdownMenu>
                        </Dropdown>

                        <div className="dropdown d-inline-block">
                            <buttton
                                onClick={() => {
                                    props.showRightSidebarAction(!props.showRightSidebar)
                                }}
                                type="button"
                                className="btn header-item noti-icon right-bar-toggle waves-effect"
                            >
                              <i className="bx bx-cog bx-spin"></i>
                            </buttton>
                        </div>
                    </div>
                </div>
                </div>
            </header>
        </React.Fragment>
    )
}

const mapStatetoProps = state => {
    const {leftSideBarType, leftMenu, showRightSidebar} = state.Layout;
    return {leftSideBarType, leftMenu, showRightSidebar}
}

export default connect(mapStatetoProps, {toggleLeftmenu, changeSidebarType,showRightSidebarAction})(Header)
