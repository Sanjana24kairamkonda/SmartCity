// src/Mainpage.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Maincontent from './Maincontent';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Mainpage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={2} className="sidebar">
          <Sidebar />
        </Col>
        <Col xs={10} className="content-wrapper">
          <Container fluid>
            <br />
            <Row>
            <Maincontent/>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Mainpage;
