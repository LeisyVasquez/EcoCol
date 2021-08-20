import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Modal } from 'antd';
import Ruleta from '../images/ruleta.png';
import TabsInformation from './TabsInformation';
import 'antd/dist/antd.css';
import '../styles/home.css';
import axios from "axios";
import { URL_SERVER } from '../../src/constants';
import _ from "lodash"
const Home = () => {

  const [open, setOpen] = useState(false);
  const [places, setPlaces] = useState([]);
  const [idPlaceSelect, setIdPlaceSelect] = useState([]);


  useLayoutEffect(() => {
    axios
      .get(`${URL_SERVER}/getAllPlaces`)
      .then((res) => {
        setPlaces(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    places.length > 0 ?
      <div className='Home'>
        <div className='ruleta'>
          <button className='btn-ruleta'>
            <img className='img-ruleta' src={Ruleta} alt='ruleta' />
          </button>
        </div>
        <input
          className='form-control fs-5 w-75 mx-auto my-5'
          type='search'
          placeholder='Buscar'
          aria-label='Buscar'
        />
        <div>
          {
            _.map(places, (value, key) => {
              return (
                <div className='container place p-2 my-5' style={{ color: 'white' }} key={key}>
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
                  <h2 style={{ color: 'white' }}>{value.name}</h2>
                  <p>
                    {value.description}
                  </p>
                  <button className='button-modal p-1' onClick={() => {
                    setOpen(true); 
                    setIdPlaceSelect(value.id)
                  }}>Información</button>

                  {open && (
                    <Modal
                      title={<b>Información del lugar</b>}
                      visible={open}
                      style={{ top: 50 }}
                      onCancel={() => setOpen(false)}
                      confirmLoading
                      cancelText='Salir'
                      okText='Escanear código QR'
                      width={920}
                    >
                      <b>
                        <h3 className='text-center'>{value.name}</h3>
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
                      <TabsInformation place={value} idPlaceSelect={idPlaceSelect} />
                    </Modal>
                  )}
                </div>
              )

            })
          }
        </div>
      </div>
      : null
  )
}

export default Home;