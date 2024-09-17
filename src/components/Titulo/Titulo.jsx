import styles from './Titulo.module.css'

function Titulo({nome, cor}) {
  if (cor == "vermelho") {
    return (
        <div className={`${styles.titulo} ${styles.vermelho}`}>
          <p>{nome}</p>
        </div>
      )
  } else {
    return (
      <div className={`${styles.titulo} ${styles.verde}`}>
        <p>{nome}</p>
      </div>
    )
  }
}

export default Titulo
