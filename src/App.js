import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <main>
      <h1>
        ₹400000<span>.00</span>
      </h1>

      <form>
        <div className="basic">
          <input type="text" placeholder={"+40000 new Samsung TV"} />
          <input type="datetime-local" />
        </div>

        <div>
          <input type="text" placeholder={"Description"} />
        </div>

        <button type="submit">Add new transaction</button>
      </form>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Bike</div>
            <div className="description">It was time for new bike.</div>
          </div>

          <div className="right">
            <div className="price red">-₹50000</div>
            <div className="datetime">2025-07-30 12:45</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">Gig Job</div>
            <div className="description">Build a website.</div>
          </div>

          <div className="right">
            <div className="price green">+₹40000</div>
            <div className="datetime">2025-07-30 12:45</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">Samsung Ultra Phone</div>
            <div className="description">It was time for new Phone.</div>
          </div>

          <div className="right">
            <div className="price red">-₹90000</div>
            <div className="datetime">2025-07-30 12:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
