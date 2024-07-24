import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Cafes' },
  { id: 2, name: 'Hospitals' },
  { id: 3, name: 'Transport' },
  { id: 4, name: 'Hotels' },
  { id: 5, name: 'Educational Institutions' },
  { id: 6, name: 'Petrol Bunks' },
  { id: 7, name: 'Police Stations' }
];

const MainContent = () => {
  const navigate = useNavigate();

  const handleButtonClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <Container fluid>
      <Row>
        {categories.map(category => (
          <Col key={category.id} sm={12} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>
                  Some details or information about {category.name}.
                </Card.Text>
                <Button variant="primary" onClick={() => handleButtonClick(category.id)}>More Info</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainContent;
