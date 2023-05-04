import React from 'react'
import { recoilCount, recoilSelector, modifier, postsSelector } from './state'
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

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const posts = useRecoilValue(postsSelector)
    return (
        <div>
            <hr />
            <h2>This is component 2</h2>
            <input type="number" value={mod} onChange={(e) => setMod(e.target.value)} />
            <p>Modified Count is {Modcount}</p>

            <h2>Posts</h2>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default comp2