// //DOM

// //select an element
// let titleCarOne = document.getElementById('carName1')
// titleCarOne.innerHTML = "Mustang GT X" //ini DOM untuk mengubah value pada object html yang dituju
// //select an element
// let priceCarOne = document.getElementById('carPrice1')
// priceCarOne.innerHTML = "$213,000" //ini DOM untuk mengubah value pada object html yang dituju


// // let buttonPrimary = document.getElementsByTagName('a')
// // buttonPrimary[0].innerHTML = 'Sold Out'


// //state barang tersedia
// let stocks = false

// let buttonviewPrimary = document.querySelectorAll('a.btn-view-details')
// console.log(buttonviewPrimary);

// for(let i=0; i<buttonviewPrimary.length; i++){
//     if(!stocks){
//         buttonviewPrimary[i].innerHTML ='Sold Out'
//         buttonviewPrimary[i].classList.add('btn-danger')
//         buttonviewPrimary[i].classList.remove('btn-primary')
//         buttonviewPrimary[i].classList.add('disabled')
//     }
// }


let cars = document.getElementById('cars');
let i=0;

function saveCar(){
    carName = document.getElementById('name').value
    carPrice = document.getElementById('price').value
    carPhoto = document.getElementById('photo').value
    i++
    cars.innerHTML += 
    `<div class="col-lg-3 col-md-6 col-sm-6 col-12">
    <img src="${carPhoto}" 
        alt="" class="img-fluid">
    <h3 class="mt-3" id="carName1">
        ${carName} 
    </h3>
    <p id="carPrice1">
        ${carPrice}
    </p>
    <p>
        <a href="#" class="btn-view-details btn btn-primary w-100"> View Detail </a>
        <a href="#" class="mt-2 btn btn-secondary w-100"> Book Now </a>
    </p>
    </div>`;
    carName = document.getElementById('name').value = ''
    carPrice = document.getElementById('price').value =''
    carPhoto = document.getElementById('photo').value = ''
    
}
