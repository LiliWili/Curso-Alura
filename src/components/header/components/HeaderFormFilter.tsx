import SelectorGroup from "../../selector/selectorGroup"
import { FaLocationDot } from "react-icons/fa6"
import SelectorOption from "../../selector/selectorOption"


const cidades = [
    { id: 1, nome: "Recife" },
    { id: 2, nome: "Bahia" },
    { id: 3, nome: "Belo Horizonte" },
    { id: 4, nome: "Curitiba" },
    { id: 5, nome: "Porto Alegre" },
];

const HeaderFormFilter = () => {
  return (
    <form>
        <SelectorGroup id="cidade" icon={<FaLocationDot/>}>
        <SelectorOption label="Escolha sua cidade..." value=""/>
        {cidades.map((cidade)=>{return(
            <SelectorOption key={cidade.id} value={cidade.nome} label={cidade.nome}/>
        )})}
        </SelectorGroup>
    </form>
  )
}

export default HeaderFormFilter