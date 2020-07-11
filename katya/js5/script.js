function nameLastName(name, lastName){

    if( !name && !lastName ){
        return 0;
    }
    console.log(`Your name ${name}.Your Lastname ${lastName}`);
    return 1;
}
function nl(){
   var name = prompt('What is you name?');
   var lastName = prompt('What is you LastName?');
   return [name,lastName];
}
//  var  list = nl();
//  console.log(list);
//  nameLastName(list[0], list[1]);

 function getName(question){
     return prompt(question);
 }
//  var status = ;
//   console.log(typeof status, status);
  getError(+nameLastName(getName('What is you name?'), getName('What is you LastName?')))


 function getError(statusError, massege){
     if(statusError === false){console.log(statusError);
        massege = massege || 'Error';
        console.error(massege)
     }
 }