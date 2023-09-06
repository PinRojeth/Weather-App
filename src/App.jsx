import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1 className="header">Weather App</h1>
      </header>
      <section className="weather-block">
        <div className="search-area">
          <form action="" className="search-form">
            <input type="text" className="search-input" placeholder="Enter The Cities"/>
            <button className="search-btn"></button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
