import styles from "../Itens/Itens.module.css"
function Itens({lista_produtos}) {
    return (
        <div className={styles.container}>
            <ul className={styles.produtos_list}>
                {lista_produtos.map((item) => ( 
                    item
                ))}
            </ul>
        </div>
    )
}

export default Itens