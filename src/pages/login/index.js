import React from 'react';

export default function Login(props) {
    console.log('props---------')
    console.log(props)
    const goHomePage = () => {
        props.history.push('/home')
    }
    return (
        <div onClick={goHomePage}>
            login
        </div>
    )
}
