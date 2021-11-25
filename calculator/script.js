const calculator = document.querySelector(".calculator")
document.addEventListener('onload', myFunc);
let arrCls = ["ac", "delete", "bracket","angka","operator","equal"];
let arrTxt = [
    "AC", "DEL", "(",")",
    "7","8","9","/"
    ,"4","5","6","*"
    ,"1","2","3","-"
    ,"0",".","=","+"
];

function myFunc(cls, txt) {
    var indxCls=[0,1,2,2,3,3,3,4,3,3,3,4,3,3,3,4,3,4,5,4];
    var indx= 0;
    calculator.innerHTML += `<div class="layar"></div>`
    for (let index = 0; index < 5; index++) {
        calculator.innerHTML += `
        <div class="baris">
        <div class=`+cls[indxCls[indx]]+`>`+txt[indx++]+`</div>
        <div class=`+cls[indxCls[indx]]+`>`+txt[indx++]+`</div>
        <div class=`+cls[indxCls[indx]]+`>`+txt[indx++]+`</div>
        <div class=`+cls[indxCls[indx]]+`>`+txt[indx++]+`</div>
        </div>
        `    
        
    }
    
}



myFunc(arrCls, arrTxt);
let layar = document.querySelector(".layar")
const numbers =  Array.from(document.querySelectorAll(".angka"))
const operators =  Array.from(document.querySelectorAll(".operator"))
const brackets = Array.from(document.querySelectorAll(".bracket"))

tulis(numbers);
tulis(operators);
tulis(brackets);




document.querySelector(".equal").addEventListener("click", () => {
    
		var nilai = layar.innerText;
		if(nilai!="" && nilai!="Error"){
			try {
    		var hasil = eval(nilai);
			} catch (e) {
				if (e instanceof SyntaxError) {
					alert(e.message);
                    hasil="Error";
				}
			}
		layar.innerHTML=hasil;
		}else if(nilai=="Error"){
        layar.innerHTML="";
        }
})
document.querySelector(".delete").addEventListener("click", () => {
   	var nilai = layar.innerText;
	var indx = nilai.length;
	if(nilai !=0){
	layar.innerHTML=nilai.substring(0,indx-1);
    }
})

document.querySelector(".ac").addEventListener("click", () => {
 layar.innerHTML="";
})

function isOperator(inp){
    var out = false;
    operators.forEach(e =>{
        if(inp == e.innerText){
            out=true;
        }
    })
    return out;
}

function tulis(inp){
 inp.forEach(e => {
    e.addEventListener("click", () => {
        console.log(e.innerText)

        var indx = layar.innerText.length-1;
        var lastchar = layar.innerText.charAt(indx);
        if(((layar.innerText !="" || !isOperator(e.innerText))) && (!(isOperator(lastchar) && isOperator(e.innerText)) || layar.innerText=="")){
            layar.innerHTML += e.innerText;

            
        }
    })
    })
 }


// function del(){
// 	var nilai = document.getElementById("output").value;
// 	var indx = nilai.length;
	
// 	document.getElementById("output").value=nilai.substring(0,indx-1);
// }
// function hapusSemua() {
//       document.getElementById("output").value = "";
// 	}
// 	function hapusnol(){
// 	var nilai = document.getElementById("output").value;
//       if (nilai == "0") {
//            nilai = "";
//            document.getElementById("output").value = nilai;
//       }
// 	}
// 	function output(nilai){
// 		hapusnol();
// 		document.getElementById("output").value+=nilai;
// 	}
// 	function hitung(){
// 		var nilai = document.getElementById("output").value;
// 		if(nilai!=""){
// 			try {
//     		var hasil = eval(nilai);
// 			} catch (e) {
// 				if (e instanceof SyntaxError) {
// 					alert(e.message);
// 				}
// 			}
// 		document.getElementById("output").value=hasil;
// 		}
// 	}
// 	function validasitext(event){
// 		    var angka = (event.which) ? event.which : event.keyCode
//             if((angka>=42 && angka<=57 && angka!==44)){
// 				return true;
// 			}else if(angka===67 || angka===99){
// 				hapusSemua();
// 				return false;
// 			}else if(angka===13 || angka===61){
// 				var isi = document.getElementById("output").value;
// 				if(isi!=""){
// 				hitung();
// 				}
// 				return false;
// 			}
// 			else{
// 				return false;
// 			}       
// 	}


