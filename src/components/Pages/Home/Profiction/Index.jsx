import React from 'react';
import styles from './Profiction.module.css';

import Dados from '../../../Datas/db.json';
// import { Button } from '../../../Button/Index';
import { CardDefault } from '../../../Cards/Index';
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

      </div>
      <div className="container">

      <div className={styles.cardsContainer}>
          {
            Dados.map((card) => (
              <div key={card.id}>
                <CardDefault
                  bgColorCard={card.bgColorCard}
                  icone={card.icone}
                  tituloHeader={card.titulo}
                  paragrafoHeader={card.lema}
                  paragrafoFooter={card.descricao}
                  tituloFooter={card.itemsAdd.itemTitulo}
                  listItems={card.itemsAdd.itemElementos.map(el => el.texto)}
                  // button={card.btn}
                  button={<Button text={card.btn} cor={card.btnColor}/>}/>
              </div>))
          }
        </div>
      </div>

    </section>
  );
}

export default Profiction;
