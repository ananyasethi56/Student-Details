/*function myFunction()
{
   var table=document.getElementById("tb");
   var row=table.insertRow(0);
}*/

var insertData = false;
var editData = false;

var insert = function () {
    insertData = true;
    editData = false;
}

var edit = function () {
    editData = true;
    insertData = false;
}


$(document).ready(function () {
    $("#form1").hide();
    $(".but1").click(function () {
        $("#form1").show();


    });
});
$(document).ready(function () {
    $(".but4").click(function () {
        $("#form1").toggle(1000);


    });
});

var submitForm = function () {
    if (insertData) {
        var i = 1;
        $("#add").click(function () {

            var name = $("#name").val();
            var roll = $("#roll").val();
            var stream = $("#str").val();
            var year = $("#year1").val();
            var markup = "<tr><td>" + i + "</td><td>" + name + "</td><td>" + roll + "</td><td>" + stream + "</td><td>"
                + year + "</td><td><input type='checkbox' name='record'></td></tr>";
            $("table tbody").append(markup);
            i = i + 1;
            $(document).ready(function () {
                $("#form1").hide();
            });

        });

        // Find and remove selected table rows
        $("#del").click(function () {
            $("table tbody").find('input[name="record"]').each(function () {
                if ($(this).is(":checked")) {
                    $(this).parents("tr").remove();
                    i = i - 1;
                }
            });
        });
    }
    if (editData) {
        var a = document.getElementsByTagName("tr");
        var i = 1;
        while (i < a.length) {
            var row = a[i].children[1].innerHTML;
            if (row == document.getElementById("roll").value) {
                a[i].cells[0].innerHTML = document.getElementById("name").value;
                a[i].cells[1].innerHTML = document.getElementById("roll").value;
                a[i].cells[2].innerHTML = document.getElementById("str").value;
                a[i].cells[3].innerHTML = document.getElementById("year1").value;

            }
            i++;
        }
    }

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


function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    //var sno1=document.getElementById("sno"+no);
    var name = document.getElementById("name_row" + no);
    var country = document.getElementById("country_row" + no);
    var age = document.getElementById("age_row" + no);
    var pass = document.getElementById("pass_out" + no);

    //var sno_data=sno1.innerHTML;
    var name_data = name.innerHTML;
    var country_data = country.innerHTML;
    var age_data = age.innerHTML;
    var pass_data = pass.innerHTML;

    //sno1.innerHTML="<input type='text' id='sno_text"+no+"' value='"+sno_data+"'>";
    name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
    country.innerHTML = "<input type='text' id='country_text" + no + "' value='" + country_data + "'>";
    age.innerHTML = "<input type='text' id='age_text" + no + "' value='" + age_data + "'>";
    pass.innerHTML = "<input type='text' id='pass_text" + no + "' value='" + pass_data + "'>";
}
function save_row(no) {
    //var sno_val=document.getElementById("sno_text"+no).value;
    var name_val = document.getElementById("name_text" + no).value;
    var country_val = document.getElementById("country_text" + no).value;
    var age_val = document.getElementById("age_text" + no).value;
    var pass_val = document.getElementById("pass_text" + no).value;

    // document.getElementById("sno"+no).innerHTML=sno_val;
    document.getElementById("name_row" + no).innerHTML = name_val;
    document.getElementById("country_row" + no).innerHTML = country_val;
    document.getElementById("age_row" + no).innerHTML = age_val;
    document.getElementById("pass_out" + no).innerHTML = pass_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}