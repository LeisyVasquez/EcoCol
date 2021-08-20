import React, {useEffect, useState} from 'react';
import axios from "axios";
import {
  AppleOutlined,
  AndroidOutlined,
  BugOutlined,
  FireFilled,
  DollarCircleOutlined,
  ClockCircleOutlined,
  FormOutlined,
  EnvironmentOutlined,
  SnippetsOutlined,
  PictureOutlined
} from '@ant-design/icons'
import { Tabs } from 'antd'

const TabsInformation = () => {
  const TabPane = Tabs.TabPane;

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getAllPlaces")
      .then((res) => {
        setPlaces(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
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
          {places.map(place =>{
            return (
              <p>{place.fauna}</p>
            )
          })}
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
        {places.map(place =>{
            return (
              <p>{place.flora}</p>
            )
          })}
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
        {places.map(place =>{
            return (
              <p>{place.address}</p>
            )
          })}
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
        {places.map(place =>{
            return (
              <p>{place.description}</p>
            )
          })}
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
        {places.map(place =>{
            return (
              <p>{place.recommendations}</p>
            )
          })}
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
        {places.map(place =>{
            return (
              <p>{place.hours}</p>
            )
          })}
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
        {places.map(place =>{
            return (
              <p>{place.entryPrice}</p>
            )
          })}
        </div>
      </TabPane>
    </Tabs>
  )
}

export default TabsInformation;