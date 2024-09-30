// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
  // Mostre uma mensagem na tela, caso a resposta da API seja positiva
import React from "react";

  const Home = () => {
    const [dataForm, setDataForm] = React.useState({
        nome: '',
        email: '',
        senha: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
    })

    function handleChange({target}){
        const {id, value} = target

        setDataForm({...dataForm, [id]:value})
    }

   async function handleSubmit(event){
    event.preventDefault()
    try{
       await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            // form é o objeto com os dados do formulário
            body: JSON.stringify(dataForm),
          });

          window.alert('Requisição bem sucedida')
          console.log(dataForm)
    } catch(error) {
        throw new error('erro na requisição')
    }
          
        
    }
  


    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" value={dataForm.nome} onChange={handleChange} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={dataForm.email} onChange={handleChange}/>

            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" value={dataForm.senha} onChange={handleChange}/>

            <label htmlFor="cep">Cep</label>
            <input type="text" id="cep" value={dataForm.cep} onChange={handleChange}/>

            <label htmlFor="Rua">Rua</label>
            <input type="text" id="rua" value={dataForm.rua} onChange={handleChange}/>

            <label htmlFor="numero">Número</label>
            <input type="number" id="numero" value={dataForm.numero} onChange={handleChange}/>

            <label htmlFor="bairro">Bairro</label>
            <input type="text" id="bairro" value={dataForm.bairro} onChange={handleChange}/>

            <label htmlFor="cidade">Cidade</label>
            <input type="text" id="cidade" value={dataForm.cidade} onChange={handleChange}/>

            <label htmlFor="estado">Estado</label>
            <input type="text" id="estado" value={dataForm.estado} onChange={handleChange}/>

            <button type="submit">Enviar</button>
        </form>
    )
  }

  export default Home;