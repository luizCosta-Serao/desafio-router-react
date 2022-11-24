import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import styles from "./Produtos.module.css"

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null)

  React.useEffect(() => {
    const pushProducts = async function() {
      const response = await fetch("https://ranekapi.origamid.dev/json/api/produto")
      const json = await response.json()
      setProdutos(json)
    }
    pushProducts()
  },[])

  console.log(produtos)
  if(produtos === null) return null
  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head
        title={`Ranek |`} 
        description={`Ranek | descrição do site`}
      />
      {produtos.map((produto) =>
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}/>
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      )}
    </section>
  )
}

export default Produtos