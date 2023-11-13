import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState, useEffect } from 'react';
import '../styles/NewSession.css';
import useEvolutionStore from '../store/useEvolutionStore';

const NewSession = () => {
  const { evolutions, addEvolution } = useEvolutionStore(); //* Acá me traigo el estado global y las actions
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [evolution, setEvolution] = useState('');

  const handleAddEvolution = (name, date, evolution) => {
    addEvolution(name, date, evolution);
  };

  useEffect(() => {
    //* Acá implementé un useEffect para poder guardar evoluciones en el localStorage cuando cambien
    localStorage.setItem('evolutions', JSON.stringify(evolutions));
  }, [evolutions]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Obteniendo los datos del formulario y añadiendo la evolución
    //* Acá llamo a la función para agregar la evolución y guardarla en el estado global
    handleAddEvolution(name, date, evolution);

    //* Acá reseteo los campos después de enviar el formulario
    setName('');
    setDate('');
    setEvolution('');
  };

  return (
    <Form className="evolutionForm" onSubmit={handleSubmit}>
      <div className="nameAndDate">
        <FormGroup>
          <Label for="patient">Paciente</Label>
          <Input
            id="patient"
            name="patient"
            placeholder="Juan Pérez..."
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="nameInput"
          />
        </FormGroup>
        <FormGroup>
          <Label for="date">Fecha</Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={date}
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
          value={evolution}
          onChange={(event) => setEvolution(event.target.value)}
        />
      </FormGroup>

      <Button type="submit" color="info">
        Guardar Evolución
      </Button>
    </Form>
  );
};

export default NewSession;
