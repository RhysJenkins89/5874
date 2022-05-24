import Nav from '../src/components/Nav'
import Landing from "../src/sections/Landing"
import IntroText from "../src/sections/IntroText"
import Footer from "../src/sections/Footer"
import Projects from "../src/sections/Projects"
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      {/* <IntroText />
      <Projects />
      <Footer /> */}
    </div>
  );
}

export default App;