import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/NewSession.css';

const NewSession = () => {
  return (
    <div className="evolutionForm">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="date">Fecha</Label>
          <Input
            id="date"
            name="date"
            // placeholder="with a placeholder"
            type="date"
          />
        </FormGroup>

        <FormGroup>
          <Label for="evolucion">Evolución</Label>
          <Input id="evolucion" name="text" type="textarea" />
        </FormGroup>

        <Button color="success">Submit</Button>
      </Form>
    </div>
  );
};

export default NewSession;
