import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, increment_by } from './actions/countAction';


function App() {

  const count = useSelector((count) => {
    return count.count
  })

  const dispatch = useDispatch()
  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleIncrement7 = () => {
    dispatch(increment_by())
  }

  return (
    <div className="App">
      <h3>Implement Redux with React {count}</h3>
      <button onClick={handleIncrement} >Add</button>
      <button onClick={handleIncrement7} >Add + 7</button>
    </div>
  );
}

export default App;
