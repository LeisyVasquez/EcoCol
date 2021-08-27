import React from "react";
import { Card, Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/listPlacesToCreated.css";
import {
  faTree,
  faEye,
  faTrashAlt,
  faPen,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

const ListPlacesToCreated = () => {
  return (
    <div className="m-3 ListPlacesToCreated">
      <button className="btn mb-1" style={{ marginLeft: "92%" }}>
        <FontAwesomeIcon icon={faPlusSquare} size="3x" color="white" />
      </button>
      <Row className="m-4">
        <Col span={6}>
          <Card
            className="cardCreatePlace "
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
              <FontAwesomeIcon icon={faTrashAlt} size="lg" key="delete" />,
              <FontAwesomeIcon icon={faPen} size="lg" key="edit" />,
              <FontAwesomeIcon icon={faEye} size="lg" key="preview" />,
            ]}
          >
            <Meta
              title={
                <>
                  <FontAwesomeIcon icon={faTree} color="green" /> Cerro Pan de
                  Azucar
                </>
              }
              description="Medellín"
            />
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
            <Meta
              title={
                <>
                  <FontAwesomeIcon icon={faTree} color="green" /> Parque Arví
                </>
              }
              description="Medellín"
            />
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
            <Meta
              title={
                <>
                  <FontAwesomeIcon icon={faTree} color="green" /> Chorro de las
                  campanas
                </>
              }
              description="Envigado"
            />
          </Card>
        </Col>
        <Col span={6}>
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
              title={
                <>
                  <FontAwesomeIcon icon={faTree} color="green" /> Reserva
                  natural Alto de San Miguel
                </>
              }
              description="Caldas"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ListPlacesToCreated;
