var arr=[];
var ele;
var eqn;
var res;
 $("#res").html("0");
function newele(par){
  $("#res").hide();
 if((par!=="ac")&&(par!=="ce")&&(par!="=")){
  if($.isNumeric(par)){
  arr.push(par);
   }
   else if(par=="."){
      if(!$.isNumeric(arr[arr.length-1])){
        arr.push("0");
        arr.push(".");
    }
    else{
        arr.push(".");
     }
   }
   else{
     if($.isNumeric(arr[arr.length-1])){
         arr.push(par);
     }
   }
   eqn=arr.join("");
   $("#eqn").html(eqn);
  
 }
  if(par==="ac"){
    arr=[];
     eqn=arr.join("");
    $("#eqn").html(eqn);
    $("#res").html("0");
    $("#res").show();
    
  }
  if(par=="ce"){
    arr.pop();
    eqn=arr.join("");
    $("#eqn").html(eqn);
    if(eqn==""){
       $("#res").html("0");
    $("#res").show();
      
    }
  }
  if(par=="="){
   res=eval(eqn); 
    if (res!=parseInt(res)){
      res=res.toFixed(2);
    }
    $("#res").html(res);
    $("#res").show();
    arr=[];
    arr.push(res);
  }
  
}