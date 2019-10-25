function inviaCredenziali(){
    var nome=document.getElementById("txt_nome").value;
    var cognome=document.getElementById("txt_cognome").value;
    var matricola=document.getElementById("txt_matricola").value;
    var regione=document.getElementById("cbo_regione").value;
    var email=document.getElementById("txt_email").value;
    var telefono=document.getElementById("txt_telefono").value;
    if(nome=="")window.alert("Inserire un nome!");
    if(cognome=="")window.alert("Inserire un cognome!");
    if(isNaN(matricola))window.alert("Inserire una matricola composta di numeri!");
    if(regione=="")window.alert("Selezionare una regione!");
    if(email==""&&telefono=="")window.alert("Inserire il Numero o L' email");


}