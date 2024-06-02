function totalmiles(inp1, inp2, inp3, output) {
    var value1 = parseFloat(document.getElementById(inp1).value);
    var value2 = parseFloat(document.getElementById(inp2).value);
    var value3 = parseFloat(document.getElementById(inp3).value);

    var result = value1 + value2 + value3;

    document.getElementById(output).value = result;
}
function ratepermile(inp1, inp2, output) {
    var value1 = parseFloat(document.getElementById(inp1).value);
    var value2 = parseFloat(document.getElementById(inp2).value);

    var result = value1 / value2;

    document.getElementById(output).value = result;
}
function feulreduction(inp1, output) {
    var value1 = parseFloat(document.getElementById(inp1).value);

    var result = (value1 / 1000) * 0.5;

    document.getElementById(output).value = result;
    // setup ids here jin jin ids se ko target karna hai woh wali ids wahan pr write hai ok 
    feulCost('feulreduction1','avgmilepergallon','curgasprice','totalmile1','feulcost1');
}
function feulCost(b11, g2, g3, b8, outputFulcost) {
    const B11 =  parseFloat(document.getElementById(b11).value);
    const G2 = parseFloat(document.getElementById(g2).value);
    const G3 = parseFloat(document.getElementById(g3).value);
    const B8 = parseFloat(document.getElementById(b8).value);
    console.log(B11); //check values is present or not in the consoel tab (F12)
    console.log(G2);
    console.log(G3);
    console.log(B8);
    const result = B8 / (G2 * (1 - B11)) * G3;
    console.log(result);
    document.getElementById(outputFulcost).value = result;
}


// function feulcost(inp1, inp2, inp3, inp4, output) {
//     var value1 = parseFloat(document.getElementById(inp1).value);
//     var value2 = parseFloat(document.getElementById(inp2).value);
//     var value3 = parseFloat(document.getElementById(inp3).value);
//     var value4 = parseFloat(document.getElementById(inp4).value);
//     var result = value1 / (value2 * (1 - value3)) * value4;
//     document.getElementById(output).value = result;
// }