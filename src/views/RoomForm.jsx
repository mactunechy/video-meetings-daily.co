import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled.input`
  flex: 1;
  background-color: #350b79;
  color: #fff;
  padding: 2rem;
  border-radius: 5px;
  font-size: 2rem;
`;

const FormInput = styled.input`
  flex: 5;
  border-radius: 5px;
  padding: 2rem;
  border: #ccc solid 2px;
  margin-right: 0.25rem;
  font-size: 1.5rem;
`;

const RoomForm = ({ handleSubmit, name, handleChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Create new room"
      />
      <SubmitButton type="submit" value="save" />
    </Form>
  );
};

export default RoomForm;
