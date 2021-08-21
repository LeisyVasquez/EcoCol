import React, { useEffect, useLayoutEffect, useState } from "react";
import { Modal } from "antd";
import ModalContent from "../traveler/ModalContent";
import "antd/dist/antd.css";
import "../../styles/home.css";
import axios from "axios";
import { URL_SERVER_NODE } from "../../config/urlServers";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert2";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [places, setPlaces] = useState([]);
  const [idPlaceSelect, setIdPlaceSelect] = useState([]);

  useLayoutEffect(() => {
    axios
      .get(`${URL_SERVER_NODE}/getAllPlaces`)
      .then((res) => {
        setPlaces(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deletePlace = (idPlace) => {
    swal
      .fire({
        title: "¿Estás seguro de eliminar este lugar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminarlo",
        cancelButtonText: "No, cancelar",
        confirmButtonColor: "#0f6b02",
        cancelButtonColor: "#d33",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log(idPlace);
        }
      });
  };

  return places.length > 0 ? (
    <div className="Home">
      <button className="btn mt-4" style={{ marginLeft: "88%" }}>
        <FontAwesomeIcon
          icon={faPlusSquare}
          size="3x"
          color="white"
          pull="right"
        />
      </button>
      <input
        className="form-control fs-5 w-75 mx-auto"
        type="search"
        placeholder="Buscar"
        aria-label="Buscar"
      />
      <div></div>
      <div>
        {places.map((value, key) => {
          return (
            <div
              className="container place p-2 my-5"
              style={{ color: "white" }}
              key={key}
            >
              <div className="divImgPlace">
                <img
                  className="float-start mx-3 mb-3 mt-5 imgPlace"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82yDrhjKDPkonzkqy6Q9iFZOJMwR99n9qVA&usqp=CAU"
                  alt="imagen lugar"
                  width="200"
                  height="200"
                />
              </div>
              <div className="float-end border border-white p-2 mt-5 mx-3">
                <h5 className="mt-2" style={{ color: "white" }}>
                  ¿Visitaste el lugar?
                </h5>
                <img
                  className="mb-2"
                  src="https://i1.wp.com/farm6.static.flickr.com/5012/5488631459_bac46cb32e_m.jpg?resize=240%2C240"
                  alt="logo"
                  width="125"
                  height="125"
                />
              </div>
              <h2 style={{ color: "white" }}>{value.name}</h2>
              <p>{value.description}</p>
              <button
                className="button-modal-editor p-1"
                onClick={() => {
                  setOpen(true);
                  setIdPlaceSelect(value.id);
                }}
              >
                Editar
              </button>
              <button
                className="button-modal-editor p-1"
                onClick={() => deletePlace(value.id)}
              >
                Eliminar
              </button>
            </div>
          );
        })}
        {open && (
          <Modal
            title={<b>Información del lugar</b>}
            visible={open}
            style={{ top: 50 }}
            onCancel={() => setOpen(false)}
            confirmLoading
            cancelText="Salir"
            okText="Escanear código QR"
            width={920}
          >
            <ModalContent places={places} idPlaceSelect={idPlaceSelect} />
          </Modal>
        )}
      </div>
    </div>
  ) : null;
};

export default Home;
