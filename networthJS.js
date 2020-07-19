function cashTotal(){
    var values = [document.getElementById("a").value, document.getElementById("b").value, document.getElementById("c").value,
                 document.getElementById("d").value, document.getElementById("e").value, document.getElementById("f").value];
    var total = 0;
    for(var i=0; i<values.length; i++){
        total += parseInt(values[i]);
    }
    return total;
}
    
function cashText(){
     document.getElementById("cash").innerHTML = "The cash assets total is $" + cashTotal();
}

function investedTotal(){
    var values =[document.getElementById("g").value,document.getElementById("h").value,document.getElementById("i").value,
                 document.getElementById("j").value,document.getElementById("k").value,document.getElementById("l").value,
                 document.getElementById("m").value,document.getElementById("n").value,document.getElementById("o").value,
                 document.getElementById("p").value,document.getElementById("q").value,document.getElementById("r").value,
                 document.getElementById("s").value,document.getElementById("t").value,document.getElementById("u").value,
                 document.getElementById("v").value];
    var total = 0;
    for(var i=0; i<values.length; i++){
        total += parseInt(values[i]);
    }
    return total;
}

function investedText(){
    document.getElementById("invested").innerHTML = "The invested assets total is $" + investedTotal();
}
    
function useTotal(){
    var values = [document.getElementById("a1").value,document.getElementById("a2").value,document.getElementById("a3").value,
                  document.getElementById("a4").value,document.getElementById("a5").value,document.getElementById("a6").value];
    var total = 0;
    for(var i=0; i<values.length; i++){
        total += parseInt(values[i]);
    }
    return total;
}

function useText(){
    document.getElementById("use").innerHTML = "The use assets total is  $" + useTotal();
}

function assetsTotal(){
   return cashTotal() + investedTotal() + useTotal();
}

function assetsText(){
    document.getElementById("assets").innerHTML = "Total assets is $" + assetsTotal();
}
    
function libTotal(){
    var values = [document.getElementById("b1").value,document.getElementById("b2").value,document.getElementById("b3").value,
                  document.getElementById("b4").value,document.getElementById("b5").value,document.getElementById("b6").value,
                  document.getElementById("b7").value,document.getElementById("b8").value,document.getElementById("b9").value,
                  document.getElementById("b10").value];
    var total = 0;
    for(var i=0; i<values.length; i++){
        total += parseInt(values[i]);
    }
    return total;
}
    
function libText(){
    document.getElementById("lib").innerHTML = "The liabilities total is $" + libTotal();
}
    
function netTotal(){
    return cashTotal() + investedTotal() + useTotal() - libTotal();
}

function netText(){
    document.getElementById("net").innerHTML = "Your Net Worth is $" + netTotal();
}