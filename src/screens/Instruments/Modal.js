import React from "react";
import "./Modal.css";
import check from "../../assets/check.png";

export default function Modal({ claseModal }) {
  return (
    <div className="bacground">
      <div className="Container">
        <div className="box">
          Считайте клики по ссылкам из постов
          <h1 className="plus" onClick={() => claseModal(false)}>
            {" "}
            X
          </h1>
        </div>
        <div className="title">
          Включите сокращение ссылок и Амплифер покажет, какие <br /> ссылки
          получают больше кликов, чтобы вы могли <br /> скорректировать
          контент-план и быть в курсе интересов <br /> аудитории. У Амплифера
          свой алгоритм подсчёта переходов,
          <br /> поэтому данные могут незначительно отличаться от сведений в
          соцсетях и системах аналитики.
        </div>

        <div className="container-one">
          <h1>
            <img src={check} alt="check" /> Показывает, какие посты получают
            больше всего кликов
          </h1>
          <h1>
            <img src={check} alt="check" /> Делает ссылки компактными и
            аккуратными
          </h1>
        </div>
        <div>
          <h1> <img src="" alt="" /> Кому не подойдёт</h1>
        </div>
      </div>
    </div>
  );
}
