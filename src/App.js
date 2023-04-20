import { useSelector } from 'react-redux';
import './App.css';
import Home from './Components/Home'

function App() {
  const { value } = useSelector(state => state.custom);

  return (
    <>
      <h1>{value}</h1>
      <Home />
    </>
  );
}

export default App;
