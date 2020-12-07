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
  let result=array.filter(element=>element.name==="name");
  return result;

}


 /* describe('matchName()', function () {
    it('accesses the data structure to check if name matches', function   const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];

      expect(matchName(drivers, 'Bobby')).to.eql([
        {
          name: 'Bobby',
          hometown: 'Pittsburgh'
        },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay'
        }
      ]);
    });
  });
});
*/