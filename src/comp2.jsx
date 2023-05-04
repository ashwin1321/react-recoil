import React from 'react'
import { recoilCount, recoilSelector, modifier } from './state'
import { useRecoilState, useRecoilValue } from 'recoil'
// useRecoilState is a hook that returns an array with two elements:
// the first element is the current value of the state,
// and the second element is a function to update the state.

// useRecoilValue is a hook that returns the current value of the state.
// It is similar to the first element of the array returned by useRecoilState.

const comp2 = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const Modcount = useRecoilState(recoilSelector)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mod, setMod] = useRecoilState(modifier)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const modifiedCount = useRecoilValue(recoilSelector)
    // useREcoilValue is a hook that returns the current value of the state. and takes in the atom as an argument 
    return (
        <div>
            <hr />
            <h2>This is component 2</h2>
            <input type="number" value={mod} onChange={(e) => setMod(e.target.value)} />
            <p>Modified Count is {Modcount}</p>
        </div>
    )
}

export default comp2