# miscellaney

 
 var encryptStuff=function(key,message){
   var ciph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   var ciph2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   var regularNote = Array.from(message);
   var secretNumbers = [];
   var secretNote = [];
   
   for (var i=0; i<key; i++){            // up until the key length, shifts the alphabet
      var scrabble = ciph2.shift();
      ciph2.push(scrabble);              // returns new alphabet
     }

   for(var i=0;i<regularNote.length; i++) {
     if(message[i] == ' '){
       secretNumbers.push(message[i]);
      }
     else if ((ciph.indexOf(regularNote[i]) != -1)){
      secretNumbers.push(ciph.indexOf(regularNote[i]));
      }
    }
    
   for (var i=0; i<secretNumbers.length; i++) {
      if((ciph2[secretNumbers[i]]) == undefined) {
        secretNote.push(' ');
      } else {
        secretNote.push(ciph2[secretNumbers[i]]);
      }
    }
    
    secretNote = secretNote.join('');
    console.log(secretNote);
 
 }
 
encryptStuff(5,'it is a secret')

var decryptStuff=function(key,message){
  var ciph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   var ciph2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   var regularNote = Array.from(message);
   var secretNumbers = [];
   var secretNote = [];
   
   for (var i=0; i<key; i++){            // up until the key length, shifts the alphabet
      var scrabble = ciph2.shift();
      ciph2.push(scrabble);  
     }

   for(var i=0;i<regularNote.length; i++) {
     if(message[i] == ' '){
       secretNumbers.push(message[i]);
       //console.log(secretNumbers);
      }
     else if ((ciph2.indexOf(regularNote[i]) != -1)){
      secretNumbers.push(ciph2.indexOf(regularNote[i]));
      }
    }
    
   for (var i=0; i<secretNumbers.length; i++) {
      if((ciph[secretNumbers[i]]) == undefined) {
        secretNote.push(' ');
      } else {
        secretNote.push(ciph[secretNumbers[i]]);
      }
    }
    secretNote = secretNote.join('');
    console.log(secretNote);
 
 }
decryptStuff(5,'ny nx f xjhwjy')
