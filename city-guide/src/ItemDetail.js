import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { categoryData } from './data';

const ItemDetail = () => {
  const { categoryId, itemId } = useParams();
  const item = (categoryData[categoryId] || []).find((i) => i.id === parseInt(itemId));

  if (!item) {
    return <Container><h1>Item not found</h1></Container>;
  }

  return (
    <Container fluid>
      <h1 className="my-4">{item.name}</h1>
      <Card>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Location: {item.location}
            {item.rating && <br />} Rating: {item.rating}
            {item.type && <br />} Type: {item.type}
            {/* Add more detailed information here */}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemDetail;
