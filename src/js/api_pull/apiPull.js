function apiTesting() {
	fetch('https://api.etherscan.io/api?module=account&action=balancehistory&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&blockno=8000000&apikey=YourApiKeyToken')
  .then(response => response.json())
  .then(data => console.log(data));
  return response.json();
}


function balanceDiffCheck(height1, height2) {
	fetch('https://api.etherscan.io/api?module=account&action=balancehistory&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&blockno=8000000&apikey=YourApiKeyToken')
  .then(response => response.json())
  .then(data => console.log(data));

  return data;

}


function currentHeight() {
	
	var x =  Math.floor(Date.now() / 1000);
	fetch('https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=' + x + '&closest=before&apikey=YourApiKeyToken')
  .then(response => response.json())
  .then(data => console.log(data));

}


async function currentHeight2() {
	
	//get current time
	var x =  Math.floor(Date.now() / 1000);

	//pull most recent block height
	const response = await fetch('https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=' + x + '&closest=before&apikey=YourApiKeyToken')
 	
 	const y = await response.json();

 	//console log the height
 	console.log(y.result);

}


// Max rate limit reached, please use API Key for higher rate limit