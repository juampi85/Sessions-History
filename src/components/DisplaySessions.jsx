import '../styles/DisplaySessions.css';
import { Table } from 'reactstrap';
import useEvolutionStore from '../store/useEvolutionStore';

const DisplaySessions = () => {
  const { searchResults } = useEvolutionStore();

  return (
    <Table hover borderless className="table">
      <thead>
        <tr>
          {/* <th>ID</th> */}
          <th>Nombre</th>
          <th>Fecha</th>
          <th>Evolución</th>
        </tr>
      </thead>
      <tbody>
        {searchResults.map((result) => (
          <tr key={result.id}>
            {/* <td>{result.id}</td> */}
            <td>{result.name}</td>
            <td>{result.date}</td>
            <td>{result.evolution}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DisplaySessions;
