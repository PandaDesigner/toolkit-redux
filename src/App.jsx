import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './store/slices';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> count is {counter}</h1>
      <div className="card">
        <button
          style={{ marginRight: 8 }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          style={{ marginRight: 8 }}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;