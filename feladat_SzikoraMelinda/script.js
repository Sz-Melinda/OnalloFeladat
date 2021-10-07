
$(function(){

    const termekek = [];


    beolvasas(fajlNev, termekek);


    function beolvasas(fajlNev, tomb) {

        $.ajax({

            url:fajlNev,

            success:function(result) {

                result.lista.forEach(element => {

                    termekek.push(element);

                    megjelenit();
                });
            } 
        });
    }

    function megjelenit() {

        let txt = "";

        $("#tablazat").append("<table></table>");

        termekek.forEach(element => {

            $("table").append("<tr><tr>");
            txt += "<td>"+element+"</td>";
            $("tr").append(txt);   
        });
    }

});
