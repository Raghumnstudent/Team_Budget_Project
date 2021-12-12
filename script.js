product = {}
function adding() {
        var p=prompt('Enter product name: ')
        // document.write(typeof(p))
        var q = parseInt(prompt('Enter the price of product: '))
        while(isNaN(q)){
            alert("Enter price corectly")
            var q = parseInt(prompt('Enter the price of product: '))
        }
        product[p] = q;
        var p1 = prompt('Do you want to add one more product: y for yes n for no')
        while (p1 == 'y'){
            var p = prompt('Enter product name: ')
            var q = parseInt(prompt('Enter the price of product: '))
            while(isNaN(q)){
                alert("Enter price corectly")
                var q = parseInt(prompt('Enter the price of product: '))
            }
            product[p] = q;
            var p1 = prompt('Do you want to add one more product: y for yes n for no')
        }     
    }   

function total(){
    let sum = 0
    for(let i in product){
        sum += product[i]
    }
    document.getElementById("para").innerHTML += sum;
}

function display(){
    for(let i in product){
        document.getElementById("price").innerHTML += product[i] + " "
        document.getElementById("data").innerHTML += i +" "

    }   
}




    
