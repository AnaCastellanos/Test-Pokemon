let  result = (option , number,pot) => {

if(option ==0 ){   //fibonacci 

if (number < 2) return 1;
	else return result(option,number-2) + result(option,number-1);
}
else{

if(number == 0)
                return 1;
        else
                return result(option,number - 1,pot)* pot;
 }
}

var res = result(0,10);
console.log(res);

