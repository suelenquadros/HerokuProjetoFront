const container = document.querySelector('#items-cardapio')
fetch('https://projetoongs.herokuapp.com/')
  .then((response) =>{
    return response.json();
  })
  .then((comidas) =>{
    comidas.forEach(prato => {
      const mediaItem = document.createElement('div');
      mediaItem.setAttribute('class', 'media mb-4');
      mediaItem.innerHTML = `
      <img src="${prato.imagem}" alt="${prato.nome}" class="mr-3 img-thumbnail" width="200px">
      <div class="media-body>
          <h5 class="mt-0"><strong>${prato.nome}</strong></h5>
          ${prato.descricao}
        </div>`
        container.appendChild(mediaItem);
    })
})

function CadastrarUsuario() {    

    const nome = document.getElementById("Nome").value;
    const telefone = document.getElementById("Telefone").value;
    const endereco = document.getElementById("Endereco").value;
    const ramo = document.getElementById("Ramo").value;
    const descricao = document.getElementById("Descricao").value;  
    const foto = ""; 

    fetch('http://localhost:3000/ongs', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            'nome': nome,
            'telefone': telefone,
            'endereco': endereco,
            'ramo': ramo,
            'descricao': descricao, 
            'foto':foto           
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("message").textContent = "Sucesso!! :)"
    })
    .catch((erro) => {
        console.log(erro)
    })
}
function ListarOngs()
{}
