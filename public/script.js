console.log ("deu merda!")
function CadastrarUsuario() {

    const nome = document.getElementById("Nome").value;
    const telefone = document.getElementById("Telefone").value;
    const endereco = document.getElementById("Endereco").value;
    const ramo = document.getElementById("Ramo").value;
    const descricao = document.getElementById("Descricao").value;
    const email = document.getElementById("Email").value;
    const foto = "";

    fetch('https://projetoongs.herokuapp.com/ongs', {
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
            'email':email,
            'foto':foto
        })
    })
    .then((response) =>
    {
      if(response.ok)
      {
        EsconderTudo()
        $('#ConcluirCadastro').show();
      }
      else
      {
        window.confirm("Falha:")
      }

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
{
  const container = document.querySelector("#listBody");

  fetch('https://projetoongs.herokuapp.com/ongs')
  .then((response) =>{
    return response.json();
  })
  .then((ongs) =>{
    ongs.forEach(ongs => {
      const mediaItem = document.createElement('div');
      mediaItem.setAttribute('class', 'col-md-4 grid_listing');
      mediaItem.innerHTML = `
      <div class="product-listing-m gray-bg">
      <div class="product-listing-content">
      <h5><a href="#">${ongs.nome}</a></h5>
      <div class="car-location">
      Ramo: ${ongs.ramo}
      </span>
      </div>
      <ul class="features_list">
      <li style="width:100%!important"><i class="fa fa-phone" aria-hidden="true" ></i>${ongs.telefone}</li>
      <li style="width:100%!important"><i class="fa fa-envelope" aria-hidden="true" ></i>${ongs.email}</li>
      <li style="width:100%!important"><i class="fa fa-map-pin" aria-hidden="true" ></i>${ongs.endereco}</li>
      </ul>
      </div>
      </div>`


        container.appendChild(mediaItem);


    })
  })
}.catch((erro)=>{
    console.log(erro)
  });
