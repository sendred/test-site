
var op = 0
var res2 = 0
var res1 = 0
var v
var num

function tap1(){
    funcC(1)
}
function tap2(){
    funcC(2)
}
function tap3(){
    funcC(3)
}
function tap4(){
    funcC(4)
}
function tap5(){
    funcC(5)
}
function tap6(){
    funcC(6)
}
function tap7(){
    funcC(7)
}
function tap8(){
    funcC(8)
}
function tap9(){
    funcC(9)
}
function tap0(){
    funcC(0)
}
function tapP(){
    funcC('.')
}
function backTap(){
    funcC('b')
}
function clearTap(){
    funcC('c')
}

function funcC(num){
    switch(num){
        case 1:
            document.getElementById('num1').value += 1
            break;
        case 2:
            document.getElementById('num1').value += 2
            break;
        case 3:
            document.getElementById('num1').value += 3
            break;    
        case 4:
            document.getElementById('num1').value += 4
            break;
        case 5:
            document.getElementById('num1').value += 5
            break;
        case 6:
            document.getElementById('num1').value += 6
            break;
        case 7:
            document.getElementById('num1').value += 7
            break;
        case 8:
            document.getElementById('num1').value += 8
            break;
        case 9:
            document.getElementById('num1').value += 9
            break;
        case 0:
            document.getElementById('num1').value += 0
            break;  
        case '.':
            document.getElementById('num1').value += '.'
            break;
        case 'b':
            const str = document.getElementById('num1').value
            document.getElementById('num1').value = str.slice(0, -1)
            break;
        case 'c':
            document.getElementById('num1').value = null
            res1 = res2 = null
            break;
        default: break;            
    }
}

function plusTap(){
    op = '+'
    func1()
}

function minTap(){
    op = '-'
    func1()
}

function devTap(){
    op = '/'
    func1()
}

function mulTap(){
    op = '*'
    func1()
}

function func1(){
    res1 = document.getElementById('num1').value
    document.getElementById('num1').value = null
}

const equal = document.getElementById('equal');
function equalTap(){
    res2 = document.getElementById('num1').value
    func()
    document.getElementById('num1').value = v
    res1 = null
}
equal.addEventListener('click', equalTap);

function func(){
    switch (op) {
        case '+':
            v = Number(res1) + Number(res2);
            break;
        case '-':
            v = res1 - res2;
            break;
        case '*':
            v = Number(res1) * Number(res2);
            break;
        case '/':
            v = Number(res1) / Number(res2);
            break;    
    
        default:
            break;
    }
}