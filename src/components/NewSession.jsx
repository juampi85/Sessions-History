import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState, useEffect } from 'react';
import '../styles/NewSession.css';
import useEvolutionStore from '../store/useEvolutionStore';
import swal from 'sweetalert';

const NewSession = () => {
  const { evolutions, addEvolution } = useEvolutionStore();
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [evolution, setEvolution] = useState('');
  const [newPatientName, setNewPatientName] = useState('');

  const uniqueNames = Array.from(
    new Set(evolutions.map((evolution) => evolution.name))
  );

  const handleAddEvolution = () => {
    if ((name || newPatientName) && date && evolution) {
      const patientName = newPatientName || name;
      addEvolution(patientName, date, evolution);
      swal(
        'GUARDADO',
        '...la evolución ha sido registrada correctamente',
        'success'
      );
      setName(''); // Resetear el nombre después de agregar la evolución
    } else {
      swal('ERROR', '...debe completar todos los campos', 'error');
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem('evolutions', JSON.stringify(evolutions));
  }, [evolutions]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddEvolution();
    setDate('');
    setEvolution('');
    setNewPatientName(''); // Resetear el nombre del paciente nuevo
  };

  return (
    <Form className="evolutionForm" onSubmit={handleSubmit}>
      <div className="nameAndDate">
        <FormGroup>
          <Label for="patient">Paciente Registrado</Label>
          <Input
            id="patient"
            name="patient"
            type="select"
            value={name}
            onChange={handleNameChange}
            className="nameInput"
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
          <Label for="newPatient">Nuevo Paciente</Label>
          <Input
            id="newPatient"
            name="newPatient"
            placeholder="Juan Pérez..."
            className="nameInput"
            type="text"
            value={newPatientName}
            onChange={(event) => setNewPatientName(event.target.value)}
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
      <div className="date-save">
        <FormGroup>
          <Label for="date">Fecha</Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="date"
          />
        </FormGroup>

        <Button type="submit" color="info" className="save">
          Guardar Evolución
        </Button>
      </div>
    </Form>
  );
};

export default NewSession;
