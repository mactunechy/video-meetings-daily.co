import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { camelCase } from "lodash";

import { createRoom, getRooms } from "../api";
import RoomForm from "./RoomForm";
import RoomsTable from "./RoomsTable";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 10rem;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #666;
`;

const AppLoading = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #aaa;
  margin-top: 5rem;
`;

const RoomList = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) return;
    setLoading(true);
    createRoom({ name: camelCase(name)})
      .then((data) => {
        console.log(data);
        setName("");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(loadData);
  };

  const loadData = () => {
    getRooms()
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    loadData();
  }, []);

  if (loading) return <AppLoading>Please wait...</AppLoading>;

  return (
    <Container>
      <Title>Meeting rooms</Title>
      {/* Create a room  */}
      <RoomForm
        handleChange={(e) => setName(e.target.value)}
        handleSubmit={handleSubmit}
        name={name}
      />

      {/* List of rooms */}
      <RoomsTable data={data} />
    </Container>
  );
};

export default RoomList;
