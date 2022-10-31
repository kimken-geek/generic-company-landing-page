import React from "react";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Featured from "./components/Featured/Featured";
import Data from "./components/data";
import About2 from "./components/About2/About2";
import Header2 from "./components/Header2/Header2";

function App() {
  
  return (
    <div className="App">
      <Navigation />
      <Header2 />
      <About2 />
      <>
      <div>
        <h1 className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom">Featured Projects</h1>
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
