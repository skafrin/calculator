let input=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');

let string="";
let arr =Array.from(buttons);
// console.log('arr' , arr);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        console.log(e , 'event');
        if(e.target.innerHTML== '='){
            string=eval(string);
            input.value=string;
        } else if(e.target.innerHTML == 'AC'){
            string="";
            input.value=string;
        } else if(e.target.innerHTML == 'DEL'){
            string=string.substring(0,string.length-1);
           input.value=string; 
        } else {
            console.log('string1' , string);
        console.log('html' , e.target.innerHTML)
        string = string + e.target.innerHTML;
        console.log('string2' , string);
        input.value=string;
        }  
    })
})






