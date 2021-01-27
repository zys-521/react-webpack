import React, {useContext, useEffect} from 'react'
import {contextTest} from './index'

function testContext() {
  const value = useContext(contextTest)
  useEffect(() => {
      console.log('useEffect----------')
      console.log(value)
  })

  return (
      <div>
          {JSON.stringify(value)}
      </div>
  )
}

export default testContext;