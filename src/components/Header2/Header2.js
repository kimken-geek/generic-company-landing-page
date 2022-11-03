import React from 'react'

function Header2() {
  return (
    <div>
        <section className='container d-flex header-heros'>
            <div className='left-section row'>
                <h2 className="">We are the leaders in the industry</h2>
                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                    inventore similique sit aliquid odio hic perferendis incidunt
                    ducimus necessitatibus neque ullam cum, laudantium odit, vel rem
                    impedit veniam doloremque? Alias.
                </div>
                <button className="btn btn-5 btn-lg col-lg-4 col-6 btn_custom btn_shadow">Engage Us</button>
            </div>
            <div className='right-section row'>
                <img src= "https://www.htmlden.com/wp-content/themes/ks/img/web-developer-master-tn.svg" className='headerimg' alt='headerimg'/>
            
            </div>
      </section>
    </div>
  )
}

export default Header2