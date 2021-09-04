//pegar a data atual
function today(){
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  var dataAtual =  dia + "/" + mes + "/" + ano;
  //dataatual - alterar demo para o pdf depois
  document.getElementById('demo').innerHTML = dataAtual;

  window.alert(dataAtual)

}

//outra data
function otherday(){
  var outraData = document.getElementById('outraData');
  var novaData = document.getElementById('novaData');
  
  novaData.style.display = outraData.checked ? "block" : "none";
}

function fiador (){
  document.getElementById("garantiaOpcoes").options[2].selected === true;
  document.querySelector('.showFiador').style.display = 'block';
}

//pdf
function generatePdf() {
  var dd = {
    content: [
      'Nothing yet',
    ]
  }

  pdfMake.createPdf(dd).open();
}
generatePdf();
