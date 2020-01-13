$(document).ready(function() {

    $.ajax({
        url: `/api/bands/${window.location.pathname.split("/")[2]}/`,
        type: "GET",
        success: function(data) {
            console.log(data);
            data.forEach(function(band){
            $("#bands").append(
                `
                <option>${band.name}</option>
                `
            )
            });
        },
        error: function(err) {
            console.log("PROBLEM");
            console.log(err);
        }
    });

});