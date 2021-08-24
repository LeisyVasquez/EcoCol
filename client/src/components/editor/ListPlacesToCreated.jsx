import React from "react";
import { Card, Avatar, Col, Row } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

const ListPlacesToCreated = () => {
  return (
    <div className="m-5">
      <Row>
        <Col span={6}>
          {" "}
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://cr00.epimg.net/radio/imagenes/2020/10/10/medellin/1602343897_042708_1602344084_noticia_normal.jpg"
                width="200"
                height="200"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta title="Cerro Pan de Azucar" description="Medellín" />
          </Card>
        </Col>
        <Col span={6}>
          {" "}
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://www.eltiempo.com/files/image_640_428/uploads/2020/06/28/5ef8ca9544f3a.jpeg"
                width="200"
                height="200"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta title="Parqué Arví" description="Medellín" />
          </Card>
        </Col>
        <Col span={6}>
          {" "}
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://trekkingsancristobal.com/wp-content/uploads/2019/07/IMG_8621-1.jpg"
                width="200"
                height="200"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta title="Chorro de las campanas" description="Envigado" />
          </Card>
        </Col>
        <Col span={6}>
          {" "}
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://trekkingsancristobal.com/wp-content/uploads/2019/12/123047954_5017930758231974_2731246614862967130_o.jpg"
                width="200"
                height="200"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              title="Reserva natural Alto de San Miguel"
              description="Caldas"
            />
          </Card>
        </Col>
        
      </Row>
    </div>
  );
};

export default ListPlacesToCreated;
