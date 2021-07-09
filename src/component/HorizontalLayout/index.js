import React, {Component} from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Rightbar from '../Common/Rightbar'
import MainContent from '../Common/MainContent'
import {connect} from "react-redux"
import {changeLayout, changeTopbarTheme, changeLayoutWidth} from '../../store/actions';

class layout extends Component {
    constructor(props){
        //console.log(props.props.layout.showRightSidebar)
        super(props);
        this.state = {
            isMenuOpened: false
        }

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

        this.props.changeLayout('horizontal')
    }

    openMenu = e => {
        this.setState({isMenuOpened: !this.state.isMenuOpened})
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
                    <Header theme={this.props.topbarTheme}
                        isMenuOpened={this.state.isMenuOpened}
                        openLeftMenuCallBack={this.openMenu}
                    />
                    <Navbar menuOpen={this.state.isMenuOpened}/>
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

export default connect(mapStatetoProps , {changeTopbarTheme, changeLayout, changeLayoutWidth})(layout)
