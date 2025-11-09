export const CardPecas = ({ icone, title, text }) => {
    return (
        <div className={StyleSheet.cardEad}>
            <span>
                {icone}
            </span>
            <h4>
                {title}
            </h4>
            <p>{text}</p>
        </div>
    )
}