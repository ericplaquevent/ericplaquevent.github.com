/* Author: ericplaquevent */
$(document).ready(function(){

    var getAgeFromBirthDate = function(birthdate){
        return Math.floor(((new Date() - new Date(birthdate)) / 1000 / (60 * 60 * 24)) / 365.25 );
    };
    
    $("#age").text("("+getAgeFromBirthDate('1988-02-02')+" ans)");
    
});







