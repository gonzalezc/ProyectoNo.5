var boton = document.getElementById('buscar');
var inp_city = document.getElementById('pais');
var nameCity = document.getElementById("cityName")
boton.addEventListener("click", clima);

function clima(weath){

        nameCity.innerHTML = inp_city.value;
        
        weath.preventDefault();
        var link = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + inp_city.value + "&lang=se&appid=" + "c4bb850f992e9b2c9403cd8d4058f9d1";
        var days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
        var clouds = [] ;
        var humidity = [];
        var pressure = [] ;
        var speed = [];
        var menu = [];

        $.ajax({
        method: "GET",
        url: link,
        success: function(msg, xhr){
                var latitud = (msg.city.coord.lat);
                var longitud = (msg.city.coord.lon);
                var free = 0 ;
                for (var x =0 ; x <= days.length-1 ; x++) {
        
                var free = (msg.list[x].clouds);
                clouds.push(free);
                var free = (msg.list[x].humidity);
                humidity.push(free);
                var free = (msg.list[x].pressure);
                pressure.push(free);
                var free = (msg.list[x].speed);
                speed.push(free);
                var free = (msg.list[x].weather[0].main);
                menu.push(free);
                };
                        for (var y =0 ; y <= days.length-1 ; y++) {

                                var daily = $(".bigbox ." +  days[y]);
                                var all ="<h1 class='dia'>" + days[y] + "</h1>" + 
                                                "<img src='" + menu[y] + ".png' class='imgMain'>" +
                                                "<p> Nubes:" + clouds[y] + "</p>" +
                                                "<p> Humedad:" + humidity[y] + "</p>" + 
                                                "<p> Presion:" + pressure[y] + "</p>" + 
                                                "<p> Velocidad:" + speed[y] + "</p>" + 
                                                "<p> Estado:" + menu[y] + "</p>"+
                                                "<h1>Coordenadas:</h1>" +
                                                "<p> latitud:" + latitud + "</p>" + 
                                                "<p> longitud:" + longitud + "</p>";
                                var cajota = document.getElementById("bigbox");
                                cajota.innerHTML = all;    
                        };
                        var f = new Date();
                        var f = f.getDay()
                        for (var z = 0 ; z <= days.length-1; z++) {
                                var daily = $(".container ." + days[z]);
                                //if (f==(z+1)) {
                                var all ="<form>"+
                                                "<h1 class='dia'>" + days[z] + "</h1>" + 
                                                "<img src='" + menu[z] + ".png' class='img'>" +
                                                "<p> Nubes:" + clouds[z] + "</p>" +
                                                "<p> Humedad:" + humidity[z] + "</p>" + 
                                                "<p> Presion:" + pressure[z] + "</p>" + 
                                                "<p> Velocidad:" + speed[z] + "</p>" + 
                                                "<p> Estado:" + menu[z] + "</p>"+
                                                "</form>";
                                var caja = document.getElementById(days[z]);
                                caja.innerHTML = all;
                                //};
                        };

}
});

}

