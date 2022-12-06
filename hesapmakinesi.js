
var evaluate = Module.cwrap( 
    'evaluate'      
    , 'number'      
    , ['string']);  

var useWasm; //bool dönecektir
var type = set();  


function oncedenYukle(val) {
    document.getElementById("gostericemBenSanaSonucu").value = val;
}

// Adds the string of the button pressed to the calc screen/display
function ekranaekle(val) {
    document.getElementById("gostericemBenSanaSonucu").value += val;
}

function hesapla() { 
        try 
        { 
            oncedenYukle(eval(document.getElementById("gostericemBenSanaSonucu").value)); 
        } 
        catch(e) 
        {
            oncedenYukle('Error'); 
        }
    
}