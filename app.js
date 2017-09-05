function initMap() {

    svg = "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z";


    var gerarIcon = function (svg, cor, opacidade, px) {
        var icon = {

            path: svg,
            fillColor: cor,
            fillOpacity: opacidade,
            anchor: new google.maps.Point(0, 0),
            strokeWeight: 0,
            scale: px
        }

        return icon;

    }



    var lat = 15.956;
    var lng = 48.000;

    centralizacaoDefalt = { lat: -15.956, lng: 49.472 }
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: centralizacaoDefalt
    });

    function addMarker(id, lat, lng) {
        var uluru = { lat, lng };

        var marker = new google.maps.Marker({
            position: uluru,
            map: map,
            center: uluru,
            icon: gerarIcon(svg, '#FF0000' ,1, 1.3)
        });

        map.setCenter(uluru);
    }

    addMarker(1, lat, lng);

}