let insertData = false;
let editData = false;
let insert =()=> {
    insertData = true;
    editData = false;
}

let edit =()=> {
    editData = true;
    insertData = false;
}


$(document).ready(()=>{
    $(`#form1`).hide();
    $(`.but1`).click(function(){
        $(`#form1`).toggle(1000);
       
        
    });
});
$(document).ready(()=>{
    $(`.but4`).click(function(){
        $(`#form1`).toggle(1000);
       
        
    });
});
// on clicking submit button it will insert or edit the record and as well as verify the data
var submitForm = ()=> {             
    if (insertData) {

        let name = document.getElementById(`name`).value;
        let roll = document.getElementById(`roll`).value;
        let str = document.getElementById(`str`).value;
        let year2 = document.getElementById(`year1`).value;
        let pttrn1=/[a-z A-Z]$/;
        let pttrn2=/^[0-9]{4}$/;
        let pttrn3=/^[0-9]{10}$/;
        let pttrn4=/^[a-z A-Z]{3}$/;
        
        // Conditions for validations
        if (name == `` ||roll == ``|| str == `` || year2 == ``) {
            alert(`ALL ENTERIES ARE REQUIRED!!!!!`);
            return false;
        }
            
          else  if (roll.length != 10) {
              
               alert(`The Contact No. must be at least 10 digit long!`);
               return false;
          }
        else if(!pttrn1.test(name))
               {
               alert(`ENTER NAME IN CORRECT FORMAT`);
               return false;
               }
          else if(!pttrn2.test(year2))
               {
               alert(`ENTER YEAR IN CORRECT FORMAT`);
               return false;
               }
           else if(!pttrn3.test(roll))
               {
               alert(`ROLLNO IN CORRECT FORMAT`);
               return false;
               }
               else if(!pttrn4.test(str))
               {
                alert(`STREAM SHOULD BE IN CORRECT FORMAT`);
                return false;
               }

               else {
                    let array=document.getElementsByTagName(`tr`);
                    let flag=1;	
                    let i=1;
                // it will check the dupliacy of the records!!
                while(i<array.length)
                {
                    
                    let row=array[i].children[1].innerHTML;	
                    if(row==document.getElementById(`roll`).value)
                    {flag=0;}
                    i++;
                }
                
                if(flag == 0)
                {
                    alert(`ENTER NEW RECORD`);
                }
               else{ 
                   // it will append the new row in the table
                let markup = `<tr><td>` + name + `</td><td>` + roll + `</td><td>` + str + `</td><td>`
                + year2 + `</td><td><input type='checkbox' name='record'></td></tr>`;
                $(`table tbody`).append(markup);
                $(`#form1`).hide();
                return false;
            }
                
            }
        } 
// it will edit the data by having rollno value
    if (editData) {
        let name = document.getElementById(`name`).value;
        let roll = document.getElementById(`roll`).value;
        let str = document.getElementById(`str`).value;
        let year2 = document.getElementById(`year1`).value;
        let pttrn1=/[a-z A-Z]$/;
        let pttrn2=/^[0-9]{4}$/;
        let pttrn3=/^[0-9]{10}$/;
        let pttrn4=/^[a-z A-Z]{3}$/;
        
        // Conditions for validations
        if (name == `` ||roll == ``|| str == `` || year2 == ``) {
            alert(`ALL ENTERIES ARE REQUIRED!!!!!`);
            return false;
        }
            
          else  if (roll.length != 10) {
              
               alert(`The Contact No. must be at least 10 digit long!`);
               return false;
          }
        else if(!pttrn1.test(name))
               {
               alert(`ENTER NAME IN CORRECT FORMAT`);
               return false;
               }
          else if(!pttrn2.test(year2))
               {
               alert(`ENTER YEAR IN CORRECT FORMAT`);
               return false;
               }
           else if(!pttrn3.test(roll))
               {
               alert(`ROLLNO IN CORRECT FORMAT`);
               return false;
               }
               else if(!pttrn4.test(str))
               {
                alert(`STREAM SHOULD BE IN CORRECT FORMAT`);
                return false;
               }

               else {
                    let array=document.getElementsByTagName(`tr`);
                    let flag=1;	
                    let i=1;
                // it will check the dupliacy of the records!!
                while(i<array.length)
                {
                    
                    let row=array[i].children[1].innerHTML;	
                    if(row==document.getElementById(`roll`).value)
                    {flag=0;}
                    i++;
                }
                
                if(flag == 0)
                {
                    alert(`ENTER NEW RECORD`);
                }
               else{ 
                   // it will append the new row in the table
                let markup = `<tr><td>` + name + `</td><td>` + roll + `</td><td>` + str + `</td><td>`
                + year2 + `</td><td><input type='checkbox' name='record'></td></tr>`;
                $(`table tbody`).append(markup);
                $(`#form1`).hide();
                return false;
            }
                
            }
        $(`#form1`).hide();
    }

}
// it will delete a particular record selected by user!!
let delete1 = ()=> {
        $(`table tbody`).find('input[name="record"]').each(function () {
            if ($(this).is(":checked")) {
                $(this).parents(`tr`).remove();
            
            }
            
        });
        alert(`YOUR SELECTED ENTRIES HAS BEEN DELETED`);
}

$(document).ready( ()=> {
    $(`.but3`).click(function () {
        $(`#form1`).hide();


    });
});



    



