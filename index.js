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
     return element.indexOf(name);
    
  });
  return result;
}



 /*describe('fuzzyMatch()', function () {
    const drivers = [];

    beforeEach(function () {
      drivers.length = 0;

      const drivers=['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
    });

    it('returns a driver if beginning provided letters match', function () {
      expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);
    });

    it('does not return drivers if only middle or ending letters match', function () {
      expect(fuzzyMatch(drivers, 'y')).to.have.members([]);
    });

    it('does not return drivers if only middle or ending letters match', function () {
      expect(fuzzyMatch(drivers, 'mm')).to.have.members([]);
    });
  });*/