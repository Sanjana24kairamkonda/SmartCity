import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { categoryData } from './data';
import Sidebar from './Sidebar';
import './App.css';

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const items = categoryData[categoryId] || [];
  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/category/${categoryId}/item/${itemId}`);
  };

  const handleLocationClick = (location) => {
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(location)}`;
    window.open(googleMapsUrl, '_blank');
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
              {items.map((item) => (
                <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
                  <Card className="custom-card">
                    <Card.Body>
                      <Card.Title className="card-title">{item.name}</Card.Title>
                      <Card.Text className="card-text">
                        Location: {item.location}
                        {item.rating && <br />} Rating: {item.rating}
                        {item.type && <br />} Type: {item.type}
                      </Card.Text>
                      <div className="button-container">
                        <Button variant="primary" onClick={() => handleItemClick(item.id)}>More Info</Button>
                        <Button variant="warning" onClick={() => handleLocationClick(item.location)}>Location</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryDetail;
