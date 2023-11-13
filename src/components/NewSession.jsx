import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import '../styles/NewSession.css';
import useEvolutionStore from '../store/useEvolutionStore';

const NewSession = () => {
  const addEvolution = useEvolutionStore((state) => state.addEvolution);

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [evolution, setEvolution] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const evolutionData = {
      name,
      date,
      evolution,
      id: Math.random().toString(36).substr(2, 9), // Generar un ID único para la evolución
    };

    addEvolution(evolutionData);

    localStorage.setItem('evolution', JSON.stringify(evolutionData));
  };

  return (
    <div className="mainSection">
      <Form className="evolutionForm" onSubmit={handleSubmit}>
        <div className="nameAndDate">
          <FormGroup className="nameImput">
            <Label for="patient">Paciente</Label>
            <Input
              id="patient"
              name="patient"
              placeholder="Juan Pérez..."
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="date">Fecha</Label>
            <Input
              id="date"
              name="date"
              type="date"
              onChange={(event) => setDate(event.target.value)}
            />
          </FormGroup>
        </div>
        <FormGroup>
          <Label for="evolucion">Evolución</Label>
          <Input
            id="evolucion"
            name="text"
            type="textarea"
            onChange={(event) => setEvolution(event.target.value)}
          />
        </FormGroup>

        <Button type="submit" color="info">
          Guardar Evolución
        </Button>
      </Form>

      <div className="search">
        <Form className="inputSearch">
          <div className="nameAndDate">
            <FormGroup className="nameImput">
              <Label for="patient">Buscar evolución por paciente</Label>
              <Input
                id="patient"
                name="patient"
                placeholder="Juan Pérez..."
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="date">Buscar por fecha</Label>
              <Input id="date" name="date" type="date" />
            </FormGroup>
          </div>
          <Button color="success">Submit</Button>
        </Form>

        <span>
          <h5>Se encontraron 3 resultados para la búsqueda</h5>
        </span>
      </div>
    </div>
  );
};

export default NewSession;
