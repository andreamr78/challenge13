import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CandidateCards(props: any) {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.props.avatar_url} />
      <Card.Body>
        <Card.Title>{props.props.login}</Card.Title>
        <Card.Text className='card-text-content'>
          <p>{props.props.login}@gmail.com</p>
          <p>{props.props.html_url}</p>
          <p>{props.props.bio == undefined ? `Information Unavailable`: `${props.props.bio}`}</p>
          <p> {props.props.company == undefined ? `Information Unavailable`: `${props.props.company}`}</p>
          <p> {props.props.location == undefined ? `Information Unavailable`: `${props.props.location}`}</p>
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  )
}

export default CandidateCards