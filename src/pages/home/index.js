import React, {useState, useEffect, useCallback, useMemo, useRef, useDebugValue, useReducer, useImperativeHandle} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../redux/actions';
import Test from './test';

import createTimer from '../../components/hoc/createTimer'

import todosReducer from './todoReducer';
import Aa from './testContext';
import Memoized from './memoized';

const obj = {
    a: 1,
    b: 2
}

const forwardRef = React.forwardRef

export const contextTest = React.createContext();

function FancyInput(props, ref) {
    const inputRef = useRef();
    console.log('inputRef--------')
    console.log(inputRef)
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      }
    }));
    return <input ref={inputRef} />;
  }

FancyInput = forwardRef(FancyInput);

function ShowTime(props) {
    return (
        <div>
            {props.time}
        </div>
    )
}

function Home(props) {
    console.log(props)
    const {createTestAction, data, update, fetch, actions} = props;
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0)
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);
    const inputRef = useRef();

    useDebugValue(`a:${a}`)

    const getData = () => {
        actions.fetch({test:11111111})
    }

    const handleClick1 = () => {
        console.log('inputRef------------------')
        console.log(inputRef)
        console.log(inputRef.current.focus())
        let b = a + 1
        setA(b)
    }

    const handleClick2 = () => {
        forceUpdate();
        console.log('ignored---------------')
        console.log(ignored)
    }

    const getCompute = useMemo(() => {
        console.log('useCallback-----111111')
        return a + 1
    }, [a])

    const onTestClick = useCallback(() => {
        console.log(1111)
    }, [a])

    const renderTime = () => {
        return createTimer(ShowTime)()
    }

    return (
        <div className='width' onClick={getData}>
            {/* <button onClick={handleClick1}> useCallback button1</button>
            <button onClick={handleClick2}>button</button>
            <span>{data.testReducer.a}</span>
            <div>
                value: {getCompute}
            </div>
            <Test initialCount={0}/>
            <contextTest.Provider value={a}>
                <Aa/> 
            </contextTest.Provider>
            <Memoized onOK={onTestClick}/>
            <FancyInput ref={inputRef}/> */}
            {renderTime()}
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

