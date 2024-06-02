function totalmiles(inp1,inp2,inp3,output) {
    var value1 = parseFloat(document.getElementById(inp1).value);
    var value2 = parseFloat(document.getElementById(inp2).value);
    var value3 = parseFloat(document.getElementById(inp3).value);

    var result = value1 + value2 + value3;

    document.getElementById(output).value = result;
}
function ratepermile(inp1,inp2,output) {
    var value1 = parseFloat(document.getElementById(inp1).value);
    var value2 = parseFloat(document.getElementById(inp2).value);

    var result = value1 / value2 ;

    document.getElementById(output).value = result;
}
function feulreduction(inp1,output) {
    var value1 = parseFloat(document.getElementById(inp1).value);

    var result = (value1 / 1000) * 0.05 ;

    document.getElementById(output).value = result;
}
function feulcost(inp1,inp2,inp3,inp4,output)  {
    var value1 = parseFloat(document.getElementById(inp1).value);
    var value2 = parseFloat(document.getElementById(inp2).value);
    var value3 = parseFloat(document.getElementById(inp3).value);
    var value4 = parseFloat(document.getElementById(inp4).value);

    var result = value1/(value2*(1 - value3) )*  value4 ;

    document.getElementById(output).value = result;
}

