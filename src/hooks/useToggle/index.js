import {useMemo, useState} from 'react';

function useToggle(defaultValue, reverseValue){
  const [state, setState] = useState(defaultValue);

  const actions  = useMemo(() => {

    const reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue;

    const toggle = (v) => {
      if(v !== undefined){
        return setState(v);
      }
      setState(prev => (prev === defaultValue ? reverseValueOrigin : defaultValue))
    }

    const setLeft = () => setState(defaultValue)
    const setRight = () => setState(reverseValue)

    return {
      toggle,
      setLeft,
      setRight
    }
  }, [defaultValue, reverseValue])

  return [state, actions];
}

export default useToggle;