import React, { useLayoutEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/listPlacesToCreated.css";
import axios from "axios";
import _ from "lodash";
import {
  faTree,
  faEye,
  faTrashAlt,
  faPen,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { validateEditorRoutes } from "../../config/functionsForValidatedRoutes";
import { URL_SERVER_JAVA } from "../../config/urlServers";
import ModalCreatePlace from "./ModalCreatePlace";
const { Meta } = Card;

const ListPlacesToCreated = () => {
  const [places, setPlaces] = useState([]);
  const [openCreate, setOpenCreate] = useState(false);

  const getAllPlaces = () => {
    axios
      .get(`${URL_SERVER_JAVA}/getPlaces`)
      .then((res) => {
        setPlaces(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useLayoutEffect(() => {
    const validateRoutes = validateEditorRoutes();
    if (validateRoutes === 500) {
      window.location.pathname = "/error-route";
    } else {
      getAllPlaces();
    }
  }, []);
  return (
    <div className="m-3 ListPlacesToCreated">
      <button className="btn mb-1" style={{ marginLeft: "92%" }}>
        <FontAwesomeIcon
          icon={faPlusSquare}
          size="3x"
          color="white"
          onClick={() => setOpenCreate(true)}
        />
      </button>
      <Row className="m-4">
        {_.map(places, (value, key) => (
          <Col span={6}>
            <Card
              className="cardCreatePlace mb-4"
              hoverable
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
                <FontAwesomeIcon icon={faTrashAlt} size="lg" key="delete" />,
                <FontAwesomeIcon
                  icon={faPen}
                  size="lg"
                  key="edit"
                  onClick={() => {
                    console.log("hola");
                  }}
                />,
                <FontAwesomeIcon icon={faEye} size="lg" key="preview" />,
              ]}
            >
              <Meta
                title={
                  <>
                    <FontAwesomeIcon icon={faTree} color="green" /> {value.name}
                  </>
                }
                description={"Precio de entrada: " + value.entryPrice}
              />
            </Card>
          </Col>
        ))}
      </Row>
      {openCreate && (
        <ModalCreatePlace open={openCreate} setOpen={setOpenCreate} />
      )}
    </div>
  );
};

export default ListPlacesToCreated;
