import React from 'react'
import Container from 'react-bootstrap/Container';
import HeaderImg from '../headerimg.png'

const Header = () => {
  return (
    <Container className='mt-2 col-12 col-md-9 col-lg-12 container header-container d-flex'>
      <div className="col-12 col-md-6 col-lg-6 py-5 ms-5">
					<h1 className="text-black mt-5">We are the leaders in the industry</h1>
					<p className="text-black lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum.</p>
					<button className="btn btn-5 btn-lg col-lg-4 col-6 btn_custom btn_shadow">Engage Us</button>
			</div>
      <div className="col-12 col-md-9 col-lg-6">
        <img src= {HeaderImg} className='headerimg' alt='headerimg'/>
      </div>
    </Container>
  )
}

export default Header