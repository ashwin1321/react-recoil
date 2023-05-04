import { useRecoilState, useRecoilValue } from 'recoil';
// useRecoilState is a hook that returns an array with two elements: 
// the first element is the current value of the state,
// and the second element is a function to update the state.
import { recoilCount } from './state';
import './App.css'

function App() {
  const [count, setCount] = useRecoilState(recoilCount);
  // here, recoilCount is the atom we created in state.js which is the state we want to use
  const countValue = useRecoilValue(recoilCount);
  // useRecoilValue is a hook that returns the current value of the state. and takes in the atom as an argument

  return (
    <>

      <h1>React -  Recoil</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          add
        </button> &emsp;
        count is {countValue}
      </div>
    </>
  )
}

export default App
