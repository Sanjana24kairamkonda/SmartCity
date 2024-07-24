// src/Sidebar.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ListGroup variant="flush">
        <ListGroup.Item as={Link} to="/category/1">Cafes</ListGroup.Item>
        <ListGroup.Item as={Link} to="/category/2">Hospitals</ListGroup.Item>
        <ListGroup.Item as={Link} to="/category/3">Transport</ListGroup.Item>
        <ListGroup.Item as={Link} to="/category/4">Hotels</ListGroup.Item>
        <ListGroup.Item as={Link} to="/category/5">Educational Institutions</ListGroup.Item>
        <ListGroup.Item as={Link} to="/category/6">Petrol Bunks</ListGroup.Item>
        <ListGroup.Item as={Link} to="/category/7">Police Stations</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
