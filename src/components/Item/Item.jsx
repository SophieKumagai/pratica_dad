import styles from './Item.module.css'

function Item({titulo_item, cor, imagem, descricao, preco, venda}) {
  if (cor == "vermelho") {
        return (
        <div className={styles.item}>
            <div className={styles.container}>
                <img src={imagem} className={styles.produto} alt="item"/>
                <div className={styles.informacoes}>
                    <p className={styles.titulo_item}>{titulo_item}</p>
                    <p className={styles.descricao}>{descricao}</p>
                    <p className={`${styles.preco} ${styles.vermelho}`}>{preco} <img src={venda} className={styles.venda} alt="venda"/></p>
                </div>
            </div>
        </div>
        )
    } else {
        return (
            <div className={styles.item}>
                <div className={styles.container}>
                    <img src={imagem} alt="item"/>
                    <div className={styles.informacoes}>
                        <p className={styles.titulo_item}>{titulo_item}</p>
                        <p className={styles.descricao}>{descricao}</p>
                        <p className={`${styles.preco} ${styles.verde}`}>{preco}</p>
                    </div>
                </div>
            </div>
            )
    }
}

export default Item
