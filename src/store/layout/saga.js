import {
    CHANGE_LAYOUT,
    CHANGE_SIDEBAR_TYPE,
    CHANGE_LAYOUT_WIDTH,
    CHANGE_SIDEBAT_THEME,
    SHOW_RIGHT_SIDEBAR,
    CHANGE_TOPBAR_THEME
} from './actionTypes'
import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
    changeSidebarType as changeSidebarTypeAction,
    changeTopbarTheme as changeTopbarThemeAction
} from './actions';

function changeBodyAttribute(attribute, value) {
    if (document.body) document.body.setAttribute(attribute, value);

    return true
}

function manageBodyClass(cssClass, action = "toggle"){
    switch(action) {
        case "add":
            if (document.body) document.body.classList.add(cssClass);
            break;
        case "remove":
            if (document.body) document.body.classList.remove(cssClass);
            break;
        default:
            if (document.body) document.body.classList.toggle(cssClass);
            break;
    }

    return true;
}

function* changeLayout({payload: layout}) {
    try {
        if (layout === 'horizontal') {
            yield put(changeTopbarThemeAction('dark'));
            document.body.removeAttribute('data-sidebar')
            document.body.removeAttribute('data-sidebar-size');
        } else {
            yield put(changeTopbarThemeAction('light'))
        }
        yield call(changeBodyAttribute, "data-layout" , layout)
    } catch (error) {

    }
}

function* changeLayoutWidth({payload: width}){
    try {
        if (width === 'boxed') {
            yield put(changeSidebarTypeAction("icon"))
        } else {
            yield put(changeSidebarTypeAction("default"));
        }
        yield call(changeBodyAttribute, "data-layout-size", width)
    } catch (error) {

    }
}

function* changeTopbarTheme({payload: theme}){
    try {
        yield call(changeBodyAttribute, "data-topbar", theme)
    } catch (error) {

    }
}

function* changeLeftSidebarTheme({payload: theme}){
    try {
        yield call(changeBodyAttribute, "data-sidebar", theme)
    } catch (error) {

    }
}

function* changeLeftSidebarType({payload: { sidebarType, isMobile }}) {

    try {
        switch (sidebarType) {

            case "compact":
                yield call(changeBodyAttribute, "data-sidebar-size", "small");
                yield call(manageBodyClass, "sidebar-enable", "add")
                yield call(manageBodyClass, "vertical-collpsed", "remove")
                break;
            case "condensed":
                yield call(manageBodyClass, "sidebar-enable", "add");
                if (!isMobile) yield call(manageBodyClass, "vertical-collpsed", "add")
                break;
            case "icon":
            yield call(changeBodyAttribute, "data-keep-enlarged", "true")
            yield call(manageBodyClass, "vertical-collpsed", "add")
            yield call(manageBodyClass, "sidebar-enable", "add")
            break;
            default:
                yield call(changeBodyAttribute, "data-sidebar-size", "")
                yield call(manageBodyClass, "sidebar-enable", "remove")
                if (!isMobile) yield call(manageBodyClass, "vertical-collpsed", "remove")
                break;
        }
    } catch (error) {

    }
}


function* showRightSidebar() {
    try {
        yield call(manageBodyClass, "right-bar-enabled", "add")
    } catch (error) {

    }
}

export function* watchChangeLayoutType() {
    yield takeEvery(CHANGE_LAYOUT, changeLayout);
}
export function* watchChangeLeftSidebarType() {
    yield takeEvery(CHANGE_SIDEBAR_TYPE, changeLeftSidebarType)
}
export function* watchChangeLayoutWidth() {
    yield takeEvery(CHANGE_LAYOUT_WIDTH, changeLayoutWidth)
}
export function* watchChangeLeftSidebarTheme() {
    yield takeEvery(CHANGE_SIDEBAT_THEME, changeLeftSidebarTheme)
}
export function* watchChangeRightSidebar(){
    yield takeEvery(SHOW_RIGHT_SIDEBAR, showRightSidebar)
}
export function* watchChangeTopbarTheme(){
    yield takeEvery(CHANGE_TOPBAR_THEME, changeTopbarTheme)
}

function* LayoutSaga() {
    yield all([
        fork(watchChangeLayoutType),
        fork(watchChangeLeftSidebarType),
        fork(watchChangeLayoutWidth),
        fork(watchChangeLeftSidebarTheme),
        fork(watchChangeRightSidebar),
        fork(watchChangeTopbarTheme)
    ])
}

export default LayoutSaga;
