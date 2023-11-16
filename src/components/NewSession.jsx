import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState, useEffect } from 'react';
import '../styles/NewSession.css';
import useEvolutionStore from '../store/useEvolutionStore';
import swal from 'sweetalert';


const NewSession = () => {
  const { evolutions, addEvolution } = useEvolutionStore(); //* Acá me traigo el estado global y las actions
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [evolution, setEvolution] = useState('');

  //* Esto es para obtener una lista de nombres únicos de los pacientes
  const uniqueNames = Array.from(
    new Set(evolutions.map((evolution) => evolution.name))
  );

  const handleAddEvolution = () => {
    if (name && date && evolution) {
      addEvolution(name, date, evolution);
      swal("GUARDADO", "...la evolución ha sido registrada correctamente", "success");
    } else {
      swal("ERROR", "...debe completar todos los campos", "error");
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    //* Acá implementé un useEffect para poder guardar evoluciones en el localStorage cuando cambien
    localStorage.setItem('evolutions', JSON.stringify(evolutions));
  }, [evolutions]);

  const handleSubmit = (event) => {
    event.preventDefault();
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
            type="select"
            value={name}
            // onChange={(event) => setName(event.target.value)}
            onChange={handleNameChange}
            className="nameInput"
          >
            <option value="">Seleccionar paciente ya cargado</option>
            {uniqueNames.map((uniqueName, index) => (
              <option key={index} value={uniqueName}>
                {uniqueName}
              </option>
            ))}
          </Input>
          <Input
            type="text"
            placeholder="Agregar nuevo paciente..."
            onChange={(event) => {
              if (!uniqueNames.includes(event.target.value)) {
                setName(event.target.value);
              }
            }}
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
