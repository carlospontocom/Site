import styles from './Cards.module.css';

export const CardDefault = (

    {
        icone,
        tituloHeader,
        paragrafoHeader,
        paragrafoFooter,
        tituloFooter,
        listItems = [],
        button, bgColorCard }) => {

    const corClass = styles[bgColorCard];

    return (
        <div className={styles.card}>
            <div className={styles.areaRealce}>
                <div className={`${styles.areaRealce} ${corClass}`}>
                    <span>{<i className={icone}></i>}</span>
                    <h3>{tituloHeader}</h3>
                    <p>{paragrafoHeader}</p>
                </div>
            </div>

            <div className={styles.footerCard}>
                <p>{paragrafoFooter}</p>
                <h4>{tituloFooter}</h4>
                <ul className={styles.list}>
                    {listItems.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>))}
                </ul>
                <button className={styles.btn}>{button}</button>
            </div>

        </div>
    )
}