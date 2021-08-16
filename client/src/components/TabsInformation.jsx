import React from 'react'
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
import { Modal, Button, Tabs, Card } from 'antd'

const TabsInformation = () => {
  const TabPane = Tabs.TabPane

  return (
    <Tabs className='mt-3'>
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
          Para fauna se tienen reportadas 352 especies de fauna vertebrada con
          presencia confirmada para la zona. De la cuales 20 especies son
          endémicas para el país, siendo un área importante para la preservación
          de cuatro especies de anuros con distribuciones muy restringidas.
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
          El proceso de declaratoria duró cerca de 20 años, tiempo en el cual se
          logró identificar el 10% de Biodiversidad del país, 49 especies de
          mamíferos, 162 de aves y 130 de mariposas. Con la declaratoria se
          evita que la zona se realicen labores de minería y explotación
          forestal. Con el Alto de San Miguel ya son 11 las áreas protegidas por
          Corantioquia en su jurisdicción, distribuidas en 7 DMI, 3 reservas
          forestas y 1 Parque Natural Regional.
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
          Para ir al Alto San Miguel, lo mas fácil, sino tienes vehículo, es
          tomar el Metro hasta la estación Estrella, allí tomar un bus que te
          lleva a la vereda la Clara en Caldas, o los Lagos y de ahí iniciar el
          recorrido a pie. debes llevar bloqueador solar, agua y alimentos, ropa
          cómoda para caminar y zapatos de buen agarre que se puedan mojar,
          porque en algunos lugares hay que caminar por el cauce del rió.
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
          Lo ha visto y sentido todo, desde los pueblos indígenas aburraes y la
          fundación de la Villa de la Candelaria, hasta los pasos de las más de
          3.7 millones de personas que hoy habitan el Valle de Aburrá.
          <br></br> Si se buscara un testigo de todo lo que ha pasado por este
          valle, ese sin duda sería el río. A él, incluso, el Valle de Aburrá
          debe su nombre.Y no solo su nombre, también es su columna vertebral.
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
          El Alto de San Miguel, se encuentra ubicado al Sur del Valle de
          Aburrá, a 30 km de la ciudad de Medellín, en el municipio de Caldas,
          entre las veredas La Clara, La Salada parte baja y El Sesenta, en las
          coordenadas geográficas (latitud 6027512 longitud 7559600.). Este
          ecosistema está ubicado entre los 1850m.
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
          Es un lugar abierto, se puede ir en cualquier hora del día
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
          No tiene ningún precio de entrada
        </div>
      </TabPane>
    </Tabs>
  )
}

export default TabsInformation
