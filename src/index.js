// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    
	 var coinsType = {H: 50, Q: 25, D: 10, N: 5, P: 1};
	 var coinsToHands = {};
	 var errToMuch = {error: "You are rich, my friend! We don't have so much coins for exchange"};
	 
	 if(currency>10000) { return errToMuch;}
	 	
	 	if(currency >= coinsType.H){
		 	coinsToHands.H = parseInt(currency / coinsType.H, 10);  
		 	currency %= coinsType.H;}

	 	if(currency >= coinsType.Q){
	 		coinsToHands.Q = parseInt(currency / coinsType.Q, 10);
	 		currency %= coinsType.Q;
	 	}
	 	if(currency >= coinsType.D){
	 		coinsToHands.D = parseInt(currency / coinsType.D, 10);
	 		currency %= coinsType.D;
	 	}
	 	if(currency >= coinsType.N){
	 		coinsToHands.N = parseInt(currency / coinsType.N, 10);
	 		currency %= coinsType.N;
	 	}
	 	if(currency >= coinsType.P){
	 		coinsToHands.P = parseInt(currency / coinsType.P, 10);
	 	}	 			
	
	return coinsToHands;

    
    // Return an object containing the minimum number of coins needed to make change
}
