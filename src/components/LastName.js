import { Form } from "react-bootstrap";
const LastName = ({ handleInputChange, lastName }) => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label className="text-center">Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
          />
        </Form.Group>
      </Form>
    </div>
  );
};
export default LastName;
