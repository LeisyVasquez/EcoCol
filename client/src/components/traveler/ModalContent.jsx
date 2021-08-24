import React, { useEffect, useState } from 'react';
import {
  BugOutlined,
  DollarCircleOutlined,
  ClockCircleOutlined,
  FormOutlined,
  EnvironmentOutlined,
  SnippetsOutlined,
  PictureOutlined
} from '@ant-design/icons'
import { Tabs } from 'antd'


const ModalContent = ({ places, idPlaceSelect }) => {
  const TabPane = Tabs.TabPane;
  const [place, setPlace] = useState([]);

  useEffect(() => {
    for (let i = 0; i < places.length; i++) {
      if (places[i].id === idPlaceSelect) {
        setPlace(places[i]);
        return;
      }
    }
  }, []);

  return (
    <>
      <b>
        <h3 className='text-center'>{place.name}</h3>
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
      <Tabs className='mt-4'>
        <TabPane
          tab={
            <span>
              <BugOutlined />
              Fauna
            </span>
          }
          key='1'
        >
          <div className='card card-body fs-6'>
            <p>{place.fauna}</p>
          </div>
        </TabPane>

        <TabPane
          tab={
            <span>
              <PictureOutlined />
              Flora
            </span>
          }
          key='2'
        >
          <div className='card card-body fs-6'>
            <p>{place.flora}</p>
          </div>
        </TabPane>

        <TabPane
          tab={
            <span>
              <EnvironmentOutlined />
              Ubicación
            </span>
          }
          key='3'
        >
          <div className='card card-body fs-6'>
            <p>{place.address}</p>
          </div>
        </TabPane>

        <TabPane
          tab={
            <span>
              <SnippetsOutlined />
              Descripción
            </span>
          }
          key='4'
        >
          <div className='card card-body fs-6'>
            <p>{place.description}</p>
          </div>
        </TabPane>

        <TabPane
          tab={
            <span>
              <FormOutlined />
              Recomendaciones
            </span>
          }
          key='5'
        >
          <div className='card card-body fs-6'>
            <p>{place.recommendations}</p>
          </div>
        </TabPane>

        <TabPane
          tab={
            <span>
              <ClockCircleOutlined />
              Horarios
            </span>
          }
          key='6'
        >
          <div className='card card-body fs-6'>
            <p>{place.hours}</p>
          </div>
        </TabPane>

        <TabPane
          tab={
            <span>
              <DollarCircleOutlined />
              Precios de entrada
            </span>
          }
          key='7'
        >
          <div className='card card-body fs-6'>
            <p>{place.entryPrice}</p>
          </div>
        </TabPane>
      </Tabs>
    </>
  )
}

export default ModalContent;