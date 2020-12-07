// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(array,name){
  let result=array.filter(element=>
  {
    return element.toLowerCase()===name.toLowerCase();
    
  });
  return result;
}

function fuzzyMatch(array,name){
  let result=array.filter(element=>
  {
     return element.substring(0, 2).indexOf(name)!==-1;
    
  });
  return result;
}


function matchName(array,name){
  let result=array.filter(element=>element.name===name);
  return result;
}

