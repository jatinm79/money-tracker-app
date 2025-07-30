import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>₹400000<span>.00</span></h1>

      <form>
        <div>
        <input type="text" placeholder={'+40000 new Samsung TV'}/>
        <input type="datetime-local"/>
        </div>

        <div>
        <input type="text" placeholder={'Description'}/>
        </div>

        <button type="submit">Add new transaction</button>
      </form>
    </main>
  );
}

export default App;
