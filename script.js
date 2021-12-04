$(function() {
var form=$("#form"); 
var password=$("#pwd");
var password2=$("#pwd2");
var userName=$("#username");
var submit=$("#submit");
var box=$('#term');
var country=$('#country');
var msg=$(".msg");                           
submit.attr('disabled',true);
submit.addClass('disabled');                    

//   adding countries to the select list 
$.each(countries,function(key,value){
  country.append(`<option value="${value.code}"> ${value.name} </option>`);
 });
 //////////////////////////////////////////////////////////////////////////////
 // adding change event to the form 
  form.change(function(){
      msg.hide();                                     // hide the messege if its dispalyed
    var checkPass1=password.val().length>9;           //verifying first password 
    var checkPass2= password.val()==password2.val(); //verifying second password 
    var checkUser=userName.val();                    //verifying username
    var checkSelect=country.val()!="choose";         //verifying select list 
    var checkBox=box.is(":checked");                    //verifying checkbox 
   if(checkPass1 &&checkPass2 && checkUser &&checkBox &&checkSelect){
    submit.removeAttr('disabled');
    submit.attr('disabled',false);}
    else{
        submit.attr('disabled',true);
        submit.addClass('disabled');   
    }
  });
  ////////////////////////////////////////////////////////////////////////////
  // adding submit event to the form 
  form.submit(function(e){
    e.preventDefault(); //prevent the form from submiting 
    msg.show();         
    msg.text(`Welcome ${userName.val()} ! The country code you selected is ${country.val()}`);
    submit.attr('disabled',true);
    submit.addClass('disabled'); 
  });
 

  });