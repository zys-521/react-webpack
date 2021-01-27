import React from 'react';
import {useToggle} from '../../hooks'

export default function HooksTest(props) {
    console.log('props---------')
    console.log(props)

    const [ loading, { toggle } ] = useToggle(false)
  
    return (
        <div>
            <button onClick={() => toggle()}>toggle loading {`${loading}`}</button>
        </div>
    )
}
