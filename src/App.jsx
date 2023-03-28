import './App.css'
import Debounce from './components/Debounce/Debounce'
import Toggle from './components/Toggle/Toggle'
import UsePokemonCollection from './components/UsePokemonCollection/UsePokemonCollection'
import WindowSize from './components/WindowSize/WindowSize'
import {useCounter} from './hooks/useCounter/useCounter'

function App() {
    const {count, handleIncrement, handleDecrement} = useCounter(3)
    
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Restar</button>

      <Debounce/>
      <Toggle/>
      <WindowSize/>

      <UsePokemonCollection/>
    </div>
  )
}

export default App
