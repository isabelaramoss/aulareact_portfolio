import styled from 'styled-components'

//Propriedades obrigatórias
type BotaoProps = {
  principal: boolean
  //? opcional
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
//Criando componentes através de componentes:
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;
  span {
    text-decoration: line-through;
  }
`

//as="" -> onde colocamos tags html
function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Enviar
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
