import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="leftside">
        <ul className="first_title">
          <li>
            <Link to="/house">HOUSE</Link>
          </li>
          <li>
            <Link to="/flat">FLAT</Link>
          </li>
          <li>
            <Link to="/house">HOUSE</Link>
          </li>
          <li>
            <Link to="/house">HOUSE</Link>
          </li>
        </ul>
        <ul className="second_title">
          <li>
            <Link to="/house">HOUSE</Link>
          </li>
          <li>
            <Link to="/house">HOUSE</Link>
          </li>
          <li>
            <Link to="/house">HOUSE</Link>
          </li>
          <li>
            <Link to="/house">HOUSE</Link>
          </li>
        </ul>
      </div>

      <div className="centralpart">
        <h1>WELCOME!</h1>
        <p>
          Scrum — это методика гибкого управления проектами, помогающая командам
          структурировать работу и управлять ею на основе набора ценностей,
          принципов и практик. Как спортивная команда готовится к решающей игре
          (к слову, scrum — англ. «схватка», элемент игры в регби), так и
          команда сотрудников компании должна извлекать уроки из полученного
          опыта, осваивать принципы самоорганизации, работая над решением
          проблемы, и анализировать свои успехи и провалы, чтобы постоянно
          совершенствоваться. Scrum содействует этому. Методику Scrum чаще всего
          применяют команды разработчиков приложений, но принципы и опыт ее
          использования можно применить к командной работе любого рода. Это одна
          из причин такой популярности методики. Scrum часто представляют как
          платформу для управления проектами по методике Agile. Участники
          команды Scrum проводят собрания, используют специальные инструменты и
          принимают на себя особые роли, чтобы организовать работу и управлять
          ею.
        </p>
      </div>
      <div className="rigthside">3</div>
    </div>
  );
}
export { Home };
