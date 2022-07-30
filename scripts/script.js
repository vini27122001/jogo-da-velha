
function reload() {
   return location.reload();
}

function imagem(elemento,url) {
    var img = document.createElement("IMG");
        img.style.width = "200px";
        img.style.height = "200px";
        img.src = url;
        elemento.appendChild(img);
}


function  addElemento(obj,id) {
    let btn = document.getElementById('inputNumber');

    if(verificaString(btn.value)){
        return alert("Digite um numero valido!!");
    }

    if(verificaId(id) === false) {
        return ;
      } else {
        if(btn.value === '1') {
            imagem(obj,"https://img.icons8.com/ios/452/x.png");
            obj.style.backgroundColor = '#FFFFFF';
            obj.value = 1;
            console.log(obj.value);
        } else if(btn.value === '2') {
            imagem(obj,"https://img.icons8.com/dotty/344/o.png")
            obj.style.backgroundColor = '#FFFFFF';
            obj.value = 2;
            console.log(obj.value);
                }
      }      
}
var l1_c1 = 0;
var l1_c2 = 0;
var l1_c3 = 0;
var l2_c1 = 0;
var l2_c2 = 0;
var l2_c3 = 0;
var l3_c1 = 0;
var l3_c2 = 0;
var l3_c3 = 0;

function vertical(obj,id) {

            if(verificaNumero(obj.value)){
                return;
            }

           if(verificaId(id) == false) {
             return alert("selecione outra casa para jogar!!")
           }else{
            if(obj.value == 1 ) {
                switch(id) {
                    case 'l1-c1' : l1_c1++;
                    break;
                    case 'l1-c2' : l1_c2++;
                    break;
                    case 'l1-c3' : l1_c3++;
                    break;
                    case 'l2-c1' : l2_c1++;
                    break;
                    case 'l2-c2' : l2_c2++;
                    break;
                    case 'l2-c3' : l2_c3++;
                    break;
                    case 'l3-c1' : l3_c1++;
                    break;
                    case 'l3-c2' : l3_c2++;
                    break;
                    case 'l3-c3' : l3_c3++;
                    break;
                }
            } else {
                switch(id) {
                    case 'l1-c1': l1_c1++, l1_c1++;
                    break;
                    case 'l1-c2': l1_c2++, l1_c2++;
                    break;
                    case 'l1-c3': l1_c3++, l1_c3++;
                    break;
                    case 'l2-c1': l2_c1++, l2_c1++;
                    break;
                    case 'l2-c2': l2_c2++, l2_c2++;
                    break;
                    case 'l2-c3': l2_c3++, l2_c3++;
                    break;
                    case 'l3-c1': l3_c1++, l3_c1++;
                    break;
                    case 'l3-c2': l3_c2++, l3_c2++;
                    break;
                    case 'l3-c3': l3_c3++, l3_c3++;
                    break;
                }
            }
           }

        

         if(l1_c1 == 1 && l1_c2 == 1 && l1_c3 == 1 || l2_c1 == 1 && l2_c2 == 1 && l2_c3 == 1 || l3_c1 == 1 && l3_c2 == 1 && l3_c3 == 1 ) {
            alert("Voce ganhou!!");
            reload()
        } else if ( l1_c1 == 1 && l2_c1 == 1 && l3_c1 == 1 || l1_c2 == 1 && l2_c2 == 1 && l3_c2 == 1 || l1_c3 == 1 && l2_c3 == 1 && l3_c3 == 1 ) {
            alert("Voce ganhou!!");
            reload()
        }
        else if(l1_c1 == 1 && l2_c2 == 1 && l3_c3 == 1) {
            alert("Voce ganhou!!");
            reload()
        }
        else if(l1_c3 == 1 && l2_c2 == 1 && l3_c1 == 1) {
            alert("Voce ganhou!!");
            reload()
        }
        else if(l1_c1 == 2 && l1_c2 == 2 && l1_c3 == 2 || l2_c1 == 2 && l2_c2 == 2 && l2_c3 == 2 || l3_c1 == 2 && l3_c2 == 2 && l3_c3 == 2 ) {
            alert("Voce ganhou!!");
            reload()
        }
        else if ( l1_c1 == 2 && l2_c1 == 2 && l3_c1 == 2 || l1_c2 == 2 && l2_c2 == 2 && l3_c2 == 2 || l1_c3 == 2 && l2_c3 == 2 && l3_c3 == 2 ) {
            alert("Voce ganhou!!");
            reload()
        }
        else if(l1_c1 == 2 && l2_c2 == 2 && l3_c3 == 2) {
            alert("Voce ganhou!!");
            reload()
        }
        else if(l1_c3 == 2 && l2_c2 == 2 && l3_c1 == 2) {
            alert("Voce ganhou!!");
            reload()
        } else if(l1_c1 != 0 && l1_c2 != 0 && l1_c3 != 0 && l2_c1 != 0 && l2_c2 != 0 && l2_c3 != 0 && l3_c1 != 0 && l3_c2 != 0 && l3_c3 != 0) {
             l1_c1 = 0;
             l1_c2 = 0;
             l1_c3 = 0;
             l2_c1 = 0;
             l2_c2 = 0;
             l2_c3 = 0;
             l3_c1 = 0;
             l3_c2 = 0;
             l3_c3 = 0;

             alert("Ninguem ganhou!!");

             location.reload();
        }  
}


function verificaId(id) {

    switch(id) {
        case 'l1-c1' : 
            if(l1_c1 == 1) {
                return false;
            }
            break;
        case 'l1-c2' :
            if(l1_c2 == 1) {
                return false;
            }
            break;
        case 'l1-c3' :
            if(l1_c3 == 1) {
                return false;
            }   
            break;
        case 'l2-c1' :
            if(l2_c1 == 1) {
                return false;
            }
            break;
        case 'l2-c2' :
            if(l2_c2 == 1) {
                return false;
            }
            break;
        case 'l2-c3' : 
            if(l2_c3 == 1) {
                return false;
            }
            break;
        case 'l3-c1' :
            if(l3_c1 == 1) {
                return false;
            }
            break;
        case 'l3-c2' : 
            if(l3_c2 == 1) {
                return false;
            }
            break;
        case 'l3-c3' :
            if(l3_c3 == 1) {
                return false;
            }
            break;
    }     
}

function verificaString(obj) {    
    if(obj != '1' && obj != '2') {
        return true;
    } else {
        return false;
    }
}

function verificaNumero(obj) {
    if(obj != 1 && obj != 2) {
        return true;
    } else {
        return false;
    }
}







