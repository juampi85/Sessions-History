import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/NewSession.css';

const NewSession = () => {
  return (
    <div className="mainSection">
      <div className="evolutionForm">
        <Form>
          <div className="nameAndDate">
            <FormGroup className="nameImput">
              <Label for="patient">Paciente</Label>
              <Input
                id="patient"
                name="patient"
                placeholder="Juan Pérez..."
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="date">Fecha</Label>
              <Input id="date" name="date" type="date" />
            </FormGroup>
          </div>
          <FormGroup>
            <Label for="evolucion">Evolución</Label>
            <Input id="evolucion" name="text" type="textarea" />
          </FormGroup>

          <Button color="info">Submit</Button>
        </Form>
      </div>
      <div className='search'>
        <div className="inputSearch">
          <Form>
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
        </div>
        <span>
          <h5>Se encontraron 3 resultados para la búsqueda</h5>
        </span>
      </div>
    </div>
  );
};

export default NewSession;
