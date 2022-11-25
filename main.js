let names = ["Yusif","Sefa","Nicat","Kamal","Aygun"]
let surnames = ["Rzayev","Lacinov","Veliyev","Eliyeva","Haqverdiyeva"]
let emails = ["example@gmail.com", "example@gmail.ru","example@code.edu.az"]
let phone = [50,51,55,70,77,90,99] 

let input_name = document.querySelector("#nm")
let input_surname = document.querySelector("#srnm")
let input_email = document.querySelector("#eml")
let input_number = document.querySelector("#phn")
let input_date = document.querySelector("#dt")
let btn = document.querySelector("#btn")

btn.addEventListener("click",function(){
    let i = Math.floor(Math.random() * names.length);
    input_name.value = names[i]

    let j = Math.floor(Math.random() * surnames.length);
    input_surname.value = surnames[j]

    let k = Math.floor(Math.random() * emails.length);
    input_email.value = emails[k]

    let month = ((Math.floor(Math.random() * 12)+1))
    if(month<10){
    month = ("0"+(Math.floor(Math.random() * 9)+1)) 
    }

    let date = ((Math.floor(Math.random() * 31)+1))
    if(date<10){
        date = ("0"+(Math.floor(Math.random() * 9)+1)) 
    }
    input_date.value = (`${Math.floor(Math.random() * 20)+2000}-${month}-${date}`)
    
    let m = (Math.floor(Math.random() * phone.length))
    input_number.value = '+994 '+phone[m]+" "+(Math.floor(Math.random() * 900)+100)+(Math.floor(Math.random() * 90)+10)+(Math.floor(Math.random() * 90)+10);
})


