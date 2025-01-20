import './App.css'
import Navbar from './assets/navbar'
import Footer from './assets/Footer'

function App() {
  const name = "Edvin"
  const age = 25
  const date = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  return (
    < div className="App">

      <Navbar icon={"🐺 "} logo={'/logo.png'} number="5" />


      <h1>Hello {name}</h1>
      <h2>Age {age + 5}</h2>
      <button>Click me</button>
      <div>
        Current time is: {date}
      </div>
      <Footer />
    </div>
  )
}


export default App