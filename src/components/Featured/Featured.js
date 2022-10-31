import React from 'react'
import Card from 'react-bootstrap/Card';

function Featured(props) {
  return (
    <section className='container d-inline col-4'>
      <Card key={props.id} className='featured p-2 my-3 d-flex style="width: 18rem;"'>
        <Card.Img variant="top" src={props.image} />
        <Card.Body className=''>
          <Card.Title> {props.title} </Card.Title>
          <Card.Text>
            {props.content}
          </Card.Text>
        </Card.Body>
        <a href='#'className=' btn btn-5 text-center'>Read More</a>
      </Card>
    </section>
    
  );
}

export default Featured;

