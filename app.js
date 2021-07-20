function number(num){
    
    var total = document.getElementById('total')
    
    total.value += num
}

function clr(){

    var total = document.getElementById('total')

    total.value = ""

}

function total(){

    var total = document.getElementById('total')

    total.value = eval(total.value)
}
