// import logo from './logo.svg';
import './App.css';
import Nameplate from './components/sections/Nameplate';
import Skills from './components/sections/Skills';
// import RenderSections from './components/sections';
//<RenderSections/>

function App() {
  return (
    <>
      <header className="App-header"></header>
      <main>
        <Nameplate/>
        <Skills/>
      </main>
      <footer className="App-footer"></footer>
    </>   
  );
}

export default App;
