function tellInfractionFine(){
    var drivingSpeed;
    drivingSpeed=Number(document.getElementById("drivingSpeed").value)
    var speedLimit;
    speedLimit=Number(document.getElementById("speedLimit").value)
   
    var smallestfinelimit=speedLimit+15;
    var smallfinelimit=smallestfinelimit+5;

  
    if (speedLimit>10 && speedLimit<=60)
        if(drivingSpeed>speedLimit)
            
                if(drivingSpeed>speedLimit && drivingSpeed<=smallestfinelimit)
                {document.getElementById("answer").innerHTML="Infraction fine is 85 euros."}

                else if(drivingSpeed>speedLimit && drivingSpeed>=smallestfinelimit && drivingSpeed<=smallfinelimit)
                {document.getElementById("answer").innerHTML="Infraction fine is 115 euros."}   

        if(drivingSpeed<speedLimit)
                {document.getElementById("answer").innerHTML="No speeding, no fine."}


    
    else if (speedLimit>=70 && speedLimit<=120)
        if(drivingSpeed>speedLimit)
        
                if(drivingSpeed>speedLimit && drivingSpeed<=smallestfinelimit)
                {document.getElementById("answer").innerHTML="Infraction fine is 70 euros."}
                
                else if(drivingSpeed>speedLimit && drivingSpeed>=smallestfinelimit && drivingSpeed<=smallfinelimit)
                 {document.getElementById("answer").innerHTML="Infraction fine is 100 euros."}

        if(drivingSpeed<=speedLimit)
                 {document.getElementById("answer").innerHTML="No speeding, no fine."}
    
    
    else if(drivingSpeed>smallfinelimit)
    {document.getElementById("answer").innerHTML="Income-based unit fine."}
        
    
}

       
            
    