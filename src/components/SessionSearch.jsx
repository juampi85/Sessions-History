import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/SessionSearch.css';
import useEvolutionStore from '../store/useEvolutionStore';
import { useState } from 'react';

const SessionSearch = () => {
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [searchName, setSearchName] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [showNotFoundMessage, setShowNotFoundMessage] = useState(false);
  const { evolutions } = useEvolutionStore();

  //* Esto es para obtener una lista de nombres únicos de los pacientes
  const uniqueNames = Array.from(
    new Set(evolutions.map((evolution) => evolution.name))
  );

  const handleSearch = () => {
    const filteredEvolutions = evolutions.filter((evolution) => {
      const nameMatch = evolution.name
        .toLowerCase()
        .includes(searchName.toLowerCase());
      const dateMatch = evolution.date.includes(searchDate);
      return nameMatch && dateMatch;
    });

    setSearchResultCount(filteredEvolutions.length);
    useEvolutionStore.setState({ searchResults: filteredEvolutions });

    setHasSearched(true);

    if (searchResultCount === 0) {
      setShowNotFoundMessage(true); //* Con esto muestro el msje de erroir si no hay resultados
      setTimeout(() => {
        setShowNotFoundMessage(false); //* Y acá programo que el mensaje desaparezca después de 2 segundos
      }, 2000);
    }

    setSearchName('');
    setSearchDate('');
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
              // placeholder="Juan Pérez..."
              type="select"
              value={searchName}
              onChange={(event) => setSearchName(event.target.value)}
            >
              <option value="">Seleccionar paciente</option>
              {uniqueNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </Input>
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
        {hasSearched && //* Va mostrar el mensaje solo si se ha realizado una búsqueda
          (searchResultCount ? (
            searchResultCount > 1 ? (
              <h5>
                Se encontraron {searchResultCount} resultados para la búsqueda
              </h5>
            ) : (
              <h5>Se encontró un resultado coincidente con la búsqueda.</h5>
            )
          ) : (
            showNotFoundMessage && ( //* Acá va mostrar el mensaje solo si showNotFoundMessage es verdadero
              <h5 className="evolutionsNotFounded">
                No se encontraron resultados. Controlar datos ingresados.
              </h5>
            )
          ))}
      </span>
    </div>
  );
};

export default SessionSearch;
