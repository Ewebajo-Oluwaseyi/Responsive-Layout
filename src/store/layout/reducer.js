import {
    CHANGE_LAYOUT,
    TOGGLE_LEFTMENU,
    CHANGE_SIDEBAR_TYPE,
    CHANGE_LAYOUT_WIDTH,
    SHOW_SIDEBAR,
    CHANGE_SIDEBAT_THEME,
    SHOW_RIGHT_SIDEBAR,
    CHANGE_TOPBAR_THEME
} from './actionTypes'


const INIT_STATE = {
    layoutType: "vertical",
    layoutWidth: "fluid",
    leftSideBarType: "default",
    showRightSidebar: false,
    leftMenu: false,
    isMobile: false,
    showSidebar: true,
    leftSidebarTheme: "dark",
    topbarTheme: "light"
}

const Layout = (state = INIT_STATE, action) => {
    switch(action.type) {

        case CHANGE_SIDEBAT_THEME:
        return {
            ...state,
            leftSidebarTheme: action.payload
        }
        case CHANGE_LAYOUT:
            return{
                ...state,
                layoutType: action.payload
            }
        case CHANGE_SIDEBAR_TYPE:
            return{
                ...state,
                leftSideBarType: action.payload.sidebarType
            }
        case CHANGE_TOPBAR_THEME:
            return {
                ...state,
                topbarTheme: action.payload
            }
        case CHANGE_LAYOUT_WIDTH :
            return {
                ...state,
                layoutWidth: action.payload
            }
        case SHOW_RIGHT_SIDEBAR:
            return{
                ...state,
                showRightSidebar: action.payload
            }
        case SHOW_SIDEBAR:
            return {
                ...state,
                showSidebar: action.payload
            }
        case TOGGLE_LEFTMENU:
            return {
                ...state,
                leftMenu: action.payload
            }
        default:
        return state;
    }
}

export default Layout;