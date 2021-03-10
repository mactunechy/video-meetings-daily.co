import { startCase } from "lodash";
import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";

const TableContainer = styled.div``;
const Stats = styled.div`
  text-align: right;
  font-size: 1rem;
  color: #666;
  margin: 1rem 0;
`;
const RoomCard = styled.div`
  border: 2px solid #aaa;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  color: #666;
  font-size: 1.5rem;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
    transition: all 0.3s ease;
  }
`;

const NoResults = styled.div`
  margin-top: 5rem;
  color: #666;
  font-size: 2rem;
`;
const Timestamp = styled.span`
  color: #aaa;
  font-size: 1rem;
`;

const RoomsTable = ({ data }) => {
  return (
    <TableContainer>
      <Stats>Total: {data?.total_count}</Stats>
      {data?.data?.map((room) => {
        return (
          <RoomCard key={room.id}>
            <Link
              to={{
                pathname: `/rooms/${room.id}`,
                state: room,
              }}
            >
              {startCase(room.name)}
            </Link>
            <Timestamp>started {moment(room.created_at).fromNow()}</Timestamp>
          </RoomCard>
        );
      })}
      {data?.total_count === 0 && (
        <NoResults> You haven't created any room</NoResults>
      )}
    </TableContainer>
  );
};

export default RoomsTable;
