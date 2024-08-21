// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };
  
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };
  
  const Jsx2 = () => {
    const dados = mario;

    const valorCompras = dados.compras.map(compra => Number(compra.preco.replace('R$', ''))).reduce((acumulador,elemento) => acumulador + elemento, 0)

    let colorLetter = valorCompras >= 10000 ? 'red': 'green'


    return (
        <div>
            <p>Nome: {dados.cliente}</p>
            <p>Idade: {dados.idade}</p>
            <p>Situação: <span style={{color: colorLetter}}>{colorLetter = 'red' ? 'Inativo': 'Ativo'}</span> </p>
            <p>Total gasto: R$ {valorCompras}</p>
            {valorCompras >= 10000 && <p>'Você está gastando muito!'</p>}
        </div>
    );
  };
export default Jsx2;