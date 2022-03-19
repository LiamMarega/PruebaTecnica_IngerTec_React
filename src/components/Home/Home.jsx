import React, {useState} from 'react'
import Carrusel from '../Carousel/Carousel.jsx'
import ScrollNavBar from '../NavBar/NavBar.jsx'
import Animales from '../Animales/Animales.jsx'
import TextTarea from '../TextTarea/TextTarea.jsx'
import Footer from '../Footer/Footer.jsx'
import { Container, Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"

function Home() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5500);

  return (
    <div>
       <Container
        fluid={+true}
        className={loading ? "loading true" : "loading false"}
      >
       
        <Spinner animation="border" variant="dark" />
      </Container>
        <ScrollNavBar />
        <Carrusel />
        <Animales />
        <TextTarea />
        <Footer />
    </div>
  )
}

export default Home