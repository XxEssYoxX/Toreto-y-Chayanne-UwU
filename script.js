var a = ['','Un ','Dos ','Tres ','Cuatro ', 'Cinco ','Seis ','Siete ','Ocho ','Nueve ','Diez ','Once ','Doce ','Trece ','Catorce ','Quince ','Dieciséis ','Diecisiete ','Dieciocho ','Diecinueve '];
var b = ['', '', 'Veinte','Treinta','Cuarenta','Cincuenta', 'Sesenta','Setenta','Ochenta','Noventa'];

function inWords (num) {
    if ((num = num.toString()).length > 6) return 'Cantidad Elevada';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Diez Millones ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Cien Mil  ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Mil  ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Cientos ' : '';
    str += (n[5] != 0) ? ((str != '') ? ' ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + ' ' : '';
    return str;
}

document.getElementById('number').onkeyup = function () {
    document.getElementById('words').innerHTML = inWords(document.getElementById('number').value);
};