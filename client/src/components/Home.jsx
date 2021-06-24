import React, { useState } from "react";
import Ruleta from "../images/ruleta.png";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import "../styles/home.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  const closeModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <div className="Home">
      <div className="ruleta">
        <button className="btn-ruleta">
          <img className="img-ruleta" src={Ruleta} alt="ruleta" />
        </button>
      </div>
      <input
        class="form-control fs-5 w-75 mx-auto my-5"
        type="search"
        placeholder="Buscar"
        aria-label="Buscar"
      />

      <div className="container p-2 my-4">
        <button className="button-modal" onClick={openModal}>
          <img
            className="float-start m-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82yDrhjKDPkonzkqy6Q9iFZOJMwR99n9qVA&usqp=CAU"
            alt="imagen lugar"
            width="200"
            height="200"
          />
          <div className="float-end border border-white p-2 mt-2 mx-3">
            <h5 className="mt-1">¿Visitaste el lugar?</h5>
            <img
              className="mb-2"
              src="https://i1.wp.com/farm6.static.flickr.com/5012/5488631459_bac46cb32e_m.jpg?resize=240%2C240"
              alt="logo"
              width="125"
              height="125"
            />
          </div>
          <h2>Alto de San Miguel</h2>
          <p>
            El nacimiento del Río Aburrá, o como comúnmente se le conoce (Río
            Medellín), se encuentra en el Alto de San Miguel en el municipio de
            Caldas, a solo 30 minutos de la ciudad de Medellín. Recorrerlo es una
            experiencia revitalizadora cuando, en medio del camino, se puede ir
            encontrando con Santa Isabel, La Moladora, El Tesoro y La Vieja,
            quebradas que más adelante se confunden entre las aguas del Río
            Medellín, el cual atraviesa de Sur a Norte el Valle de Aburrá. Eso sin
            contar las cientos de especies que durante el camino adornan y alegran
            el paisaje.{" "}
          </p>
        </button>
        <Modal title="Alto de San Miguel"
          visible={showModal}
          centered
          onCancel={closeModal}
          footer={[
            <Button key="submit" type="primary" onClick={closeModal} >
              Listo
            </Button>,
            <Button
              key="link"
              href="https://google.com"
              type="primary"
            >
              Escanear QR
            </Button>,
          ]}
          width={1000}
        >
          <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://www.medellin.travel/wp-content/uploads/2020/06/Alto-San-Miguel.jpg" width="800" height="300" className="d-block w-100" alt="Aquí nace el rio Medellín" />
              </div>
              <div class="carousel-item">
                <img src="http://www.elmundo.com/images/ediciones/Lunes_30_12_2013/Lunes_30_12_2013@@SAN-MIGUEL-600.jpg" width="800" height="300" className="d-block w-100" alt="Clave para la biodiversidad" />
              </div>
              <div class="carousel-item">
                <img src="https://cr00.epimg.net/emisora/imagenes/2016/10/05/medellin/1475693059_346276_1475693190_noticia_normal.jpg" width="800" height="300" className="d-block w-100" alt="Reserva forestal" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
          <p>
            <button className="btn btn-dark m-5 fs-5" data-bs-toggle="collapse" data-bs-target="#collapseFauna" type="button">Fauna</button>
            <button className="btn btn-dark m-2 fs-5" data-bs-toggle="collapse" data-bs-target="#collapseFlora" type="button">Flora</button>
            <button className="btn btn-dark m-5 fs-5" data-bs-toggle="collapse" data-bs-target="#collapseDescription" type="button">Descripción</button>
            <button className="btn btn-dark m-2 fs-5" data-bs-toggle="collapse" data-bs-target="#collapseLocation" type="button">Ubicación</button>
            <button className="btn btn-dark m-5 fs-5" data-bs-toggle="collapse" data-bs-target="#collapseRecommendations" type="button">Recomendaciones</button>
          </p>
          <div className="collapse-fauna" id="collapseFauna">
            <div className="card card-body">
            Para fauna se tienen reportadas 352 especies de fauna vertebrada con presencia confirmada para la zona. De la cuales 20 especies son endémicas para el país, siendo un área importante para la preservación de cuatro especies de anuros con distribuciones muy restringidas.
            </div>
          </div>
          <div className="collapse-flora" id="collapseFlora">
            <div className="card card-body">
            250 especies de plantas.
            </div>
          </div>
          <div className="collapse-description" id="collapseDescription">
            <div className="card card-body">
            Lo ha visto y sentido todo, desde los pueblos indígenas aburraes y la fundación de la Villa de la Candelaria, hasta los pasos de las más de 3.7 millones de personas que hoy habitan el Valle de Aburrá.<br></br> Si se buscara un testigo de todo lo que ha pasado por este valle, ese sin duda sería el río. A él, incluso, el Valle de Aburrá debe su nombre.Y no solo su nombre, también es su columna vertebral. 
            </div>
          </div>
          <div className="collapse-location" id="collapseLocation">
            <div className="card card-body">
            El Alto de San Miguel, se encuentra ubicado al Sur del Valle de Aburrá, a 30 km de la ciudad de Medellín, en el municipio de Caldas, entre las veredas La Clara, La Salada parte baja y El Sesenta, en las coordenadas geográficas (latitud 6027512 longitud 7559600.). Este ecosistema está ubicado entre los 1850m.
            </div>
          </div>
          <div className="collapse-recommendations" id="collapseRecommendations">
            <div className="card card-body">
            Para ir al Alto San Miguel, lo mas fácil, sino tienes vehículo, es tomar el Metro hasta la estación Estrella, allí tomar un bus que te lleva a la vereda la Clara en Caldas, o los Lagos y de ahí iniciar el recorrido a pie. debes llevar bloqueador solar, agua y alimentos, ropa cómoda para caminar y zapatos de buen agarre que se puedan mojar, porque en algunos lugares hay que caminar por el cauce del rió.
            </div>
          </div>
        </Modal>
      </div>

      <div className="container p-2">
        <img
          className="float-start m-2"
          src="https://s1.wklcdn.com/image_91/2754237/16761069/10524508Master.jpg"
          alt="imagen lugar"
          width="200"
          height="200"
        />
        <div className="float-end border border-white p-2 mt-2 mx-3">
          <h5 className="mt-1">¿Visitaste el lugar?</h5>
          <img
            className="mb-2"
            src="https://i1.wp.com/farm6.static.flickr.com/5012/5488631459_bac46cb32e_m.jpg?resize=240%2C240"
            alt="logo"
            width="125"
            height="125"
          />
        </div>
        <h2>Chorro de las Campanas</h2>
        <p>
          Allí comenzará nuestro ascenso por un potrero que nos ofrecerá la
          vista del Valle de Aburrá entre. Proseguiremos en medio a bosques de
          pinos hasta llegar al borde de la Quebrada La Miel. Abandonaremos su
          cauce y comenzaremos un exigente ascenso entre pinos muy empinado (si
          tenemos suerte podremos observar algún Cacique Candela, ave endémica
          de estos bosques) y con ayuda de cuerdas llegaremos hasta un mirador,
          donde después de tomar un pequeño descanso, reanudaremos nuestra
          aventura bajando entre rocas, ayudados de cuerdas.
        </p>
      </div>
    </div>
  );
};

export default Home;
