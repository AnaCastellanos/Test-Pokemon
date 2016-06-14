const endpoints = new Array('pokemon','berry','iberry-firmness','berry-flavor','contest-type','contest-effect','super-contest-effect','encounter-method')
const fs = require('fs')
const request = require('request')
const url = 'http://pokeapi.co/api/v2'
 

arrPokemon = () => {
	return new Promise(function(resolve,reject){
		fs.readFile('./pokemones.txt',{ encoding: 'utf8' },function(err,res){	
			if(err) return reject(err)

			return resolve(res)

})
})	
}

 writeResponse =(name,content)=>{
	return new Promise(function(resolve,reject){
		fs.writeFile(name,content,function(err,res){
			if(err) return reject(err)
		
			return resolve(res)
		})
	})
}

pokemon = (endpoint="pokemon/",name="1")=>{

	return new Promise(function(resolve,reject){
		console.log(`${url}/${endpoint}/${name}`)
		request(`${url}/${endpoint}/${name}`,function(err,res,body){
			if(err) return reject(err)

			return resolve(body)
})
})
} 

readPokemon = (response)=>{
	let pokemones = response.split('\n');
	for(let i= 0; i < pokemones.length;i++){
		console.log(endpoints[0],pokemones[i])
		pokemon(endpoints[0],pokemones[i]).then(responses => writeResponse('./pokemon- '+i,responses)).catch(err => console.log(err))
	}
}

module.exports.arrPokemon = arrPokemon;
module.exports.writeResponse = writeResponse;
module.exports.pokemon = pokemon;
module.exports.readPokemon = readPokemon;
