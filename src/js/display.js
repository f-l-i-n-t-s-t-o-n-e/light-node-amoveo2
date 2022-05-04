

function stablecoin_UI() {

  document.getElementById("account_settings").style.display = "unset";
  document.getElementById("div1").style.display = "unset";
  document.getElementById("div4").style.display = "unset";
  document.getElementById("channel_title111").style.display = "unset";
  document.getElementById("div9").style.display = "unset";
  document.getElementById("div7").style.display = "unset";

  document.getElementById("account_settings").style.display = "initial";
  document.getElementById("div1").style.display = "initial";
  document.getElementById("div4").style.display = "initial";
  document.getElementById("channel_title111").style.display = "initial";
  document.getElementById("div9").style.display = "initial";
  document.getElementById("div7").style.display = "initial";

  document.getElementById("account_settings").style.display = "none";
  document.getElementById("div1").style.display = "none";
  document.getElementById("div4").style.display = "none";
  document.getElementById("div9").style.display = "none";
 document.getElementById("channel_title111").style.display = "none";

};


function channel_settings_UI() {
  document.getElementById("account_settings").style.display = "unset";
  document.getElementById("div1").style.display = "unset";
  document.getElementById("div4").style.display = "unset";
  document.getElementById("channel_title111").style.display = "unset";
  document.getElementById("div9").style.display = "unset";
  document.getElementById("div7").style.display = "unset";

  document.getElementById("account_settings").style.display = "initial";
  document.getElementById("div1").style.display = "initial";
  document.getElementById("div4").style.display = "initial";
  document.getElementById("channel_title111").style.display = "initial";
  document.getElementById("div9").style.display = "initial";
  document.getElementById("div7").style.display = "initial";


    document.getElementById("account_settings").style.display = "none";
    //document.getElementById("account_settings").removeChild("br");

    //keys.js divs
    document.getElementById("div1").style.display = "none";
    document.getElementById("div4").style.display = "none";
   document.getElementById("div7").style.display = "none";



}

function account_settings_UI(){


  document.getElementById("account_settings").style.display = "";
  document.getElementById("div1").style.display = "";
  document.getElementById("div4").style.display = "";

  document.getElementById("account_settings").style.display = "unset";
  document.getElementById("div1").style.display = "unset";
  document.getElementById("div4").style.display = "unset";
  document.getElementById("channel_title111").style.display = "unset";
  document.getElementById("div9").style.display = "unset";
  document.getElementById("div7").style.display = "unset";

  document.getElementById("account_settings").style.display = "initial";
  document.getElementById("div1").style.display = "initial";
  document.getElementById("div4").style.display = "initial";
  document.getElementById("channel_title111").style.display = "initial";
  document.getElementById("div9").style.display = "initial";
  document.getElementById("div7").style.display = "initial";


  document.getElementById("channel_title111").style.display = "none";
  document.getElementById("div9").style.display = "none";
  document.getElementById("div7").style.display = "none";

  document.getElementById("account_settings").style.display = "block";
  document.getElementById("div1").style.display = "block";
  document.getElementById("div4").style.display = "block";
}
function channel_settings_UI2() {



    //stablecoin market stuff
    document.getElementById("display_title").after(document.getElementById("stablecoin_market"));
    document.getElementById("display_title").after(document.getElementById("stablecoin_market"));

    document.getElementById("stablecoin_market").style.color = "black";
    document.getElementById("stablecoin_market").style.fontSize = "18px";
    document.getElementById("stablecoin_market").appendChild(br());
    document.getElementById("stablecoin_market").appendChild(document.getElementById("tvDisplay"));


    //document.getElementById("tvDisplay").appendChild(document.createElement("br");
  //  document.getElementById("tvDisplay").appendChild(br());
    document.getElementById("tvDisplay").style.fontSize = "16px";
    document.getElementById("tvDisplay").style.fontWeight = "normal";


//document.getElementById("stablecoin_market").style.top = "100px";
//console.log("success");

}
