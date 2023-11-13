import '../src/styles/App.css';
import DisplaySessions from './components/DisplaySessions';
import NewSession from './components/NewSession';

function App() {
  return (
    <>
      <div className="mainContainer">
        <h1 className='mainTitle'>Evoluciones Clínicas</h1>
        <NewSession />
        <DisplaySessions />
      </div>
    </>
  );
}

export default App;
