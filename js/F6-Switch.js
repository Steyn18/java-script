
var language = ['chinese','spanish','english','hindhi','arabic','japanese'];

for (let i = 0; i < language.length; i++) {
    switch (language[i]) { 
        case 'chinese': 
        case 'mandarin': 
          console.log('MOST number of native speakers!'); 
          break; 
        case 'spanish': 
          console.log('2nd place in number of native speakers'); 
          break; 
        case 'english': 
          console.log('3rd place'); 
          break; 
        case 'hindi': 
          console.log('Number 4'); 
          break; 
        case 'arabic': 
          console.log('5th most spoken language'); 
          break; 
        default: //if language is not in the cases, it returns default statement
          console.log('Great language too :D'); 
      } 
    
}

 
 
 
