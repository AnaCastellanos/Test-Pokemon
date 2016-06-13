const functions = require('./functions')

//read all pokemons
//functions.arrPokemon().then(responses => (functions.readPokemon(responses))).catch(err=> console.log(err))
   
functions.pokemon().then(responses => functions.writeResponse('./pokemon- nidoking',responses)).catch(err => console.log(err))    
 

