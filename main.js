let dates_field= document.getElementById('dates_field');
let addBtn= document.getElementById('addBtn');
let submitBtn= document.getElementById('submitBtn');
let date= document.createElement('div');
let flag= false;
let count=0;
let workSheet= document.createElement('p');

if (addBtn){ // add btn pressed
    addBtn.addEventListener('click', (event) => {
        count++;
        console.log(count);

        let date= document.createElement('div');
        date.setAttribute('id',`date${count}`);
        
        date.innerHTML = `<input type="datetime-local" id="startDate"  />
                    
                        <input type="datetime-local" id="endDate" />`
        
        date.children[0].setAttribute('onblur',"compare(`${this.parentElement.id}`,'startDate',`${this.value}`);");
        date.children[1].setAttribute('onblur',"compare(`${this.parentElement.id}`,'endDate',`${this.value}`);");
        dates_field.append(date);
        
    });
}


function compare(parent,startOrEnd,valueOfSelectedDate)
{   
    flag=true;
    let parentID = parseInt(parent.replace ( /[^\d.]/g, '' ),10);

    if(parentID===0){

        let currentDate=document.getElementById(`date0`).children;
        var startDt = currentDate[0].value;
        var endDt = currentDate[1].value;
     
        if( (new Date(startDt).getTime() > new Date(endDt).getTime()) && startDt!="" && endDt!=""){
            flag=false;
            alert('Wrong Input');
        }
        
    }else{

        for(let i=0 ; i<parentID+1;i++){
            
            let currentDate=document.getElementById(`date${i}`).children;
            var startDt = currentDate[0].value;
            var endDt = currentDate[1].value;
            if( (new Date(startDt).getTime() > new Date(valueOfSelectedDate).getTime())||
                (new Date(endDt).getTime() > new Date(valueOfSelectedDate).getTime()))
            {   
                flag=false;
                console.log('wrongInput')
                alert('Wrong Input');
                break;
            }
        }


    
        
    }
    
}


if(submitBtn){ //submit putton press
    submitBtn.addEventListener('click', () =>{
        

        if(flag){

            workSheet.innerHTML='';
            for(let i=0 ; i<dates_field.childNodes.length-2;i++){
                
                
                let currentDate=document.getElementById(`date${i}`).children;
                var startEndText = document.createTextNode(`Start:${currentDate[0].value}         End:${currentDate[1].value}`);
                if(currentDate[0].value!="" && currentDate[1].value!=""){   //checking if not empty 

                    workSheet.appendChild(startEndText);
                    workSheet.appendChild(document.createElement('br'));
                }
            }
            document.getElementById('main').appendChild(workSheet);
           
            
        }
       
            
            
            //console.log(`Start:${currentDate.getElementById('startDate')}   End:${currentDate.getElementById('endDate')}`);
            
        

    });
}



