import React from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react'
import { changeTopbarTheme, toggleLeftmenu, changeSidebarType, showRightSidebarAction, changeLayoutWidth, changeSidebarTheme } from '../../store/actions';
import {connect} from 'react-redux'

function Rightbar(props) {

    const isMobile =  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return (
        <React.Fragment>
            <div className="right-bar">
                <SimpleBar style={{height: '900px'}}>
                    <div data-simplebar className="h-100">
                        <div className="rightbar-title px-3 py-4">
                            <Link to="#" onClick={(e) => {e.preventDefault(); props.showRightSidebarAction(false);}} className="right-bar-toggle float-right">
                                <i className="mdi mdi-close noti-icon"></i>
                            </Link>
                            <h5 className="m-0">Settings</h5>
                        </div>

                        <hr className="my-0"/>

                        <div className="p-4">
                            <div className="radio-toolbar">
                                <span className="mb-2 d-block" id="radio-title">Layout-Width</span>
                                <input
                                    type="radio"
                                    id="radioFluid"
                                    name="radioWidth"
                                    value="fluid"
                                    checked={props.layoutWidth !== "boxed"}
                                    onChange={(e) => {if (e.target.checked) {props.changeLayoutWidth(e.target.value)}}}
                                />
                                <label htmlFor="radioFluid">Fluid</label>
                                {"   "}
                                <input
                                    type="radio"
                                    id="radioBoxed"
                                    name="radioWidth"
                                    value="boxed"
                                    checked={props.layoutWidth === "boxed"}
                                    onChange={(e) => {if (e.target.checked) {props.changeLayoutWidth(e.target.value)}}}
                                />
                                <label htmlFor="radioBoxed">Boxed</label>
                            </div>
                            <hr className="mt-1"/>

                            <div className="radio-toolbar">
                                <span className="mb-2 d-block" id="radio-title">Topbar-Theme</span>
                                <input
                                    type="radio"
                                    id="radioThemeLight"
                                    name="radioTheme"
                                    value="light"
                                    checked={props.topbarTheme === "light"}
                                    onChange={(e) => {if (e.target.checked) {props.changeTopbarTheme(e.target.value)}}}
                                />
                                <label htmlFor="radioThemeLight">Light</label>
                                {"   "}
                                <input
                                    type="radio"
                                    id="radioThemeDark"
                                    name="radioTheme"
                                    value="dark"
                                    checked={props.topbarTheme === "dark"}
                                    onChange={(e) => {if (e.target.checked) {props.changeTopbarTheme(e.target.value)}}}
                                />
                                <label htmlFor="radioThemeDark">Dark</label>
                            </div>
                            <hr className="mt-1"/>
                            <div className="radio-toolbar">
                            <span className="mb-2 d-block" id="radio-title">Left Sidebar Type</span>
                                <input
                                    type="radio"
                                    id="sidebarDefault"
                                    name="sidebarType"
                                    value="default"
                                    checked={props.leftSideBarType === "default"}
                                    onChange={(e) => {if (e.target.checked) {props.changeSidebarType(e.target.value)}}}
                                />
                                <label htmlFor="sidebarDefault">Default</label>
                                {" "}
                               {isMobile ? '' : <div> <input
                                    type="radio"
                                    id="sidebarCompact"
                                    name="sidebarType"
                                    value="compact"
                                    checked={props.leftSideBarType === "compact"}
                                    onChange={(e) => {if (e.target.checked) {props.changeSidebarType(e.target.value)}}}
                                />
                                <label htmlFor="sidebarCompact">Compact</label></div>}
                                {" "}
                                <input
                                    className="mx-1"
                                    type="radio"
                                    id="sidebarIcon"
                                    name="sidebarType"
                                    value="icon"
                                    checked={props.leftSideBarType === "icon"}
                                    onChange={(e) => {if (e.target.checked) {props.changeSidebarType(e.target.value)}}}
                                />
                                <label htmlFor="sidebarCompact">Icon</label>
                            </div>

                            <hr className="mt-1"/>
                            <div className="radio-toolbar">
                                <span className="mb-2 d-block" id="radio-title">Left Sidebar Color</span>
                                <input
                                    type="radio"
                                    id="leftsidebarThemeLight"
                                    name="leftsidebarTheme"
                                    value="light"
                                    checked={props.leftSidebarTheme === "light"}
                                    onChange={(e) => {if (e.target.checked) {props.changeSidebarTheme(e.target.value)}}}
                                />
                                <label htmlFor="sidebarDefault">Light</label>
                                {" "}
                                <input
                                    type="radio"
                                    id="leftsidebarThemeDark"
                                    name="leftsidebarTheme"
                                    value="dark"
                                    checked={props.leftSidebarTheme === "dark"}
                                    onChange={(e) => {if (e.target.checked) {props.changeSidebarTheme(e.target.value)}}}
                                />
                                <label htmlFor="sidebarDefault">Dark</label>
                                {" "}
                                <input
                                    type="radio"
                                    id="leftsidebarThemeColored"
                                    name="leftsidebarTheme"
                                    value="colored"
                                    checked={props.leftSidebarTheme === "colored"}
                                    onChange={(e) => {if (e.target.checked) {props.changeSidebarTheme(e.target.value)}}}
                                />
                                <label htmlFor="sidebarDefault">Colored</label>


                            </div>
                            <hr className="mt-1"/>
                        </div>
                    </div>
                </SimpleBar>
            </div>
        </React.Fragment>
    )
}

const mapStatetoProps = state => {
    const {leftSideBarType, leftMenu, showRightSidebar, layoutWidth, topbarTheme, leftSidebarTheme} = state.Layout;
    return {leftSideBarType, leftMenu, showRightSidebar, layoutWidth, topbarTheme, leftSidebarTheme}
}

export default connect(mapStatetoProps, {changeTopbarTheme, toggleLeftmenu, changeSidebarType,showRightSidebarAction, changeLayoutWidth, changeSidebarTheme})(Rightbar)
