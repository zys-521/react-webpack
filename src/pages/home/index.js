import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../redux/actions';

function Home(props) {
    console.log(props)
    const {createTestAction, data, update, fetch} = props;
    const handleClick = () => {
        update({a: 1111})
    }
    const getData = () => {
        fetch({test:11111111})
    }
    return (
        <div className='width' onClick={getData}>
            Home
            {data.testReducer.a}
        </div>
    )
}

function mapStateToProps(store) {
    return { data: store }
  }
  
function mapDispatchToProps(dispatch) {
return { 
        actions: bindActionCreators(actionCreators, dispatch),
        update: (data) => dispatch(actionCreators.createTestAction(data)),
        fetch: (params) => dispatch(actionCreators.fetch(params)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

