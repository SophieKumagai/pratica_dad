import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Titulo from './components/Titulo/Titulo.jsx'
import './index.css'
import Item from "./components/Item/Item.jsx"
import carne from "./assets/carne.svg"
import carne2 from "./assets/carne2.png"
import carne3 from "./assets/carne3.png"
import venda from "./assets/venda_vermelha.svg"
import venda_verde from "./assets/venda_verde.svg"
import Itens from "./components/Itens/Itens.jsx"

let lista = [<Item titulo_item="Item 1" imagem={carne} descricao="1Kg/Preco" preco="R$ 000.000" cor="vermelho" venda={venda}/>,<Item titulo_item="Item 2" imagem={carne2} descricao="1Kg/Preco" preco="R$ 000.000" cor="vermelho" venda={venda}/> ]
let lista2 = [<Item titulo_item="Item 3" imagem={carne} descricao="1Kg/Preco" preco="R$ 000.000" cor="verde" venda={venda}/>, <Item titulo_item="Item 2" imagem={carne2} descricao="1Kg/Preco" preco="R$ 000.000" cor="verde" venda={venda}/>, <Item titulo_item="Item 3" imagem={carne3} descricao="1Kg/Preco" preco="R$ 000.000" cor="verde" venda={venda}/>]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Titulo nome="promo" cor="vermelho"/>
    <Itens lista_produtos={lista}/>
    
  </StrictMode>,
)
