var gaji = 4500000;
var trsp = 10000;
var infak = 50000;
var bpjs = 250000;
var p = 2.5 / 100;
var pajak = gaji * p;
var hari = 24 ;
var total = gaji - (pajak + bpjs + infak) + (trsp * hari)


console.log ("gaji kotor :" + "Rp." + gaji);
console.log ("=======================");
console.log("Potongan Pajak 2,5%:" + "Rp." + pajak );
console.log("Potongan bpjs :" + "Rp." + bpjs);
console.log("Potongan infak :" + "Rp." + infak);
console.log ("=======================");
console.log("Total potongan :" + "Rp." + ( pajak + bpjs + infak));
console.log("=======================");
console.log("Tunjangan tranport :" + "Rp." + trsp);
console.log("Total hari kerja :" + " 24 hari");
console.log("=======================");
console.log("Total tunjangan :" + ( trsp  * hari) );
console.log("=======================");
console.log("Perhitungan Gaji :");
console.log("(Gaji kotor - Potongan) +  Tunjangan");
console.log("(4500000 - 412500)" + "240000" )
console.log("=======================");
console.log("Gaji bersih :" + "Rp." + total)
