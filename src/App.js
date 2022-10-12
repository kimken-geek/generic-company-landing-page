import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Featured from "./components/Featured/Featured";
import Data from "./components/data";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <>
      <div>
        <h1 className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom">Featured Projects</h1>
      </div>
      <div className="cardcontainer container my-5">
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
