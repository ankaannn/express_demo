function get_name_from_inputbox(){
    //take the value from the input tag
    let input_exercise = document.getElementById("inputfield").value
    let input_description = document.getElementById("inputfield2").value
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", `http://localhost:3000/addexercise?exe=${input_exercise}&des=${input_description}`, true );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
