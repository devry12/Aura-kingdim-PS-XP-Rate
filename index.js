var fs = require('fs');
var iconv = require('iconv-lite');
var data = []
var data2 = []
var data3 = []
var content  = fs.readFileSync('./input/S_Biology.ini')
var iconv = iconv.decode(content,'Big5')
var kali = 0
data = iconv.toString().split("\n");

// console.log(data[2].split('|').length);

for (let index = 0; index < data.length; index++) {
   var result = data[index].split("|")
    data2.push(result);
}

for (let index = 0; index < data2.length; index++) {
    if (data2[index][39] != '' && data2[index][39] != undefined ) {
        data2[index][39] = (parseInt(data2[index][39])*kali).toString()
    }
}

// console.log(data2[13704].join('|'));


for (let index = 0; index < data2.length-1; index++) {
    data3.push(data2[index].join('|'))
    // data3.push(data2[index][0]+"|"+data2[index][1]+"|"+data2[index][2]+"|"+data2[index][3]+"|"+data2[index][4]+"|"+data2[index][5]+"|"+data2[index][6]+"|"+data2[index][7]+"|"+data2[index][8]+"|"+data2[index][9]+"|"+data2[index][10]+"|"+data2[index][11]+"|"+data2[index][12]+"|"+data2[index][13]+"|"+data2[index][14]+"|"+data2[index][15]+"|"+data2[index][16]+"|"+data2[index][17]+"|"+data2[index][18]+"|"+data2[index][19]+"|"+data2[index][20]+"|"+data2[index][21]+"|"+data2[index][22]+"|"+data2[index][23]+"|"+data2[index][24]+"|"+data2[index][25]+"|"+data2[index][26]+"|"+data2[index][27]+"|"+data2[index][28]+"|"+data2[index][29]+"|"+data2[index][30]+"|"+data2[index][31]+"|"+data2[index][32]+"|"+data2[index][33]+"|"+data2[index][34]+"|"+data2[index][35]+"|"+data2[index][36]+"|"+data2[index][37]+"|"+data2[index][38]+"|"+data2[index][39]+"|"+data2[index][40]+"|"+data2[index][41]+"|"+data2[index][42]+"|"+data2[index][43]+"|"+data2[index][44]+"|"+data2[index][45]+"|"+data2[index][46]+"|"+data2[index][47]+"|"+data2[index][48]+"|"+data2[index][49]+"|"+data2[index][50]+"|"+data2[index][51]+"|"+data2[index][52]+"|"+data2[index][53]+"|"+data2[index][54]+"|"+data2[index][55]+"|"+data2[index][56]+"|"+data2[index][57]+"|"+data2[index][58]+"|"+data2[index][59]+"|"+data2[index][60]+"|"+data2[index][61]);
    
}
for (let index = 0; index < data3.length; index++) {
    console.log(data3[index]);
    
}

fs.writeFile('./output/S_Biology.ini',data3.toString().split(',').join('\n'),function(err){
    if (err) {
        console.log(err);
    }
console.log("file berhail di buat");

})