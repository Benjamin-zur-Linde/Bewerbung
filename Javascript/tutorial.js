function farbeÄndern(){
    document.getElementById("demo").style.color = "red";
}

function rechnen(){
    var ersteZahl = document.getElementById("ersteZahl").value;
    var zweiteZahl = document.getElementById("zweiteZahl").value;
    
    parseInt(ersteZahl,10);
    parseInt(zweiteZahl,10);

    var ergebniss = parseInt(ersteZahl,10) +    parseInt(zweiteZahl,10);
    alert(ergebniss)
}


