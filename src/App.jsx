import './App.css'
import Navbar from './assets/navbar'
import Footer from './assets/Footer'

function App() {
  const name = "Edvin"
  const age = 25
  const date = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

  const shop = { url: '/shop', text: "Shop" }
  const home = { url: '/home', text: "Home" }
  const links = [home, shop]

  const navbarProps = {
    logo: './logo.png',
    links: links
  }

  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );

  return (
    < div className="App">

      <Navbar {...navbarProps} />
      <ul>
        {listItems}
      </ul>

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