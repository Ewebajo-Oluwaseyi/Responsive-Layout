import React from 'react'
import { Link } from 'react-router-dom'
import SidebarContent from './SidebarContent'
import SimpleBar from 'simplebar-react'
import {connect} from 'react-redux'

function Sidebar(props) {

    return (
        <React.Fragment>
           <div className="vertical-menu">
                <data>
                <SidebarContent/>
                </data>
            </div>
        </React.Fragment>
    )
}

const mapStatetoProps = state => {
    return {
        layout: state.Layout
    }
}

export default connect(mapStatetoProps, {})(Sidebar)
