import React from 'react';
import "./assests/scss/app.scss";
import Layout from './component/Layout/'
import {connect} from 'react-redux'

function App(props) {
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

export default connect(mapStateToProps, {})(App);
