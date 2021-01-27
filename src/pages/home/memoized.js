import React, {useState, useEffect, useCallback, useMemo, useLayoutEffect} from 'react';

const forwardRef = React.forwardRef;

function Memoized(props, ref) {
  useEffect(() => {
    console.log('useEffect------------------useEffect')
  })

  useLayoutEffect(() => {
    console.log('useLayoutEffect------------------useLayoutEffect')
  })

  useEffect(() => {
    console.log('useEffect------------------Memoized')
  }, [props.onOK])

  console.log('props:', props)

  return (
    <div ref={ref}>
      Memoized
    </div>
  )
}

export default forwardRef(Memoized);