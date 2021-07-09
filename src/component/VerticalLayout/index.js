import React, {Component} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Rightbar from '../Common/Rightbar'
import MainContent from '../Common/MainContent'
import {connect} from "react-redux"
import {changeLayout, changeSidebarType, changeLayoutWidth, changeSidebarTheme} from '../../store/actions';

class layout extends Component {
    constructor(props){
        //console.log(props.props.layout.showRightSidebar)
        super(props);
        this.state = {
            isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        }
        this.toggleMenuCallback = this.toggleMenuCallback.bind(this)
    }

    componentDidMount(){

        if (this.props.isPreloader === true) {
            document.getElementById('preloader').style.display = "block";
            document.getElementById('status').style.display = "block";

            setTimeout(function () {
                document.getElementById('preloader').style.display = "none";
                document.getElementById('status').style.display = 'none'
            }, 2500)
        }
         else {
            document.getElementById('preloader').style.display = "none";
            document.getElementById('status').style.display = 'none'
         }

        document.title = "Responsive Layout";
        window.scrollTo(0, 0);

        if(this.props.props.layout.leftSidebarTheme){
            this.props.changeSidebarTheme(this.props.props.layout.leftSidebarTheme)
        }
        if(this.props.props.layout.layoutWidth){
            this.props.changeLayoutWidth(this.props.props.layout.layoutWidth)
        }
        if(this.props.props.layout.leftSideBarType){
            this.props.changeSidebarType(this.props.props.layout.leftSideBarType)
        }
    }

    toggleMenuCallback = () => {
        if(this.props.props.layout.leftSideBarType === "default"){
            this.props.changeSidebarType("condensed", this.state.isMobile)
        } else if(this.props.props.layout.leftSideBarType === "condensed"){
            this.props.changeSidebarType("default" , this.state.isMobile)
        }

    }
    render(){
        return (
            <React.Fragment>
                <div id="preloader">
                    <div id="status">
                        <div className="spinner-chase">
                            <div className="chase-dot"></div>
                            <div className="chase-dot"></div>
                            <div className="chase-dot"></div>
                            <div className="chase-dot"></div>
                            <div className="chase-dot"></div>
                            <div className="chase-dot"></div>
                        </div>
                    </div>
                </div>
                <div id="layout-wrapper">
                    <Header toggleMenuCallback={this.toggleMenuCallback}/>
                    <Sidebar type={this.props.props.layout.leftSideBarType}
                    isMobile={this.state.isMobile}
                    theme={this.props.props.layout.leftSideBarTheme}/>
                    <div className="main-content">
                    <MainContent/>
                    </div>
                    <Footer/>
                </div>
                {this.props.props.layout.showRightSidebar ? <Rightbar/>: null}
            </React.Fragment>
        )

    }
}

const mapStatetoProps = state => {
    return {
        ...state.layout
    }
}

export default connect(mapStatetoProps , {changeSidebarTheme, changeLayout, changeSidebarType, changeLayoutWidth})(layout)
