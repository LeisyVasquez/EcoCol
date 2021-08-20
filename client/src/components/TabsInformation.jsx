import React, { useEffect, useState } from 'react';
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
import axios from "axios";


const TabsInformation = (props) => {
  const TabPane = Tabs.TabPane;

  const place = props; 

  useEffect(() => {
     console.log(props)
   }, []);

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
  )
}

export default TabsInformation;