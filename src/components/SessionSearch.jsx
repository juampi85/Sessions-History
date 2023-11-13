import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/SessionSearch.css';
import useEvolutionStore from '../store/useEvolutionStore';
import { useState } from 'react';

const SessionSearch = () => {
  const [searchName, setSearchName] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [searchResultCount, setSearchResultCount] = useState(0);

  const evolutions = useEvolutionStore((state) => state.evolutions);

  const handleSearch = () => {
    // Filtrar las evoluciones por nombre y fecha
    const filteredEvolutions = evolutions.filter((evolution) => {
      const nameMatch = evolution.name
        .toLowerCase()
        .includes(searchName.toLowerCase());
      const dateMatch = evolution.date.includes(searchDate);
      return nameMatch && dateMatch;
    });

    // Actualizar el contador de resultados
    setSearchResultCount(filteredEvolutions.length);
  };

  return (
    <div className="search">
      <Form className="inputSearch">
        <div className="nameAndDate">
          <FormGroup className="nameInput">
            <Label for="patient">Buscar evolución por paciente</Label>
            <Input
              id="patient"
              name="patient"
              placeholder="Juan Pérez..."
              type="text"
              value={searchName}
              onChange={(event) => setSearchName(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="date">Buscar por fecha</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={searchDate}
              onChange={(event) => setSearchDate(event.target.value)}
            />
          </FormGroup>
        </div>
        <Button color="success" onClick={handleSearch}>
          Submit
        </Button>
      </Form>

      <span>
        {searchResultCount ?
          searchResultCount > 1 ?
            <h5>Se encontraron {searchResultCount} resultados para la búsqueda</h5> :
            <h5>Se encontró un resultado coincidente con la búsqueda.</h5> :
          <h5 className='evolutionsNotFounded'>No se encontraron resultados. Controlar datos ingresados.</h5>
      }
      </span>
    </div>
  );
};

export default SessionSearch;
