import React, { useState } from 'react';
import { Modal } from 'antd';
import Ruleta from '../images/ruleta.png';
import TabsInformation from './TabsInformation';
import 'antd/dist/antd.css';
import '../styles/home.css';

const Home = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='Home'>
      <div className='ruleta'>
        <button className='btn-ruleta'>
          <img className='img-ruleta' src={Ruleta} alt='ruleta' />
        </button>
      </div>
      <input
        class='form-control fs-5 w-75 mx-auto my-5'
        type='search'
        placeholder='Buscar'
        aria-label='Buscar'
      />

      <div className='container place p-2 my-5' style={{ color: 'white' }}>
        <div className='divImgPlace'>
          <img
            className='float-start mx-3 mb-3 mt-5 imgPlace'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82yDrhjKDPkonzkqy6Q9iFZOJMwR99n9qVA&usqp=CAU'
            alt='imagen lugar'
            width='200'
            height='200'
          />
        </div>
        <div className='float-end border border-white p-2 mt-5 mx-3'>
          <h5 className='mt-2' style={{ color: 'white' }}>
            ¿Visitaste el lugar?
          </h5>
          <img
            className='mb-2'
            src='https://i1.wp.com/farm6.static.flickr.com/5012/5488631459_bac46cb32e_m.jpg?resize=240%2C240'
            alt='logo'
            width='125'
            height='125'
          />
        </div>
        <h2 style={{ color: 'white' }}>Alto de San Miguel</h2>
        <p>
          El nacimiento del Río Aburrá, o como comúnmente se le conoce (Río
          Medellín), se encuentra en el Alto de San Miguel en el municipio de
          Caldas, a solo 30 minutos de la ciudad de Medellín. Recorrerlo es una
          experiencia revitalizadora cuando, en medio del camino, se puede ir
          encontrando con Santa Isabel, La Moladora, El Tesoro y La Vieja,
          quebradas que más adelante se confunden entre las aguas del Río
          Medellín, el cual atraviesa de Sur a Norte el Valle de Aburrá. Eso sin
          contar las cientos de especies que durante el camino adornan y alegran
          el paisaje.{' '}
        </p>
        <button className='button-modal p-1' onClick={() => setOpen(true)}>Información</button>
      </div>

      <div className='container p-2'>
        <img
          className='float-start m-2'
          src='https://s1.wklcdn.com/image_91/2754237/16761069/10524508Master.jpg'
          alt='imagen lugar'
          width='200'
          height='200'
        />
        <div className='float-end border border-white p-2 mt-2 mx-3'>
          <h5 className='mt-1'>¿Visitaste el lugar?</h5>
          <img
            className='mb-2'
            src='https://i1.wp.com/farm6.static.flickr.com/5012/5488631459_bac46cb32e_m.jpg?resize=240%2C240'
            alt='logo'
            width='125'
            height='125'
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

      {open && (
        <Modal
          title={<b>Información del lugar</b>}
          visible={open}
          style={{ top: 50 }}
          onCancel={() => setOpen(false)}
          confirmLoading
          cancelText='Salir'
          okText='Escanear código QR'
          onOk={() => { }}
          width={920}
        >
          <b>
            <h3 className='text-center'>Alto de San Miguel</h3>
          </b>
          <div
            id='carouselControls'
            className='carousel slide'
            data-bs-ride='carousel'
          >
            <div className='carousel-inner m-auto' style={{ width: '90%', boxShadow: '0 20px 40px #70db24' }}>
              <div className='carousel-item active'>
                <img
                  src='https://www.medellin.travel/wp-content/uploads/2020/06/Alto-San-Miguel.jpg'
                  width='800'
                  height='300'
                  className='d-block w-100'
                  alt='Aquí nace el rio Medellín'
                />
              </div>
              <div class='carousel-item'>
                <img
                  src='http://www.elmundo.com/images/ediciones/Lunes_30_12_2013/Lunes_30_12_2013@@SAN-MIGUEL-600.jpg'
                  width='800'
                  height='300'
                  className='d-block w-100'
                  alt='Clave para la biodiversidad'
                />
              </div>
              <div class='carousel-item'>
                <img
                  src='https://cr00.epimg.net/emisora/imagenes/2016/10/05/medellin/1475693059_346276_1475693190_noticia_normal.jpg'
                  width='800'
                  height='300'
                  className='d-block w-100'
                  alt='Reserva forestal'
                />
              </div>
            </div>
          </div>
          <TabsInformation />
        </Modal>
      )}
    </div>
  )
}

export default Home;