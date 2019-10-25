var punteggioX=0;
var punteggioO=0;
var grid=[0,0,0,0,0,0,0,0,0,0];
var turno=1;
var numMosse=0;
function  changeSymbol(idN) {
    if (grid[idN-1]!=0) return;  
    numMosse++;

    if(numMosse>9)
    {  reset(); 
        return;
    }    

    if (turno%2!=0) {

        grid[idN-1]="X";
        document.getElementById(idN).innerHTML = "X";
        turno++;
    }
    else{
        grid[idN]="O";
        document.getElementById(idN).innerHTML = "O";
        turno++;
    }
    if((grid[0]==grid[1]==grid[2])||(grid[3]==grid[4]==grid[5])||(grid[6]==grid[7]==grid[8])||(grid[0]==grid[3]==grid[6])||(grid[1]==grid[4]==grid[7])||(grid[2]==grid[5]==grid[8])||(grid[0]==grid[4]==grid[8])||(grid[2]==grid[4]==grid[6])){
        
    }

    
}

function reset(){
    for (let i = 0; i < 9; index++) {
        document.getElementById(i).innerHTML = "";   
    } 
    grid=[0,0,0,0,0,0,0,0,0,0];
        turno=1;
        numMosse=0;
}