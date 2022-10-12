import React from 'react'
import Card from 'react-bootstrap/Card';

function Featured(props) {
  return (
    <>
      <Card key={props.id} className='container featured py-5 my-3 d-flex'>
        <Card.Img variant="top" src={props.image} />
        <Card.Body className=''>
          <Card.Title> {props.title} </Card.Title>
          <Card.Text>
            {props.content}
          </Card.Text>
          
        </Card.Body>
      </Card>
    </>
    
  );
}

export default Featured;

