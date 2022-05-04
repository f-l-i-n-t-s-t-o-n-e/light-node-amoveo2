var loop_start_height;
var globalnonce = 0;
var loop_finish_height;

var localBool;

var globalBool;


var intervalVar;

async function runtheloop(){

console.log("globalVariable is: " + intervalVar);

if (intervalVar != 1){

console.log("refreshing blocks");

headers_object.more_headers();
//keys.bal_div.appendChild(title9);
console.log("refreshing oracle list");
   //     abcd.oracles.innerHTML = "";           

firstTimeBool = 0;



//abcd.display_positions(window.localStorage.getItem("positionData"+keys.pub()));


console.log("seeing if we can update balance");
console.log(keys.pub());
//console.log("privkey");
//console.log(localStorage.getItem('privkey'));

if (keys.pub().length > 0){
	console.log("updating balance");
//	keys.update_balance();
//	keys.update_pubkey();
}
//console.log("refreshing blocks");


}


if (globalVariable == 1){
console.log("aborting header refresh because loading events");
}

intervalVar = 0;

}


const myInterval = setInterval(async function(){ runtheloop() }, 1000*10);


function myStopFunction() {
 // clearInterval(myInterval);
  intervalVar = 1;

  console.log("interval cleared");
}
/*
var obj3;

function Obj2() {

  this.func1 = function() {
    this.func2()
  }

  this.func2 = function() {
    setInterval(function(self) {
        runtheloop();
      console.log(typeof self.func2); //=> 'function'
    

    }, 1000*10, this)
  }

}

function main2() {
  var obj = new Obj2()
  var ob3 = obj
  obj.func1()
  console.log("in main2");
}

main2()

function clearInterval2(){
    clearInterval(obj3.func1());
}

*/
//setInterval(console.log(globalBalance), 150*30);


function copyToClipboard(text) {
    var selected = false;
    var el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    if (document.getSelection().rangeCount > 0) {
        selected = document.getSelection().getRangeAt(0)
    }
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
};


    async function refreshMarkets(){
    var l = await rpc.apost(["markets"], get_ip(), parseInt("8090"));
    console.log(l);

    }