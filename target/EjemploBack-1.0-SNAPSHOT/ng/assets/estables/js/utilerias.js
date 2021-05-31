/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function valida(entrada, patron) {
    var myRe = new RegExp(patron, "g");
    var arr = myRe.exec(entrada);
    if (arr && arr.length > 0 && arr[0].toString == entrada.toString)
        return true;
    return false;
}
function validaPatron(event) {
    var patron = event.target.pattern;
    var char = String.fromCharCode(event.keyCode || event.charCode);
    var valor = event.target.value + char;
    return this.valida(valor, patron);
}
var considerar = true;
function validaSalir() {
    if (considerar) {
        var patron = event.target.pattern;
        var char = String.fromCharCode(event.keyCode || event.charCode);
        var valor = event.target.value + char;
        if(valor=="") return true;
        var sal = this.valida(valor, patron);
        if (!sal) {
            var selfr = event;
            setTimeout(function () {
                considerar=false;
                selfr.target.focus();
                considerar=true;
            }, 10);
        }
        return sal;
    }
}
function cvtMaysculas (event) {
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);
}

