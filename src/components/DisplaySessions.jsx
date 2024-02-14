import '../styles/DisplaySessions.css';
import { Table } from 'reactstrap';
import useEvolutionStore from '../store/useEvolutionStore';
import { BsFillPencilFill, BsFillTrash3Fill } from 'react-icons/bs';

const DisplaySessions = () => {
  const { searchResults } = useEvolutionStore();

  return (
    <Table hover borderless className="table">
      <thead>
        <tr className="titles">
          {/* <th>ID</th> */}
          <th>Nombre</th>
          <th>Fecha</th>
          <th>Evolución</th>
          <th>Corregir</th>
          {/*<th>Eliminar</th> */}
        </tr>
      </thead>
      <tbody>
        {searchResults.map((result) => (
          <tr key={result.id} className="titles">
            {/* <td>{result.id}</td> */}
            <td>{result.name}</td>
            <td>{result.date}</td>
            <td>{result.evolution}</td>
            <td>
              <BsFillPencilFill className="icons" />
              <BsFillTrash3Fill className="icons" />
            </td>
            {/* <td>
            </td> */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DisplaySessions;
