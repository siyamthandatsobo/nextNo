let arNum = [5,1,8,7,4,3,2];
let b = 0
        let nextInput = document.getElementById('output');
        let calcbtn = document.querySelector('[data-next]');
        
        calcbtn.addEventListener('click', displayNextNumber)
        function displayNextNumber(){
            if(b < arNum.length){
                let next = arNum[b];
                b++
            
                nextInput.value = next
            }else{
                b = 0
            }
        }