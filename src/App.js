import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Featured from "./components/Featured/Featured";
import Data from "./components/data";
import About2 from "./components/About2/About2";
import Header2 from "./components/Header2/Header2";
import Navigation from "./components/Navigation/Navigation";

function App() {
  
  return (
    <div className="App">
      <Navigation />
      <Header2 />
      <About2 />
      <>
      <div>
        <h1 className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom" id='Featured'>Featured Projects</h1>
      </div>
      <div className="cardcontainer container d-flex flex-wrap min-vh-100">
      {Data.map(Data =>(
        <Featured 
          key={Data.id}
          image={Data.image}
          title={Data.title}
          content={Data.content}
         />
      ))}
      </div>
      </>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
