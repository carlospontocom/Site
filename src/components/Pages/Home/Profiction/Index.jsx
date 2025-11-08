import React from 'react';
import styles from './Profiction.module.css';
import { FaCode } from "react-icons/fa6";

import Dados from '../../../Datas/db.json';
import { Button } from '../../../Button/Index';


function Profiction() {
  return (
    <section className={styles.bgSection}>

      <div className={styles.profictionContainer}>
        <h1>
          Áreas de especializações
        </h1>
        <h3>
          Principais jornadas de aprendizado na áreas do desenvolvimento para Web.
        </h3>


        {/* iniciar aqui */}

        {/* fim aqui  */}


        <div className={styles.cardsContainer}>

          {
            Dados.map((card) => (
              <div key={card.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <i className={card.icone}></i>
                  <h5>
                    {card.titulo}
                  </h5>
                  <p>
                    {card.lema}
                  </p>

                </div>
                <div className={styles.cardFooter}>
                  <p>
                    {card.descricao}
                  </p>

                <h6>{card.itemsAdd.itemTitulo}</h6>

                <ul>
                  {card.itemsAdd.itemElementos.map((item)=>(
                  <li key={item.id} className={styles.iconItem}>
                    {item.texto}
                  </li>
                  ))}
                </ul>
                <Button text={card.btn} cor={card.btnColor}/>
                </div>
              </div>
            ))
          }

        </div>

      </div>
    </section>
  );
}

export default Profiction;
