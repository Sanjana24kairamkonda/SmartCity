// src/CategoryPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

const categoryNames = {
  1: 'cafes',
  2: 'hospitals',
  3: 'transport',
  4: 'hotels',
  5: 'educational institutions',
  6: 'petrol bunks',
  7: 'police stations'
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryInfo = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:5000/api/places`, {
          params: {
            query: categoryNames[categoryId]
          }
        });

        // Debug: Check the response
        console.log('API Response:', response.data);

        setPlaces(response.data.results || []);
      } catch (error) {
        console.error('Error fetching category info:', error);
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryInfo();
  }, [categoryId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container fluid>
      <Row>
        {places.length > 0 ? (
          places.map((place, index) => (
            <Col key={index} xs={12} md={4} lg={3} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{place.name}</Card.Title>
                  <Card.Text>
                    Rating: {place.rating || 'N/A'}
                  </Card.Text>
                  <Card.Text>
                    Address: {place.formatted_address}
                  </Card.Text>
                  {place.photos && place.photos.length > 0 && (
                    <Card.Img
                      variant="top"
                      src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
                    />
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p>No places found.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CategoryPage;
