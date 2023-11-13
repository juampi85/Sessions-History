import '../src/styles/App.css';
import DisplaySessions from './components/DisplaySessions';
import NewSession from './components/NewSession';
import SessionSearch from './components/SessionSearch';

function App() {
  return (
    <>
      <div className="mainContainer">
        <h1 className="mainTitle">Evoluciones Clínicas</h1>
        <div className="mainSection">
          <NewSession />
          <SessionSearch />
        </div>
        <DisplaySessions />
      </div>
    </>
  );
}

export default App;
