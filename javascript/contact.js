
function MM_validateForm() { //v4.0
  if (document.getElementById){
    var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm.arguments;
    for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=document.getElementById(args[i]);
      if (val) { nm=val.name; if ((val=val.value)!="") {
        if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
          if (p<1 || p==(val.length-1)) errors+='- '+nm+' must contain an e-mail address.\n';
        } else if (test!='R') { num = parseFloat(val);
          if (isNaN(val)) errors+='- '+nm+' must contain a number.\n';
          if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
            min=test.substring(8,p); max=test.substring(p+1);
            if (num<min || max<num) errors+='- '+nm+' must contain a number between '+min+' and '+max+'.\n';
      } } } else if (test.charAt(0) == 'R') errors += '- '+nm+' is required.\n'; }
    } if (errors) alert('The following error(s) occurred:\n'+errors);
    document.MM_returnValue = (errors == '');
} }



$(document).ready(function() {
	/*$("#fbtn").mouseenter(function(e) 
			{
			$("#foward").animate({left:'-40px',opacity:'100px'},"slow");			 			
		});
			$("#foward").mouseleave(function(){
			$("#foward").animate({left:'-100px',opacity:'100px'},"slow");
		});*/
			$("#bbtn").mouseenter(function(e) 
			{
	        $("#backward").animate({right:'-72px',opacity:'100px'},"slow");		
			});
			$("#backward").mouseleave(function(){
			$("#backward").animate({right:'-120px',opacity:'100px'},"slow");
		});
	});		 
		