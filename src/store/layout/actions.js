import {
    CHANGE_LAYOUT,
    CHANGE_SIDEBAR_TYPE,
    TOGGLE_LEFTMENU,
    CHANGE_LAYOUT_WIDTH,
    SHOW_SIDEBAR,
    CHANGE_SIDEBAT_THEME,
    SHOW_RIGHT_SIDEBAR,
    CHANGE_TOPBAR_THEME
} from './actionTypes'

export const changeLayout = layout => ({
    type: CHANGE_LAYOUT,
    payload: layout
})

export const changeTopbarTheme = topbarTheme => ({
    type: CHANGE_TOPBAR_THEME,
    payload: topbarTheme
})

export const changeLayoutWidth = width => ({
        type: CHANGE_LAYOUT_WIDTH,
        payload: width

});

export const showRightSidebarAction = (isopen) => ({
    type: SHOW_RIGHT_SIDEBAR,
    payload: isopen
})

export const changeSidebarTheme = theme => ({
        type: CHANGE_SIDEBAT_THEME,
        payload: theme
})
export const changeSidebarType = (sidebarType , isMobile) => {
    return {
        type: CHANGE_SIDEBAR_TYPE,
        payload: {sidebarType, isMobile}
    }
};

export const showSidebar = (isopen) => ({
    type: SHOW_SIDEBAR,
    payload: isopen
})

export const toggleLeftmenu = (isopen) => ({
    type: TOGGLE_LEFTMENU,
    payload: isopen
});