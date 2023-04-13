import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Form } from "react-bootstrap";

function CountrySelector() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label className="text-center">Select City</Form.Label>
          <Select options={options} value={value} onChange={changeHandler} />
        </Form.Group>
      </Form>
    </div>
  );
}

export default CountrySelector;
