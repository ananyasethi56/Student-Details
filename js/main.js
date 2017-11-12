/*function myFunction()
{
   var table=document.getElementById("tb");
   var row=table.insertRow(0);
}*/

var insertData = false;
var editData = false;
var insert = function() {
    insertData = true;
    editData = false;
}

var edit = function() {
    editData = true;
    insertData = false;
}


$(document).ready(function(){
    $("#form1").hide();
    $(".but1").click(function(){
        $("#form1").show();
       
        
    });
});
$(document).ready(function(){
    $(".but4").click(function(){
        $("#form1").toggle(1000);
       
        
    });
});

function validateForm()
{
    var x=document.forms["myform"]["fname"].value;
    if(x == "")
    {
        alert("Name must be filled out!!");
        return false;
    }
}
var submitForm = function () {
    if (insertData) {
        var i = 1;

            var name = $("#name").val();
            var roll = $("#roll").val();
            var stream = $("#str").val();
            var year = $("#year1").val();
            var markup = "<tr><td>" + name + "</td><td>" + roll + "</td><td>" + stream + "</td><td>"
                + year + "</td><td><input type='checkbox' name='record'></td></tr>";
            $("table tbody").append(markup);
            $("#form1").hide();
       
        
    }
    if (editData) {
        console.log(1);
        var name = $("#name").val();
        var roll = $("#roll").val();
        var stream = $("#str").val();
        var year = $("#year1").val();
        var a = document.getElementsByTagName("tr");
        var j = 1;
        while (j < a.length) {
            var row = a[j].children[1].innerHTML;
            if (row == document.getElementById("roll").value) {
                a[j].childNodes[0].innerHTML = name;
                a[j].childNodes[1].innerHTML = roll;
                a[j].childNodes[2].innerHTML = stream;
                a[j].childNodes[3].innerHTML = year;

            }
            j++;
        }
        $("#form1").hide();
    }

}
var delete1 = function() {
        $("table tbody").find('input[name="record"]').each(function () {
            if ($(this).is(":checked")) {
                $(this).parents("tr").remove();
                i = i - 1;
            }
        });
}

$(document).ready(function () {
    $(".but3").click(function () {
        $("#form1").hide();


    });
});




 /*if(insertData)
 {
   $(document).ready(function(){
    var i=1;
        $("#add").click(function(){
            
             var name = $("#name").val();
             var roll = $("#roll").val();
             var stream= $("#str").val();
             var year= $("#year1").val();
             var markup = "<tr><td>"+ i + "</td><td>" + name + "</td><td>" + roll + "</td><td>" + stream + "</td><td>"
              + year + "</td><td><input type='checkbox' name='record'></td></tr>";
             $("table tbody").append(markup);
             i=i+1;
             $(document).ready(function()
         {
           $("#form1").hide();
         });
            
         });     
    
     // Find and remove selected table rows
     $("#del").click(function(){
        $("table tbody").find('input[name="record"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").remove();
                i=i-1;
            }
        });
    });
});
   
 }
    if(editData) {
        var a=document.getElementsByTagName("tr");
          var i=1;
          while(i<a.length)
          {
              var row=a[i].childNodes[2].innerHTML;
              if(row==document.getElementById("roll").value)
              {
                  a[i].childNodes[1].innerHTML=document.getElementById("name").value;
                  a[i].childNodes[2].innerHTML=document.getElementById("roll").value;
                  a[i].childNodes[2].innerHTML=document.getElementById("str").value;
                  a[i].childNodes[2].innerHTML=document.getElementById("year1").value;
        
              }
              i++;
          }
        
        }*/
    
   
    



