import React from 'react';
import "./assests/scss/app.scss";
import VerticalLayout from './component/VerticalLayout/'
import HorizontalLayout from './component/HorizontalLayout/'
import {connect} from 'react-redux'

const App = (props) => {
  console.log(props)
  function getLayout() {
    let layoutCls = VerticalLayout;

    switch (props.layout.layoutType) {
      case "horizontal" :
        layoutCls = HorizontalLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  }

  const Layout = getLayout()
  return (
    <React.Fragment>
      <Layout props={props}/>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    layout: state.Layout
  };
};

export default connect(mapStateToProps, null)(App);
