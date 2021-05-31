import React, { useState, useEffect } from "react";

import { FacebookShareButton } from "react-share";
import { Modal } from "react-bootstrap";

import "./FinalizeModal.css";
import { message } from "antd";

export default function PopUp({ show, onFinalize }) {
  const [rate, setRate] = useState();
  const [path, setPath] = useState(() => {
    return {
      star1path: "/images/star_gray.png",
      star2path: "/images/star_gray.png",
      star3path: "/images/star_gray.png",
      star4path: "/images/star_gray.png",
      star5path: "/images/star_gray.png",
    };
  });

  //MUDA A IMAGEM DA ESTRELA DE ACORDO COM O RATE
  useEffect(() => {
    if (rate === 0) {
      setPath({
        star1path: "/images/star_gray.png",
        star2path: "/images/star_gray.png",
        star3path: "/images/star_gray.png",
        star4path: "/images/star_gray.png",
        star5path: "/images/star_gray.png",
      });
    } else if (rate === 1) {
      setPath({
        star1path: "/images/star_full.png",
        star2path: "/images/star_gray.png",
        star3path: "/images/star_gray.png",
        star4path: "/images/star_gray.png",
        star5path: "/images/star_gray.png",
      });
    } else if (rate === 2) {
      setPath({
        star1path: "/images/star_full.png",
        star2path: "/images/star_full.png",
        star3path: "/images/star_gray.png",
        star4path: "/images/star_gray.png",
        star5path: "/images/star_gray.png",
      });
    } else if (rate === 3) {
      setPath({
        star1path: "/images/star_full.png",
        star2path: "/images/star_full.png",
        star3path: "/images/star_full.png",
        star4path: "/images/star_gray.png",
        star5path: "/images/star_gray.png",
      });
    } else if (rate === 4) {
      setPath({
        star1path: "/images/star_full.png",
        star2path: "/images/star_full.png",
        star3path: "/images/star_full.png",
        star4path: "/images/star_full.png",
        star5path: "/images/star_gray.png",
      });
    } else if (rate === 5) {
      setPath({
        star1path: "/images/star_full.png",
        star2path: "/images/star_full.png",
        star3path: "/images/star_full.png",
        star4path: "/images/star_full.png",
        star5path: "/images/star_full.png",
      });
    }
  }, [rate]);

  const handleFinalize = () => {
    if (rate !== undefined) {
      message.loading("Finalizando treino", 1).then(() => {
        onFinalize(rate);
      });
    } else {
      message.error("Selecione alguma nota para o treino", 2);
    }
  };

  return (
    <Modal show={show} centered={true}>
      <Modal.Body>
        <div className="congratulations">
          <h1>PARABÉNS</h1>
          <h3>TREINO FINALIZADO!</h3>
        </div>
        <div className="avaliation">
          <div className="avaliationTitle">AVALIE SEU TREINO</div>
          <div className="stars">
            <button className="img" onClick={() => setRate(1)}>
              <img src={path.star1path} alt="star1" />
            </button>
            <button className="img" onClick={() => setRate(2)}>
              <img src={path.star2path} alt="star2" />
            </button>
            <button className="img" onClick={() => setRate(3)}>
              <img src={path.star3path} alt="star3" />
            </button>
            <button className="img" onClick={() => setRate(4)}>
              <img src={path.star4path} alt="star4" />
            </button>
            <button className="img" onClick={() => setRate(5)}>
              <img src={path.star5path} alt="star5" />
            </button>
          </div>
        </div>
        <div className="buttons">
          <button className="sendbutton" onClick={handleFinalize}>
            FINALIZAR
          </button>
          <button className="fbimg">
            <FacebookShareButton
              url={"http://github.com"} /* Adicione aqui o URL necessário */
              quote={
                "Adicione Aqui o Título"
              } /* Adicione ali o titulo da aplicacao */
            >
              <img src={"./images/fbimg.png"} alt="fbimg" />
            </FacebookShareButton>
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
