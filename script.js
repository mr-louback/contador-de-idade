function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO]Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);

    var género = "";
    var img = document.createElement("img");
    img.setAttribute("id", "img");
    if (fsex[0].checked) {
      género = "homem";
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "crianca1.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "jovem.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "adulto.jpg");
      } else {
        //idoso
        img.setAttribute("src", "idoso.jpg");
      }
    } else if (fsex[1].checked) {
      género = "mulher";
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "crianca.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "jovem1.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "adulto1.jpg");
      } else {
        //idoso
        img.setAttribute("src", "idoso1.jpg");
      }
    }
    res.innerHTML = `Detectamos ${género} com ${idade} anos`;
    res.style.textaling = "center";
    res.appendChild(img);
  }
}
