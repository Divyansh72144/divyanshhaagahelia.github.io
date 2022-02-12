function checkAge(){
    var age;
    age=Number(document.getElementById("age").value);
    min_age=Number(18);
    if (age>=18){
        document.getElementById("answer").innerHTML="Old enough to play.";}
    else{
        document.getElementById("answer").innerHTML="Adolescents are not allowed to play."
    }
            
        
    



}