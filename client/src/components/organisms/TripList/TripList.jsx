import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TripCard from '../../molecules/TripCard/TripCard';

export default function TripList() {
  return (
    <Container>
      <h1>Trending Timlines</h1>
      <Row>
        <Col md={3}>
          <TripCard></TripCard>
        </Col>
        <Col md={3}>
          <TripCard></TripCard>
        </Col>
        <Col md={3}>
          <TripCard></TripCard>
        </Col>
        <Col md={3}>
          <TripCard></TripCard>
        </Col>
        <Col md={3}>
          <TripCard></TripCard>
        </Col>
      </Row>
    </Container>
  );
}
