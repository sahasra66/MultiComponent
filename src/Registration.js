import React, { useState } from "react";
import { Col, Row, Container, Card, Form } from "react-bootstrap";
import FirstNameComponent from "./components/FirstName";
import LastName from "./components/LastName";
import EmailComponent from "./components/EmailComponent";
import CityList from "./components/CityList";
import SubmitButton from "./components/SubmitButton";
import "./styles.css";
export default function Registration() {
  const [formData, setFormData] = useState([]);
  const [formInputData, setFormInputData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    city: ""
  });
  const handleInputChange = (evnt) => {
    const inputFieldValue = evnt.target.value;
    const inputFieldName = evnt.target.name;
    const NewInputValue = {
      ...formInputData,
      [inputFieldName]: inputFieldValue
    };
    setFormInputData(NewInputValue);
    console.log(NewInputValue);
  };
  const handleFormSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      console.log(formInputData);
    }
  };
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <div className="mb-3">
                    <FirstNameComponent
                      firstName={formInputData.firstName}
                      handleInputChange={handleInputChange}
                    />
                    <LastName
                      lastName={formInputData.lastName}
                      handleInputChange={handleInputChange}
                    />
                    <EmailComponent
                      emailAddress={formInputData.emailAddress}
                      handleInputChange={handleInputChange}
                    />
                    <CityList
                      city={formInputData.city}
                      handleInputChange={handleInputChange}
                    />
                    <SubmitButton handleFormSubmit={handleFormSubmit} />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
