function totalmiles(inp1, inp2, inp3, output) {
    var value1 = parseFloat(document.getElementById(inp1).value);
    var value2 = parseFloat(document.getElementById(inp2).value);
    var value3 = parseFloat(document.getElementById(inp3).value);

    var result = value1 + value2 + value3;
    if (isNaN(result)) {
        document.getElementById(output).value = 0;
        return;
    }

    document.getElementById(output).value = result;
  
}
function feulreduction(inp1, output) {
    var value1 = parseFloat(document.getElementById(inp1).value);

    var result = (value1 / 1000) * 0.5;

    document.getElementById(output).value = result;
    feulCost('feulreduction1','avgmilepergallon','curgasprice','totalmile1','feulcost1');
    feulCost('feulreduction2','avgmilepergallon','curgasprice','totalmile2','feulcost2');
    feulCost('feulreduction3','avgmilepergallon','curgasprice','totalmile3','feulcost3');
    feulCost('feulreduction4','avgmilepergallon','curgasprice','totalmile4','feulcost4');
    
    TrueRate('rate1', 'feulcost1', 'Truerate1');
    TrueRate('rate2','feulcost2','Truerate2');
    TrueRate('rate3','feulcost3','Truerate3');
    TrueRate('rate4','feulcost4','Truerate4');
}

function feulCost(b11, g2, g3, b8, outputFulcost) {
    const B11 =  parseFloat(document.getElementById(b11).value);
    const G2 = parseFloat(document.getElementById(g2).value);
    const G3 = parseFloat(document.getElementById(g3).value);
    const B8 = parseFloat(document.getElementById(b8).value);
    // console.log(B11); //check values is present or not in the consoel tab (F12)
    // console.log(G2);
    // console.log(G3);
    // console.log(B8);
    var percentage = B11/100;
    const result = B8 / (G2 * (1 - percentage)) * G3;
    // console.log(result);
    document.getElementById(outputFulcost).value = result;
}

function ratepermile(inp1, inp2, output) {
    var value1 = parseFloat(document.getElementById(inp1).value);
    var value2 = parseFloat(document.getElementById(inp2).value);

    var result = value1 / value2;

    document.getElementById(output).value = result;
}

function TrueRPM(inp1, inp2, output) {
    var value1 = parseFloat(document.getElementById(inp1).value);
    var value2 = parseFloat(document.getElementById(inp2).value);

    var result = value1 / value2;

    document.getElementById(output).value = result;
    TotalRateMile('TrueRPM1','TrueRPM2','TrueRPM3','TrueRPM4','Totalratepermile');
}

function TrueDayRate(inp1, inp2, output) {
    var value1 = parseFloat(document.getElementById(inp1).value);
    var value2 = parseFloat(document.getElementById(inp2).value);
    var result = value2 / value1 ;
    document.getElementById(output).value = result;
    TotalRatePerDay('Truedayrate1','Truedayrate2','Truedayrate3','Truedayrate4','Totalrateperday');
}
function TrueRate(inp1, inp2, output) {
    var value1 = parseFloat(document.getElementById(inp1).value);
    var value2 = parseFloat(document.getElementById(inp2).value);

    var result = value1 - value2;

    document.getElementById(output).value = result;
    TrueRPM('Truerate1','totalmile1','TrueRPM1');
    TrueRPM('Truerate2','totalmile2','TrueRPM2');
    TrueRPM('Truerate3','totalmile3','TrueRPM3');
    TrueRPM('Truerate4','totalmile4','TrueRPM4');
    TotalRate('Truerate1','Truerate2','Truerate3','Truerate4','Totalrate');
}

function TotalRateMile(b15, c15, f15, g15, output) {
    var B15 = parseFloat(document.getElementById(b15).value);
    var C15 = parseFloat(document.getElementById(c15).value);
    var F15 = parseFloat(document.getElementById(f15).value);
    var G15 = parseFloat(document.getElementById(g15).value);

    var maxBC = Math.max(B15, C15);
    var maxFG = Math.max(F15, G15);
    var result = (maxBC + maxFG) / 2; 

    document.getElementById(output).value = result;
}
function TotalRatePerDay(b16, c16, f16, g16, output) {
    var B16 = parseFloat(document.getElementById(b16).value);
    var C16 = parseFloat(document.getElementById(c16).value);
    var F16 = parseFloat(document.getElementById(f16).value);
    var G16 = parseFloat(document.getElementById(g16).value);
    console.log("B16",B16);
    console.log("C16",C16);
    console.log("F16",F16);
    console.log("G16",G16);
    var maxBC = Math.max(B16, C16);
    var maxFG = Math.max(F16, G16);
    var result = (maxBC + maxFG) / 2;

    document.getElementById(output).value = result;
}
function TotalRate(b17, c17, f17, g17, output) {
    var B17 = parseFloat(document.getElementById(b17).value);
    var C17 = parseFloat(document.getElementById(c17).value);
    var F17 = parseFloat(document.getElementById(f17).value);
    var G17 = parseFloat(document.getElementById(g17).value);

    var maxBC = Math.max(B17, C17);
    var maxFG = Math.max(F17, G17);
    var result = (maxBC + maxFG) ; 

    document.getElementById(output).value = result;
}