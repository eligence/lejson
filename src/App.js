// import logo from './logo.svg';
import './App.css';
import Nameplate from './components/sections/Nameplate';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience'
import Education from './components/sections/Education';

// import RenderSections from './components/sections';
//<RenderSections/>

function App() {
  return (
    <>
      <header className="App-header"></header>
      <main>
        <Nameplate/>
        <Skills/>
        <Experience/>
        <Education/>
      </main>
      <footer className="App-footer"></footer>
    </>   
  );
}

export default App;
