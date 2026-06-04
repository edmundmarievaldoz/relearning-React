import './App.scss'

function App() {

  const loggedInUser = "Edmund";

  return (
    <div className = "Layout">
      <header>
        <h1>Basic React Demo</h1>
        <p className ="welcome"> Welcome {loggedInUser}!</p>
      </header>

      <nav>
        <div className = "navItem">
          <a to="/">Home</a>
        </div>
        <div className = "navItem">
          <a to="/modules">Modules</a>
        </div>
        <div className = "navItem">
          <a to="/students">Students</a>
        </div>
      </nav>

      <main>
        <p>Home Page</p>
      </main>

      <footer>
        <p className="thankyou">Copyright 2024</p>
      </footer>
    </div>
  )
}

export default App
