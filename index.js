// Write your code in this file!
function  scuberGreetingForFeet(tripDistance)  {
  if (tripDistance <= 400) {
    return 'This one is on me!';}
    else if (tripDistance > 2500) {
      return 'No can do.';}
      else if (tripDistance >2000) { 
        return 'I will gladly take your thirty bucks.' ;}
        else {
          return 'The trip will cost  ${(2000/30) * tripDistance} !' ;
    }
  }
function  ternaryCheckCity (destinationCity) {
return  destinationCity === 'NYC' ?  "Ok, sounds good."  :  "No go." ;
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case 'generous':
        return 'Thank you so much.';
        
    case 'not as generous':
        return  'Thank you.' ;
      
    case 'thanks for everything':
        return 'Bye.' ;
        
    } 
  }
    