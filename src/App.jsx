import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './redux/slices/counterSlice.js'



function App() {
  // const [count, setCount] = useState(0)
const count = useSelector(state=>state.CounterSlice.counterValue)
const dispatch = useDispatch()

const handleIncrement=()=>{
  dispatch(increment())
}
const handleDecrement=()=>{
  dispatch(decrement())
}
  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button >
          count is {count}
          
        </button>
        <button onClick={handleIncrement}>
          increment
        </button>
        <button onClick={handleDecrement}>
          decrement
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
