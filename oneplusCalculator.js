let chk="";                    
let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerText=='='){
            if(string=="1+"){
                string="Never Settle"
                document.querySelector('#ans').innerText=string;
                string="";
            }
            else{
                string=string.replace("×","*");
                string=string.replace("÷","/");
                string=eval(string);
                let len1=new String(string);
                string=len1;
              
                document.querySelector('#ans').innerText=string;
            }
        }
        else if(e.target.innerText=="AC"){
            string="";
            document.querySelector('#ans').innerText="0";
        }
        else if(e.target.innerText=="DE"){
            let len=string.length;
            if(string.length>1){
                string=string.slice(0,string.length-1);
                document.querySelector('#ans').innerText=string;
            }
            else{
                string="";
                document.querySelector('#ans').innerText="0";
            }
        }
        else if(e.target.innerText=="+" || e.target.innerText=="×" || e.target.innerText=="÷"){
            if(string.length>0){
                chk=string.charAt(string.length-1);
                if(chk=="+" || chk=="-" || chk=="×" || chk=="÷") string=string.slice(0,string.length-1);
                string=string+e.target.innerText;
            }
            if(string.length>1){
                chk=string.charAt(string.length-2);
                if(chk=="+" || chk=="-" || chk=="×" || chk=="÷"){
                    string=string.slice(0,string.length-2);
                    string=string+e.target.innerText;
                }                        
            }
            if(string.length>0) document.querySelector('#ans').innerText=string;
            else{
                string="";
                document.querySelector('#ans').innerText="0"; 
            }
        }
        else if(e.target.innerText=="-"){
            chk=string.charAt(string.length-1);
            if(chk=="+" || chk=="-") string=string.slice(0,string.length-1);
            string=string+e.target.innerText;
            document.querySelector('#ans').innerText=string;
        }
        else{
            string=string+e.target.innerText;
            document.querySelector('#ans').innerText=string;
        }
    })
})
