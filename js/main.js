$(document).ready(function(){

  if(window.location.href.indexOf('index') > -1){

      $('.galeria').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1500,
        pager: false
      });
  }

  if(window.location.href.indexOf('index') > -1){
      var perritos = [
        {
          nombre: "Canelo",
          edad: "3 años",
          tamano: "grande",
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam bibendum nunc vitae mollis. Phasellus ullamcorper nisl risus, nec pharetra dui consectetur et. Sed auctor venenatis accumsan. Maecenas sapien dui, sagittis sit amet turpis tincidunt, faucibus maximus eros. Nunc convallis accumsan orci ac scelerisque. Sed sed felis tempus, pulvinar tellus vel, imperdiet odio. Nunc aliquet a lacus a vulputate. Duis ultrices lectus et ultrices feugiat. Cras elementum sollicitudin dolor, et vehicula tortor. Pellentesque venenatis lectus eros, vitae varius nisl interdum et."
        },
        {
          nombre: "Peluche",
          edad: "2 años",
          tamano: "pequeño",
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam bibendum nunc vitae mollis. Phasellus ullamcorper nisl risus, nec pharetra dui consectetur et. Sed auctor venenatis accumsan. Maecenas sapien dui, sagittis sit amet turpis tincidunt, faucibus maximus eros. Nunc convallis accumsan orci ac scelerisque. Sed sed felis tempus, pulvinar tellus vel, imperdiet odio. Nunc aliquet a lacus a vulputate. Duis ultrices lectus et ultrices feugiat. Cras elementum sollicitudin dolor, et vehicula tortor. Pellentesque venenatis lectus eros, vitae varius nisl interdum et."
        },
        {
          nombre: "Reina",
          edad: "1 años",
          tamano: "mediano",
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam bibendum nunc vitae mollis. Phasellus ullamcorper nisl risus, nec pharetra dui consectetur et. Sed auctor venenatis accumsan. Maecenas sapien dui, sagittis sit amet turpis tincidunt, faucibus maximus eros. Nunc convallis accumsan orci ac scelerisque. Sed sed felis tempus, pulvinar tellus vel, imperdiet odio. Nunc aliquet a lacus a vulputate. Duis ultrices lectus et ultrices feugiat. Cras elementum sollicitudin dolor, et vehicula tortor. Pellentesque venenatis lectus eros, vitae varius nisl interdum et."
        },
        {

          nombre: "Felipe",
          edad: "5 años",
          tamano: "grande",
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam bibendum nunc vitae mollis. Phasellus ullamcorper nisl risus, nec pharetra dui consectetur et. Sed auctor venenatis accumsan. Maecenas sapien dui, sagittis sit amet turpis tincidunt, faucibus maximus eros. Nunc convallis accumsan orci ac scelerisque. Sed sed felis tempus, pulvinar tellus vel, imperdiet odio. Nunc aliquet a lacus a vulputate. Duis ultrices lectus et ultrices feugiat. Cras elementum sollicitudin dolor, et vehicula tortor. Pellentesque venenatis lectus eros, vitae varius nisl interdum et."

        },
      ];
      perritos.forEach((item, index) => {
        var perro =`
          <article class="perro">
            <h2>${item.nombre}</h2>
            <span class="edad">Edad: ${item.edad}</span></br>
            <span class="tamaño">Tamaño: ${item.tamano}</span>
            <p>
              ${item.descripcion}
            </p>
             <a href="#" class="adoptar">Adoptame</a>
             <hr>
          </article>
        `;

        $("#ContenedorDeAdopcion").append(perro);
      });
}

  var theme = $("#theme");

  $("#to-green").click(function(){
    theme.attr("href" , "css/verde.css")
  });

  $("#to-normal").click(function(){
    theme.attr("href" , "css/normal.css")
  });

  $("#to-blue").click(function(){
    theme.attr("href" , "css/azul.css")
  });

  $("#login form").submit(function(){
    var form_name = $("#form_name").val();

    localStorage.setItem("form_name", form_name);
  });

  if(window.location.href.indexOf('aporta') > -1){

    $("#acordeon").accordion().stylebackground = "red";
  }

  if(window.location.href.indexOf('reloj') > -1){

    setInterval(function(){
      var reloj = moment().format('h:mm:ss a');
      document.get
      $(".reloj").html(reloj);
    }, 1000);
  }
});
