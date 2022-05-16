console.log = function () { };

var globalCID;
var globalB1;
var globalcreatetradenonce;


//var globalLastHeight;

var globalLPLoopBool;

var globalMemoAddress;

var expertMode_;

expertMode_ = 0;

function expertMode(){

if (expertMode_ == 0){
expertMode_ = 1;
}else{

expertMode_ = 0;

}

}

var globalBridgeBool;

var globalNetworkName1;

var globalTradeNonce;
            
var input4 = document.createElement("INPUT");

var globalCopiedBool;

var globalBlankText;
var globalNotBlankText;

//var secondTimeTrades;

var globalProviderPubkey;

var globalCoinName;


var globalLPBool;

var globalCID_;

var globalVariable;
            var fullDate;
var firstTimeBool;
var filterText;
var bigL;
var firstTimeBool2;

var globalInputBool;

    var foundCidArray = new Array;

var globalBalDB;

var zHolder;
//                hideBeforeDisplay(l, offsetNumber2, oracle_text)
var global_l;
var global_offsetNumber2;
var global_oracle_text;
var global_oracleSimplified_text;

var globalPositionData;
var acceptConfirmation = document.createElement("div");
    var xyz1 = 1;
var xyz2 = 1;    
//var offsetNumber2;

var abcd = (function() {
    var div = document.createElement("div");
    document.body.appendChild(div);

    var title2 = document.createElement("h3");
    title2.innerHTML = "Raw Contract";
//    div.appendChild(title2);
    glossary.link2(div, "accepting_channel_offer", "how to accept a trade");
    var contract_div = document.createElement("div");
    //div.appendChild(contract_div);



    var title0 = document.createElement("h3");
    title0.innerHTML = "My positions";
    div.appendChild(title0);

//    var title4 = document.createElement("h3");
//    title4.innerHTML = "Provide liquidity (under construction)";




    var title3 = document.createElement("h3");
    title3.innerHTML = "Provide liquidity across daily NBA, NHL, MLB, Premier League, LaLiga and Tennis matches";

    div.appendChild(title3);

    title3.appendChild(br());
   // title3.appendChild(br());
    var newDiv = document.createElement("p");
    newDiv.style.fontWeight = "normal";
    newDiv.innerHTML = "Max risk per bet (VEO): "
    newDiv.style.fontSize = "16px";

    var newDiv2 = document.createElement("p");
    newDiv2.style.fontWeight = "normal";
    newDiv2.innerHTML = "Oddsmaker undercut (i.e. 0.025 for 2.5%): "
    newDiv2.style.fontSize = "16px";


    title3.appendChild(newDiv);


 //   var words = text("Max loss per bet: ");
//        title3.appendChild(text("Max loss per bet: "));

    var LPinput = document.createElement("INPUT");
    LPinput.style.display = "inline";
    var text10 = text(" ");
    text10.style.display = "inline";


    newDiv.appendChild(text10);
    newDiv.appendChild(LPinput);

    var LPundercutinput = document.createElement("INPUT");
    LPundercutinput.style.display = "inline";
    LPundercutinput.value = "0.025";

//    text10.style.display = "inline";

    newDiv.appendChild(newDiv2);
    newDiv2.appendChild(text(" "));
    newDiv2.appendChild(LPundercutinput);






    var LPGoButton = button_maker2("Go", function() { return liquidityProvision(0)});
    
    var LPGoButton2 = button_maker2("Preview", function() { return liquidityProvision(1)});

    var LPGoButton3 = button_maker2("Loop", function() { return liquidityProvision(2)});

    var LPGoButton4 = button_maker2("Stop loop", function() { return turnOffAutoLP()});


    title3.appendChild(LPGoButton);
    title3.appendChild(text(" "));
    title3.appendChild(LPGoButton2);
    title3.appendChild(text(" "));
    title3.appendChild(LPGoButton3);


    title3.style.display = 'none';
    title3.appendChild(br());
    title3.appendChild(br());
    var successVar = document.createElement("div");
    title3.appendChild(successVar);

    var title4_ = document.createElement("div");
    title3.appendChild(title4_);


    // need to check if liquidityProvision should be run again against the block height



    function turnOffAutoLP() {
    
    globalLPLoopBool = 0;

    }

    async function liquidityProvision(_number){
        globalLPBool = 1;
        var maxRisk = Number(LPinput.value);  // * 100000000; lol

        if (_number == 0){
        
            successVar.innerHTML = "<font color=\"green\">Sending trades</font>";
        
        }

        if (_number == 1){

            title4_.innerHTML = "";

//            successVar.innerHTML = "<font color=\"green\">LP bot started</font>";        

        }


        if (_number == 2){

            globalLPLoopBool = 1;

            successVar.innerHTML = "<font color=\"green\">LP bot started looping</font>";
        
        }






    //    need to pull them from zacks server
    //

    console.log("odds pulling");


//159.203.14.139
//        var bettingOdds = await rpc.apost(["test", 1], "46.101.185.98", parseInt("8084"));
        var bettingOdds = await rpc.apost(["test", 1], "159.203.14.139", parseInt("8084"));


        console.log("odds are: " + JSON.stringify(bettingOdds));
        //sport
//        console.log("odds are: " + atob(bettingOdds[4]));
//        console.log("odds are: " + atob(bettingOdds[3]));
//        console.log("odds are: " + atob(bettingOdds[2]));
        //sport
//        console.log("odds are: " + atob(bettingOdds[1]));
//        console.log("odds are: " + atob(bettingOdds[6]));

//        console.log("odds are: " + atob(JSON.stringify(bettingOdds.slice(1))));

        //this array will hold every trade

        // 1 sportName & Competitor1
        // 2 sportName & Competitor2
        // 3 Date
        // 4 Odds that will be offered in the bet

        // repeat for each event
        // then it will take these, create the swap offers, then loop through the broadcast

        var sportsArray = new Array;


//        console.log(JSON.stringify(bettingOdds.slice(1).map(function(x){return(atob(x))})));


function isNumber(n){
    return Number(n)=== n;
}

var bettingOdds3;

bettingOdds3 = bettingOdds.filter(item => !( checkItem(item) ));


function checkItem(_x){

    return ((_x.length > 2) && isNumber(Number(_x)));

}

//console.log(ar) // [1, 2, 3]
        
        console.log("bettingOdds is: " + bettingOdds);
        console.log("bettingOdds is: " + bettingOdds3);

        console.log("bettingOdds is: " + bettingOdds.slice(1));
        console.log("bettingOdds is: " + bettingOdds.slice(2));
        console.log("bettingOdds is: " + bettingOdds.slice(4));
        console.log("bettingOdds is: " + (bettingOdds.slice(4).map(function(x){return(atob(x))})));

        var oddsDigest = (bettingOdds.slice(1).map(function(x){return(atob(x))}));
        console.log("oddsDigest is: " + oddsDigest);


        console.log(oddsDigest[0]);
        console.log(oddsDigest[1]);
        console.log(oddsDigest[2]);
        console.log(oddsDigest[3]);
        console.log(oddsDigest[4]);


//find first instance of a sport
    let firstSport = 0;


    eligibleSportsArray = ["ATP TENNIS", "WTA TENNIS", "MLB BASEBALL", "NHL HOCKEY", "EURO SOCCER", "NBA BASKETBALL"];


        for (let q = 0; q < oddsDigest.length; q++) {

            if (firstSport == 0){

                for (let w = 0; w < eligibleSportsArray.length; w++) {

                    if (oddsDigest[q].search(eligibleSportsArray[w]) > Number(-1)){

                    firstSport = q;

                    }
            
                }

            }

        }

        console.log(firstSport);
        console.log(JSON.stringify(oddsDigest.slice(firstSport)));





        var oddsDigest2 = (bettingOdds.slice(1+firstSport).map(function(x){return(atob(x))}));

        console.log("oddsDigest2 is: " + oddsDigest2);

        oddsDigest = oddsDigest2;

/*
    


        console.log((bettingOdds.slice(1).map(function(x){return(atob(x))}))[0]);
        console.log((bettingOdds.slice(1).map(function(x){return(atob(x))}))[1]);

        console.log((bettingOdds.slice(1).map(function(x){return(atob(x))}))[1].split(",")[0]);


        

        console.log(sportLength);

        console.log((bettingOdds.slice(1).map(function(x){return(atob(x))}))[2]);
        console.log((bettingOdds.slice(1).map(function(x){return(atob(x))}))[3]);
        console.log((bettingOdds.slice(1).map(function(x){return(atob(x))}))[6]);
        console.log((bettingOdds.slice(1).map(function(x){return(atob(x))}))[9]);
        console.log((bettingOdds.slice(1).map(function(x){return(atob(x))}))[12]);
        console.log((bettingOdds.slice(1).map(function(x){return(atob(x))}))[15]);
        console.log((bettingOdds.slice(1).map(function(x){return(atob(x))}))[18]);
        console.log((bettingOdds.slice(1).map(function(x){return(atob(x))}))[21]);
        console.log((bettingOdds.slice(1).map(function(x){return(atob(x))}))[24]);
        console.log((bettingOdds.slice(1).map(function(x){return(atob(x))}))[27]);
        console.log((bettingOdds.slice(1).map(function(x){return(atob(x))})).length);

        */
            //Friday, March 4, 2022


            var date_;
            var monthDay;
            var year;
            var month;

    for (let j = 0; j < oddsDigest.length; j++) {

        if ((j % 3) == 0){





            date_ = oddsDigest[Number(j)+Number(2)];
            console.log(date_);


            var wordDate;
        function numberFromWord(){


            console.log(date_[2]);
            monthDay = date_.split(",")[1];
            year = date_.split(",")[2];
            wordDate = monthDay + year;
            console.log("year is " + year);
            console.log("monthday split is " + monthDay.split(" ")[0]);
     //       var month;
       //     console.log(monthDay.search(" "));
            if (monthDay.split(" ")[1] == "January"){
                month = "01";
            }
        
            if (monthDay.split(" ")[1] == "February"){
                month = "02";
            }
        
            if (monthDay.split(" ")[1] == "March"){
                month = "03";
            }
        
            if (monthDay.split(" ")[1] == "April"){
                month = "04";
            }
        
            if (monthDay.split(" ")[1] == "May"){
                month = "05";
            }
        
            if (monthDay.split(" ")[1] == "June"){
                month = "06";
            }
        
            if (monthDay.split(" ")[1] == "July"){
                month = "07";
            }
        
            if (monthDay.split(" ")[1] == "August"){
                month = "08";
            }
        
            if (monthDay.split(" ")[1] == "September"){
                month = "09";
            }
        
            if (monthDay.split(" ")[1] == "October"){
                month = "10";
            }
        
            if (monthDay.split(" ")[1] == "November"){
                month = "11";
            }
        
            if (monthDay.split(" ")[1] == "December"){
                month = "12";
            }

            var day = monthDay.split(" ")[2];

            if (day < 10){
                day = "0" + day;
            }

            var year = year.substring(1, 5);
            console.log("year: " + year);

            fullDate = month + "/" + day + "/" + year;

            console.log("fulldate is " + fullDate);
            console.log("wordDate is " + wordDate);


        }

        numberFromWord();
        wordDate = wordDate.substring(1, wordDate.length - 1);
        var sportDigest = oddsDigest[Number(j)+Number(1)].split(",");

        var sportLength = oddsDigest[Number(j)+Number(1)].split(",").length;

        var sport = oddsDigest[j];

   //         var date_2 = oddsDigest[2];
        console.log("sport is: " + sport);



        var odds1;
        var odds2;

        var networkBool = 0;
        var MLBbool = 0;

        var comp1;
        var comp2;

            for (let i = 0; i < sportLength; i++) {

                //sport-specific modification

                if (sport == "ATP TENNIS") {
                    sport = "ATP Tennis";
                }

                if (sport == "WTA TENNIS") {
                    sport = "WTA Tennis";
                }                                     

                if (sport == "MLB BASEBALL") {
                    sport = "MLB Baseball";
                    networkBool = 1;
                    MLBbool = 1;
                    }

                if (sport == "NHL HOCKEY") {
                    sport = "NHL Hockey";
                    networkBool = 1;
                    }

                if (sport == "NBA BASKETBALL") {
                    sport = "NBA Basketball";
                    networkBool = 1;
                    }

                if (sport == "LALIGA SOCCER") {
                    sport = "LaLiga";
                    networkBool = 1;
                    }

         //       PREM SOCCER
                
                if (sport == "PREM SOCCER") {
                    sport = "Premier League";
                    networkBool = 1;
                    }                    



                //figure out if the entry is a time or not
                //am or pm with a ":"


 //                sportDigest = (JSON.stringify(sportDigest).replace(";", ",")).split(",");
 //               console.log("sportDigest is xxx : " + sportDigest);
 //               console.log("sportDigest is xxx : " + sportDigest[0]);

 //               console.log((sportDigest.toString()).replace(/["]/g, ""));

 //               sportDigest = (sportDigest.toString()).replace(/["]/g, "").split(",");

                console.log(sportDigest[0]);

                if ( ((sportDigest[i].search(":") >= 0) && (sportDigest[i].search("a") >= 0)) || ((sportDigest[i].search(":") >= 0) && (sportDigest[i].search("p") >= 0)) ){


                    // 1 sportName & Competitor1
                    // 2 sportName & Competitor2
                    // 3 Date
                    // 4 Odds that will be offered in the bet

                    // we need to find the right odds index though
                    //it should start within 6 or 7 from the time

                    var oddsIndex;

                    console.log(JSON.stringify(sportDigest));
                    console.log(sportDigest[3]);
                    console.log(i);


                    let stopVar = 0;
                    
                    for (let q = 1; q < Number(10) ; q++) {
                    
                        if ((sportDigest.length - i) > Number(9)){

                        if (((sportDigest[Number(i)+Number(q)][1] == "+") || (sportDigest[Number(i)+Number(q)][1] == "-")) && (stopVar == 0)) {
                            oddsIndex = q;
                            stopVar = 1;
                            console.log("stopvar 1");

                        }

                    }else{
                        oddsIndex = 0;
                    }
                    

                    }

                    console.log("oddsindex is " + oddsIndex);


                        sportsArray.push(sport);

                        if (MLBbool == 1){
                            comp1 = sportDigest[Number(i)+Number(1)].split("-")[0].substring(0, sportDigest[Number(i)+Number(1)].split("-")[0].length - 1);
                            comp2 = sportDigest[Number(i)+Number(2)].split("-")[0].substring(0, sportDigest[Number(i)+Number(2)].split("-")[0].length - 1);

                            sportsArray.push(comp1);
                            sportsArray.push(comp2);

                        }else{

                        sportsArray.push(sportDigest[Number(i)+Number(1)]);
                        sportsArray.push(sportDigest[Number(i)+Number(2)]);

                        }

                        sportsArray.push(wordDate);

//                        if (networkBool == 1){
                        if (1 == 1){



//                        odds1 = sportDigest[Number(i)+Number(4)].substring(1,sportDigest[Number(i)+Number(4)].length);
                        odds1 = sportDigest[Number(i)+Number(oddsIndex)].substring(1,sportDigest[Number(i)+Number(oddsIndex)].length);


                        }else{

                        odds1 = sportDigest[Number(i)+Number(oddsIndex)].substring(1,sportDigest[Number(i)+Number(oddsIndex)].length);

//                        odds1 = sportDigest[Number(i)+Number(3)].substring(1,sportDigest[Number(i)+Number(3)].length);

                        }

                        //fix odds1 if there is a time and ; in there

                        if (odds1.search(";") > Number(-1)){
                            odds1 = odds1.split(";")[0];
                        }


                        sportsArray.push(odds1);
                        var _time;
                        if(sportDigest[Number(i)+Number(0)].search(";") > Number(-1)) {

                            _time = sportDigest[Number(i)+Number(0)].split(";")[1];
                        
                        }else{
                            _time = sportDigest[Number(i)+Number(0)];
                        }
                        
                        console.log("time is: " + _time);
 
             //           console.log("time is: " + sportDigest[Number(i)+Number(0)]);
              //          console.log("time is: " + _time);



                        sportsArray.push(_time);

                    // 1 sportName & Competitor2
                    // 2 sportName & Competitor1
                    // 3 Date
                    // 4 Odds that will be offered in the bet. odds that 2 defeats 1
                        sportsArray.push(sport);

                        if (MLBbool == 1){

                            sportsArray.push(comp2);
                            sportsArray.push(comp1);

                        }else{

                        sportsArray.push(sportDigest[Number(i)+Number(2)]);
                        sportsArray.push(sportDigest[Number(i)+Number(1)]);
                        
                        }

                        sportsArray.push(wordDate);

                        if (1 == 1){

       //                 odds2 = sportDigest[Number(i)+Number(5)].substring(1,sportDigest[Number(i)+Number(5)].length);

                        console.log(JSON.stringify(sportDigest));

            //            console.log(JSON.stringify(sportDigest[131]));
          //              console.log(sportDigest[132].length);

   //                     console.log(JSON.stringify(sportDigest[132]).length);

                        console.log(sportDigest.length);
                        console.log("i is: " + i);
                        console.log("oddsindex is: " + oddsIndex);



                        odds2 = sportDigest[Number(i)+Number(oddsIndex)+Number(1)].substring(1,sportDigest[Number(i)+Number(oddsIndex)+Number(1)].length);




                        }else{

//                        odds2 = sportDigest[Number(i)+Number(4)].substring(1,sportDigest[Number(i)+Number(4)].length);



                        odds2 = sportDigest[Number(i)+Number(oddsIndex)+Number(1)].substring(1,sportDigest[Number(i)+Number(oddsIndex)+Number(1)].length);


                        }

                        if (odds2.search(";") > Number(-1)){
                            odds2 = odds2.split(";")[0];
                        }                        

                        sportsArray.push(odds2);
                        sportsArray.push(_time)


                //        sportsArray.push(sportDigest[Number(i)+Number(3)]);
                
                }        
            
            }



//end of bigger if statement
}
//end of bigger for loop
} 




//now that sportsArray works, we can start betting

//create oracle text
    console.log(sportsArray.length);
    console.log("sportsarray is: " + JSON.stringify(sportsArray));

            for (let i = 0; i < sportsArray.length; i++) {

                if ((i % 6) == 0){
                    
                    let _sport = JSON.stringify(sportsArray).split(",")[Number(0)+Number(i)].toString();
                    _sport = _sport.replace(/"/g, "");
                    _sport = _sport.replace("[", "");

                    let _comp1 = JSON.stringify(sportsArray).split(",")[Number(1)+Number(i)].toString();
                    _comp1 = _comp1.replace(/"/g, "");
                    _comp1 = _comp1.substring(1, _comp1.length);

                    let _comp2 = JSON.stringify(sportsArray).split(",")[Number(2)+Number(i)].toString();
                    _comp2 = _comp2.replace(/"/g, "");

                    let _day = JSON.stringify(sportsArray).split(",")[Number(3)+Number(i)].toString();
                    _day = _day.replace(/"/g, "");

                    let _odds = JSON.stringify(sportsArray).split(",")[Number(4)+Number(i)].toString();
                    _odds = _odds.replace(/"/g, "");
                    _odds = _odds.replace(" ", "");

                    let _oracle = _comp1 + " will defeat" + _comp2 + " in the " + _sport + " competition starting on " + _day + " (Eastern time) ";

                    console.log("compxxx: " + (_comp1 == ""));
                    console.log("compxxx: " + _comp1);

                    console.log("compxxx: " + _comp2);

                    let skip2 = 0;

                    if ( (_comp1 == "") || (_comp2 == "") ) {
                        skip2 = 1;
                    }

                    let _day2 = _day;
          //          console.log("xxxx oracle is: " + _oracle);

                    //now that we have oracle, we can create the bet
                    //need to calculate amounts using the odds

                    let maxRisk = LPinput.value;

                    var profit_;

                    //now we need the odds to tell us how much they bet
            //        console.log("odds is: " + _odds[0]);

                //LPundercutinput

                // we need to modify the odds when there is undercutting
                // vigorish can be pretty complicated but for now we will keep it simple and add the undercut to + and take it from -

                    let odds2 = _odds;

                    if (_odds[0] == "+"){

                    console.log("odds undercut: " + _odds);

                        _odds = _odds.substring(1, _odds.length);
           //         console.log("odds substring is: " + _odds);

                        let undercut_ = LPundercutinput.value;

                            if (undercut_[0] == "."){
                                undercut_ = "0" + undercut_.toString();
                            }                    

                            if (Number(undercut_) > Number(0)) {
                                _odds = Number(_odds)*(Number(1) + Number(undercut_));
                            }
                    
                    console.log("odds undercut: " + _odds);   
                    
                    let convertedPlus1 = Number(100) / (Number(_odds) + Number(100));
           //         console.log("convertedPlus1 is: " + convertedPlus1);
           //         console.log("maxRisk is: " + maxRisk);

                    profit_ = maxRisk * (Number(100) / Number(_odds));
          //          console.log("plus profit is: " + profit_);

                    }

                    if (_odds[0] == "-"){
                    
                    console.log("odds undercut: " + _odds);        
                    
                    _odds = _odds.substring(1, _odds.length);



                        let undercut_ = LPundercutinput.value;

                            if (undercut_[0] == "."){
                                undercut_ = "0" + undercut_.toString();
                            }                    

                            if (Number(undercut_) > Number(0)) {
                                _odds = Number(_odds)*(Number(1) - Number(undercut_));
                            }

                    console.log("odds undercut: " + _odds);        

                    let convertedMinus1 = Number(_odds) / (Number(_odds) + Number(100));

                    profit_ = maxRisk * (Number(convertedMinus1) / (Number(1) - Number(convertedMinus1)));
          //          console.log("minus profit is: " + profit_);
                    }

                    let _skip = 0;

                    if( (odds2[0] != "-") && (odds2[0] != "+") ){
                        _skip = 1;
                    }

                    //search competitors for + or - and numbers

                    let comp1Holder = (_comp1.replace("+","")).replace("-","")
                    let comp2Holder = (_comp2.replace("+","")).replace("-","")

                    comp1Holder = comp1Holder.replace(" ", "");
                    comp2Holder = comp2Holder.replace(" ", "");


                    if( comp1Holder > 0 ){
                        _skip = 1;

                    }

                    if( comp2Holder > 0 ){
                        _skip = 1;
                    }


                    console.log(_oracle, maxRisk, profit_);


                    if (0 == 0){

                    //we need to choose which sports we want to do
                    //whitelist:
                    // ATP Tennis
                    // WTA Tennis
                    // MLB Baseball
                    // NHL Hockey
                    // NBA Basketball

                    //blacklist:
                    // PREM SOCCER
                    // LALIGA SOCCER
                    // USA SOCCER

                    if ( (_sport == "ATP Tennis") || (_sport == "WTA Tennis") || (_sport == "MLB Baseball") || (_sport == "NHL Hockey") || (_sport == "NBA Basketball") || (_sport == "Premier League") || (_sport == "LaLiga") ) {

                    // also need to check if the time is OK
                    let timeCheck = JSON.stringify(sportsArray).split(",")[Number(5)+Number(i)].toString();

                    let currentTimeEastern = new Date().getTime();
                    console.log(currentTimeEastern);

                    //we need to convert the date from the website to unix now
                    //

                    console.log(fullDate.substring(0,2));

                    let _mth = fullDate.substring(0,2);
                    let _yr = fullDate.substring(6,10);
                    let _day = fullDate.substring(3,5);

                    if (_mth[0] == 0){
                        _mth = _mth.substring(1,2);
                    }

                    if (_day[0] == 0){
                        _day = _day.substring(1,2);
                    }


                    console.log(_mth);
                    console.log(_day);


                    var mydate = new Date();
                    mydate.setFullYear(_yr);
                    mydate.setMonth(_mth - 1);
                    mydate.setDate(_day);
                   
               //     Date.parse()

                    //we need to get these from the sportsArray
                    //

                    timeCheck = timeCheck.replace("]","");
                    timeCheck = timeCheck.replace(/"/g,"");

                    if (timeCheck.search(";") > Number(-1)){
                        timeCheck = timeCheck.split(";")[1];
                    }
                    


                    timeCheck = timeCheck.replace(" ", "");

    //                console.log("timecheck is: " + timeCheck);

     //               console.log("timecheck is: " + timeCheck[timeCheck.length - 1]);


                    let pmBool = 0

                    if (timeCheck[timeCheck.length - 1] == "p"){
                    
//                        timeCheck = timeCheck.substring(0,timeCheck.length - 2);
                        
                        pmBool = 12;
                    
                    }

                        timeCheck = timeCheck.substring(0,timeCheck.length - 2);

                        console.log(timeCheck);
                        let timeCheck1 = timeCheck.split(":")[0];
                        let timeCheck2 = timeCheck.split(":")[1]; 
                        timeCheck1 = Number(timeCheck1) + Number(pmBool);

             

       //                 console.log("current time is: " + mydate);
                        mydate.setHours(timeCheck1);
                        mydate.setMinutes(timeCheck2);

    //                console.log(new Date().getTime([], { hour: '2-digit', minute: "2-digit" }));


      //                      console.log("current time is: " + mydate);
                           console.log(mydate.getTime() / 1000);
                            var offset = new Date().getTimezoneOffset();// getting offset to make time in gmt+0 zone (UTC) (for gmt+5 offset comes as -300 minutes)
                            var date = new Date();
                            date.setMinutes ( date.getMinutes() + offset);// date now in UTC time
                                        

                            var easternTimeOffset = -240; //for dayLight saving, Eastern time become 4 hours behind UTC thats why its offset is -4x60 = -240 minutes. So when Day light is not active the offset will be -300

                            date.setMinutes ( date.getMinutes() + easternTimeOffset);

                            console.log(date);
                            console.log(date.getTime() / 1000);
                            let currentTime = date.getTime() / 1000;
                            let betTime = mydate.getTime() / 1000;


           //                 console.log("timeTesting is: " + ((betTime - currentTime) / 3600));


       //                     console.log("timeTesting is: " + _oracle);


//                    console.log("DST in effect?:" + isDaylightSavingsInEffect(Date(currentTimeEastern)));


                    console.log( "timing: " + (Number( (currentTime - betTime) / 3600) ));

                    console.log("timing2: " + _sport + ": " + _comp1 + " defeats " + _comp2 + ", " + _day2 + " (ET) ");

                    if (Number( (currentTime - betTime) / 3600) > parseFloat(-1)) {

                        console.log("tradeCreatedNot");

//                                            await createTrade2(maxRisk, profit_, _oracle, 1);
                    }else{

                        let profit2 = profit_;

                        if ( (_skip == 1) || (skip2 == 1) ){


                        }else{



                        if ( (_number == 0) || (_number == 2 ) ){

                            await createTrade2(maxRisk, profit2, _oracle, 2);
                            console.log("tradeCreated" + maxRisk + " / " + profit2 + "/" + _oracle);          
                        }

                        if (_number == 1){


                                let oracle2 = _oracle;
                                console.log("oracle 2 is xxx: " + oracle2);
                                let previewVar = document.createElement("div");

                                let _oracle5 = _sport + ": " + _comp1 + " defeats " + _comp2 + ", " + _day2 + " (ET) ";

                                previewVar.innerHTML = _oracle5;

                                previewVar.style.fontWeight = 'normal';

                                previewVar.style.fontSize = "16px";

                                title4_.appendChild(previewVar);

                                previewVar.appendChild(text(" | "));

                                let previewVar2 = document.createElement("div");

                                previewVar2.style.fontWeight = 'bold';
                                previewVar2.style.display = 'inline';
                                
                                previewVar2.style.fontSize = "16px";
                                
                                previewVar2.innerHTML = odds2;
                                previewVar.appendChild(previewVar2);

                    //            title3.appendChild(br());


                        }

                        
                    

                    }

                    }

                    
                    console.log("making trade with oracle: " + _oracle);
                    console.log("tradeNumber is: " + i/6);
                    }

                    }


//    async function createTrade2(_risk, _profit, _t2, _type)
//  need to await


                }

            }



  

    //    setTimeout(eraseSuccess, 3000);

    }


    function eraseSuccess(){
            successVar.innerHTML = "";
        }

    var positionDownload = button_maker2("Download", function() { return downloadPositions()});
    var positionShow = button_maker2("Show", function() { return showPositions()});
    var positionHide = button_maker2("Hide", function() { return hidePositions()});


    positionHide.style.display = 'none';
    var positionButtonDiv = document.createElement("div");


    var positionConfirmation = document.createElement("div");

 //   title0.appendChild(positionButtonDiv);
    //div.appendChild(text("Controls: "));
       title0.appendChild(text(" ")); 
    title0.appendChild(positionShow);
    title0.appendChild(text(" "));
    title0.appendChild(positionHide);
    title0.appendChild(text(" "));

    positionConfirmation.style.fontWeight = 'normal';

    positionConfirmation.style.fontSize = "16px";

    positionConfirmation.style.display = 'inline';

    positionConfirmation.style.color = 'green';

    positionConfirmation.innerHTML = "offer posted!"

    positionConfirmation.style.display = 'none';


    title0.appendChild(positionConfirmation);


    title0.appendChild(br());

//            globalCID_ = "xcvxcvxcvx";
            var globalCIDLink = document.createElement("a");

           globalCIDLink.style.display = 'inline';
            

    var newDiv2 = document.createElement("p");
    newDiv2.style.fontWeight = "normal";
    newDiv2.innerHTML = "Sell "

    newDiv2.style.fontSize = "16px";
    title0.appendChild(newDiv2);


    newDiv2.appendChild(globalCIDLink);
  
    var newDiv2_ = document.createElement("div");
    newDiv2_.style.fontWeight = "normal";
    newDiv2_.innerHTML = " for how much VEO: "
    newDiv2_.style.fontSize = "16px";
    newDiv2_.style.display = 'inline';
    newDiv2.appendChild(newDiv2_);

 

 //   var words = text("Max loss per bet: ");
 //       title3.appendChild(text("Max loss per bet: "));

    var positionsInput = document.createElement("INPUT");
    positionsInput.style.display = "inline";
    var text11 = text(" ");
    text11.style.display = "inline";
    newDiv2.appendChild(text11);
    newDiv2.appendChild(positionsInput);

    var positionsGoButton = button_maker2("Create offer", function() { return doitConcession2(globalBalDB, positionsInput.value)});

    var positionsViewMarketButton = button_maker2("View market", function() { return loadBookmark2(globalCID_)});

    var text12 = text(" ");
    text12.style.display = "inline";
    newDiv2.appendChild(text12);
    newDiv2.appendChild(positionsGoButton);
    newDiv2.appendChild(text(" "));
    newDiv2.appendChild(positionsViewMarketButton);




   // newDiv2.style.display = 'none';
//    title0.appendChild(br());
//    title0.appendChild(br());
    var successVar2 = document.createElement("div");
    newDiv2.appendChild(successVar2);
    successVar2.style.display = 'inline';
    successVar2.innerHTML = "";

    newDiv2.style.display = 'none';



//    title0.appendChild(text(" "));
//    title0.appendChild(positionDownload);
  //  div.appendChild(text(" "));
//    div.appendChild(br());
 //   div.appendChild(br());

    var positionDiv = document.createElement("div");
    div.appendChild(positionDiv);

    var hideOddsButton = button_maker2("Hide", function() { return hideOdds2()});

    var title1 = document.createElement("h3");
    title1.innerHTML = "Odds";
    div.appendChild(title1);
    title1.appendChild(text(" "));
    title1.appendChild(hideOddsButton);
    var offers = document.createElement("div");
    
    var alternateOffers = document.createElement("div");

    offers.appendChild(alternateOffers);

    var offersLoad = document.createElement("div");
    var offersInput = document.createElement("INPUT");
    var offersButton = button_maker2("Load", function() { return offerInputLoad()});

    var offersButton2 = button_maker2("Bookmark", function() { return offerInputBookmark()});

    var offersButton4_ = button_maker2("Copy", function() { return copy_contract_button()});


    function copy_contract_button(){

        copyToClipboard(offersInput.value);
    }

    var offersButton3 = button_maker2("Testing", function() { return getBookMark()});

//    headers_object.bookmarkText;
    offersLoad.style.display = 'inline';
    offersInput.style.display = 'inline';
    offersButton.style.display = 'inline';

    offersButton2.style.display = 'none';

    offersButton4_.style.display = 'none';


    offersLoad.innerHTML = "Load offers by contract: ";


    console.log("xyzw: " + (offersInput.value == ""));


//    div.appendChild(br());
//    div.appendChild(br());

    div.appendChild(offersLoad);
    offersLoad.appendChild(offersInput);

    offersLoad.appendChild(text(" "));

    offersLoad.appendChild(offersButton);

    offersLoad.appendChild(text(" "));

    offersLoad.appendChild(offersButton2);
//    offersLoad.appendChild(offersButton3);
    offersLoad.appendChild(text(" "));
    offersLoad.appendChild(offersButton4_);
//    div.appendChild(br());
//    div.appendChild(br());

    offersLoad.appendChild(offers);
    
    var oracleDoc = document.createElement("h8");
    var t2 = document.createElement("h8");
    var t3;

    var filterbutton = button_maker2("Load", function() { return filter(1)});

    var resetfilterbutton = button_maker2("Clear", function() { return resetFilter()});
    var loadEventsbutton = button_maker2("Load events", function() { return filter()});

    resetfilterbutton.style.display = 'none';

    var title = document.createElement("h3");
    title.innerHTML = "Events";
    div.appendChild(title);

    var optionPresetButton1 = button_maker2("Crypto Options", function() { return PresetFilter("price is more than Midnight")});
    var optionPresetButton2 = button_maker2("Competition", function() { return PresetFilter("competition")});
    var optionPresetButtonBridge = button_maker2("Cross-network bridge", function() { return PresetFilter("Bridge")});

            var optionPresetButton2_ = document.createElement("INPUT");
            optionPresetButton2_.type = 'checkbox';
            optionPresetButton2_.style= "width:15px;height:15px;"
//            optionPresetButton2_.type = 'checkbox';


//var element= document.getElementsByClassName('classname');


function doSomething() {

console.log(oracle_filter.value);

if ( (oracle_filter.value != "") && (optionPresetButton2_.checked == true ) ) {  

  filter();

}

if ( (oracle_filter.value != "") && (optionPresetButton2_.checked == false ) ) {  

  filter();

}



}

// add event listener to element 
optionPresetButton2_.addEventListener("click", doSomething, false);

//            optionPresetButton2_.style.display= 'flex';
//            optionPresetButton2_.style.textAlign = 'center';


    var optionPresetButton3 = button_maker2("NBA", function() { return PresetFilter("NBA")});
    var optionPresetButton4 = button_maker2("MLB", function() { return PresetFilter("MLB")});
    var optionPresetButton5 = button_maker2("NHL", function() { return PresetFilter("NHL")});
    var optionPresetButton6 = button_maker2("LaLiga", function() { return PresetFilter("LaLiga")});
    var optionPresetButton7 = button_maker2("Premier League", function() { return PresetFilter("Premier League")});
    var optionPresetButton8 = button_maker2("Tennis", function() { return PresetFilter("Tennis")});

    var optionPresetButton9 = button_maker2("BTC $69k", function() { return PresetFilter("BTC 69000")});

    

   // var nbaPresetButton = button_maker2("NBA", function() { return PresetFilter("nba")});




  //  div.appendChild(br());
  //  div.appendChild(br());
    div.appendChild(text(" "));
    var div2 = document.createElement("div");
    div.appendChild(div2);
    var oracle_filter = document.createElement("INPUT");

    oracle_filter.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
//    event.preventDefault();
    // Trigger the button element with a click
    filter(1);
   // document.getElementById("filterbutton").click();
          }
        });
    div2.appendChild(text("Custom filter: "));
    div2.appendChild(oracle_filter);
    div2.appendChild(text(" "));
    div2.appendChild(filterbutton);
    div2.appendChild(text(" "));
    div2.appendChild(resetfilterbutton);
//    div2.appendChild(text(" "));
//    div2.appendChild(loadEventsbutton);

        div2.appendChild(text(" "));
            div2.appendChild(br());
                        div2.appendChild(br());
    div2.appendChild(text("General presets: "));

    div2.appendChild(optionPresetButton1);
    div2.appendChild(text(" "));
        div2.appendChild(optionPresetButton2);


    div2.appendChild(text(" "));
        div2.appendChild(optionPresetButtonBridge);


    div2.appendChild(text(" Today:"));

        div2.appendChild(optionPresetButton2_);


    div2.appendChild(br());
    div2.appendChild(br());

    div2.appendChild(text("Specific presets: "));

        div2.appendChild(optionPresetButton9);
    div2.appendChild(text(" "));

        div2.appendChild(optionPresetButton3);
    div2.appendChild(text(" "));
        div2.appendChild(optionPresetButton4);
    div2.appendChild(text(" "));


        div2.appendChild(optionPresetButton5);
    div2.appendChild(text(" "));

        div2.appendChild(optionPresetButton8);
    div2.appendChild(text(" "));

        div2.appendChild(optionPresetButton6);
    div2.appendChild(text(" "));
        div2.appendChild(optionPresetButton7);
  

  //  div2.appendChild(text(" "));
  //  div2.appendChild(nbaPresetButton);

    div2.appendChild(br());
    div2.appendChild(br());



    var oracles = document.createElement("div");
    div.appendChild(oracles);
    //oracles.innerHTML = "test";


//    rpc.default_explorer(["oracle_list"], function(X) {
//        console.log("oracle_list attempt:");
//        console.log(JSON.stringify(X));
//        var l = X.slice(1);
//        offers.innerHTML = "";
//        console.log("right before display_oracles(l)");
//        display_oracles(l);
//    });





function offerInputBookmark(){

    var _cid = offersInput.value;
    
    if (_cid == ''){
        console.log("cant do that sorry");
    }else{

    var oracleText = globalB1;
    
    console.log("oracleText is: " + oracleText);

    //check length of existing database

    var bnonce = window.localStorage.getItem(keys.pub() + "bookmarknonce");

    if (bnonce == null){
        bnonce = 0;
    }

    bnonce = Number(bnonce) + Number(1);

    window.localStorage.setItem("bookmarkData1," + keys.pub() + "," + bnonce, _cid);
    window.localStorage.setItem("bookmarkData2," + keys.pub() + "," + bnonce, oracleText);

    console.log("bookmark troubleshooting: " + "bookmarkData1," + keys.pub() + "," + bnonce);
    console.log("bookmark troubleshooting2: " + "bookmarkData2," + keys.pub() + "," + bnonce);



//    window.localStorage.setItem(_cid, "bookmarkData1," + keys.pub() + "," + bnonce);
//    window.localStorage.setItem(oracleText, "bookmarkData2," + keys.pub() + "," + bnonce);

    window.localStorage.setItem(keys.pub() + "bookmarknonce", bnonce);

  //  setTimeout(getBookMark(), 3000);
    getBookMark()
    }
}


function pullbm(){

    let _key1_ = "bookmarkData1," + keys.pub() + "," + 6;
    let retrieved1 = window.localStorage.getItem(_key1_);
    console.log(retrieved1);
}

function getBookMark(){

    headers_object.bookmarkText2.innerHTML = "";

    console.log("in getbookmark: " + keys.pub());


//    var _nonce = 55;
    var i;

    var bmnonce = window.localStorage.getItem(keys.pub() + "bookmarknonce");


    for (let i = 1; i < 1000; i++) {
    





    var _nonce = i;

    var _key1 = "bookmarkData1," + keys.pub() + "," + _nonce;
    var _key2 = "bookmarkData2," + keys.pub() + "," + _nonce;

    let retrieved1 = window.localStorage.getItem(_key1);
    let retrieved2 = window.localStorage.getItem(_key2);
    
    console.log("retrieved1 is: " + retrieved1);
    console.log("retrieved1 is2: " + retrieved2);

    if (retrieved1 == null){
 //       i = 1000;

        if (i == 1){
            headers_object.bookmarkText.innerHTML = "";
        }else{
            headers_object.bookmarkText.innerHTML = "Bookmarks"
        }

//        retrieved1 = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

    }

    if (retrieved2 == null){
 //       i = 1000;
//        retrieved2 = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        
    }



    if (i < 1000){

    var _div1 = document.createElement("div");
    var _div2 = document.createElement("div");
    var _div3 = document.createElement("div");
    var _div4 = document.createElement("div");


    var _div0 = document.createElement("div");
    var _divnegativeone = document.createElement("div");

    _div0 = text("Contract: ");
    _divnegativeone = text("Event: ");

//    _div1 = text(retrieved1);
    _div2 = text(retrieved2);
    _div3 = text(" | ");
    _div4 = text(" | ");

    _div2.style.fontWeight = 'normal';
    _div3.style.fontWeight = 'normal';
    _div4.style.fontWeight = 'normal';


    _div0.style.fontWeight = 'normal';
    _divnegativeone.style.fontWeight = 'normal';

    headers_object.bookmarkText2.appendChild(br());
//    headers_object.bookmarkText.appendChild(br());

//    var a = document.createElement("a");
    var divTruncate = retrieved1.slice(0,5)+     "..." + retrieved1.slice(retrieved1.length - Number (4), retrieved1.length);
//    a.innerHTML = divTruncate;


    _div1 = text(divTruncate);
    _div1.style.fontWeight = 'normal';


    console.log("retrieved1 is: " + retrieved1);
    var bookmarkbutton = button_maker2("Load market", function() { return loadBookmark(retrieved1) });

//    a.target = "_blank";
//    a.href = "http://159.89.87.58:8080/explorers/contract_explorer.html?cid=".concat(cid_);


    if (i == 1){
    

  //      headers_object.bookmarkText2.appendChild(br());
        
    }


    headers_object.bookmarkText2.appendChild(_div0);

    headers_object.bookmarkText2.appendChild(_div1);

    headers_object.bookmarkText2.appendChild(_div3);

    headers_object.bookmarkText2.appendChild(_divnegativeone);

    headers_object.bookmarkText2.appendChild(_div2);

     headers_object.bookmarkText2.appendChild(_div4);

      headers_object.bookmarkText2.appendChild(bookmarkbutton);

//    headers_object.bookmarkText.appendChild(br());

    console.log("xxx i is: " + i);

    console.log(retrieved1, retrieved2, i);


    }


}




}


//getBookMark();


async function loadBookmark(_contract){
//    hideOdds();
     myStopFunction();
    console.log("contract is: " + _contract);

//    intervalVar = 1;
    trueArray.length = 0;
    falseArray.length = 0;
    console.log("arraysare: " + JSON.stringify(trueArray));
    console.log("arraysare: " + JSON.stringify(falseArray));


    offersInput.value = _contract;
    offerInputLoad()

//    intervalVar = 1;

    true1.checked = false;
    false1.checked = false;

    hideAccountManagement();
    showTradeExplorer();

}


async function loadBookmark2(_contract){
    console.log("contract is: " + _contract);
//    hideOdds();
     myStopFunction();
//    intervalVar = 1;

    trueArray.length = 0;
    falseArray.length = 0;

    offersInput.value = _contract;
    offerInputLoad()
    true1.checked = false;
    false1.checked = false;

    hideAccountManagement();
    showTradeExplorer();

}


var displayOraclesNumber = 0;
//firstTimeBool = 1;
//xxxxxxxx


function display_oracles(l) {


      //              console.log("showing h1" + l);
      //              console.log(firstTimeBool);

            if (firstTimeBool != 1){
                                oracles.innerHTML = "";
                                firstTimeBool = 1;
                            }

            var Oracle;
            var oracle_text;
            var z;
            var t__;
                    div.appendChild(oracleDoc);
                    //oracleDoc.innerHTML = "testing";
                    if (JSON.stringify(l) == "[]") {
                            cidArray.length = 0;
                            foundCidArray.length = 0;

                        return 0;


                    } else {
//                        var h = l[0];
                        var h = l[0][1];
//                        var h = l[1];
                        

                        console.log(JSON.stringify(l[0]));
                        console.log(JSON.stringify(l[0][2]));
                        console.log(JSON.stringify(l[0][3]));

                        if (JSON.stringify(l[0][3]) == "[-6]"){
                        
                            if (JSON.stringify(l[0][2]) == "[-6]"){
                                z = "missing";

                            }else{
                                    z = atob(l[0][2][1]);
                                }

                        }else{
                        z = atob(l[0][3][1]);

                        }

                        console.log(JSON.stringify(z));

       //                 console.log(JSON.stringify(l[1][3]));



     //                   console.log("showing h12: " + h[5]);
                        //console.log("this is h");
                        //console.log(JSON.stringify(h));
       //                 console.log("here is h3: "+ h);

      //                  console.log("here is el: "+ JSON.stringify(h));

                        function oraclePull (h){
            //            var Oracle = await rpc.apost(["oracle", h[1]]);
            
var placeholder;

    if(h[3] == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
        placeholder = h[5];
    }else{
        placeholder = h[3];
    }
    var offsetNumber2;

  //  if h[]
//  console.log("placeholder is: " + JSON.stringify(l));
  //console.log("placeholder is: " + placeholder);


  //          if (displayOraclesNumber != 1){
    //        z = await rpc.apost(["read", 3, placeholder], get_ip(), parseInt("8090"));
    //        console.log("zee1 is: " + z);
            zHolder = z;
//            displayOraclesNumber = 1;
    //        }

      //      console.log("XYXY is ");

       //     console.log("zee is: " + atob(zHolder[1]));

//            Oracle = zHolder;
            oracle_text = z;
            Oracle = oracle_text;
//            console.log("placeholder is: " + oracle_text);            
//            }
          //  oraclePull(h);
//            console.log("oracle_text zee is: " + oracle_text);
//            console.log("zee is: " + zHolder);

//        await rpc.apost(["oracle", h[1]], async function(Oracle) {
                //rpc.post(["oracle", h], function(Oracle) {


         //           l = l[0];

                if(Oracle == "error") {
       //             console.log("non existant oracle.");
                } else {
       //             console.log(JSON.stringify(Oracle));
        //            console.log(atob(Oracle[1]));
        //            var oracle_text = atob(Oracle[1]);
                    //determine if it is bitcoin put or call
        //            console.log(oracle_text.search("as reported by Close price as of "));
         //           console.log(oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/"));

                    if (( (oracle_text.search("bitcoin price is more than ") == 0) || (oracle_text.search("bitcoin price is less than ") == 0)) && (oracle_text.search("as reported by Close price as of ") >= 33) && (oracle_text.search("as reported by Close price as of ") <= 35) && (oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/") >= 77) && (oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/") <= 79)) {
                        console.log("oracle text success");
                        console.log();
                            var price = oracle_text.slice(26,33);
                            console.log(price);
                            console.log("price testing");
                            console.log(price[price.length-1] == " ");
                            console.log(price[price.length]);
                            if ((price[1] == "$") && (price[0] == " ") && (price[price.length-1] == " ")){
                            console.log(price.slice(2,price.length-1));
                            console.log(price.search(" "));

                            var coinPrice = price.slice(2,price.length-1);


                            console.log("date testing");

                            console.log(oracle_text.slice(oracle_text.search("as reported by Close price as of ")+("as reported by Close price as of ").length,oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/")));
                            var dateValue = oracle_text.slice(oracle_text.search("as reported by Close price as of ")+("as reported by Close price as of ").length,oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/"));
                            
                            console.log(dateValue.slice(0,3));
                            if ((dateValue.slice(0,3) == "Jul") || (dateValue.slice(0,3) == "Aug") || (dateValue.slice(0,3) == "Sep") || (dateValue.slice(0,3) == "Oct") ){
                                    console.log("success!");
                                    console.log(oracle_text.slice(17,21));
                            var callorput;

                            if (oracle_text.slice(17,21) == "more"){

                            callorput =  "call";
                            
                            } else if (oracle_text.slice(17,21) == "less"){
                                callorput = "put";
                            }

                            t2 = text("Bitcoin ".concat(callorput)+ " option | Strike: $"+ coinPrice+" | Maturity: Midnight "+dateValue+" GMT | ");
                            t3 = "Bitcoin ".concat(callorput)+ " option | Strike: $"+ coinPrice+" | Maturity: Midnight "+dateValue+" GMT | ";
                            }
                            }
                            
                    }else{

                 //       console.log("splitting text " + oracle_text.split(";"));
          //       console.log("splitting text0 " + oracle_text.split(";")[3].substring(21, oracle_text.split(";")[3].length));
         //        console.log("splitting text1" + (oracle_text.split(";")[3].substring(21, 0) == " Z (in MM/DD/YYYY) = " ));
                      //      console.log("splitting text " + (oracle_text.split(";")[1].substring(5, oracle_text.split(";")[1].length) ));
        //                console.log("oracletextis " + oracle_text);

//        console.log(oracle_text.search("pubkey_") > 0);

//        console.log(oracle_text.search(";") > 0);

            if ( ( oracle_text.search(";") < 0 ) || ( ( oracle_text.search("pubkey_") > 0 ) && ( ( oracle_text.search(";") > 0 ) ) ) ){

                        t2 = text(oracle_text);
                          t3 = oracle_text;


                if ( ( ( oracle_text.search("pubkey_") > 0 ) && ( ( oracle_text.search(";") > 0 ) ) ) ){

                let piece1_ = 0;

//let pubkey_ = pubkey in the swap receipt associated with this trade offer; if testAddress1 has not received any of ETH on Arbitrum One from pubkey_ within 3 blocks of this swap offer getting into an Amoveo block, return TRUE, else return( (pubkey_ has received an amount of ETH on Ethereum L1 greater than or equal to the amount they sent testAddress1 on Arbitrum One no later than 0.5 hours after the Arbitrum One transaction confirms) == TRUE)

//has received an amount of ETH on Ethereum L1 greater than or equal to the amount they sent testAddress1 on Arbitrum One no later than 0.5 hours after the Arbitrum One transaction confirms) == TRUE)

                console.log("bridgeLanguage 1: " + oracle_text.split(" ")[14]);

                console.log("bridgeLanguage 2: " + oracle_text.split(" ")[25]);

                console.log("bridgeLanguage 1: " + oracle_text.split(" ")[40]);

                let providerPubkey = oracle_text.split(" ")[45];

                let piece2_ = " has not received any of ";

                let piece3_ = " on ";

                let coinName_ = oracle_text.substring(oracle_text.search(piece2_) + piece2_.length, oracle_text.search(piece3_));

                let piece4_ = " from pubkey_ within ";

                let network1_ = oracle_text.substring(oracle_text.search(piece3_) + piece3_.length, oracle_text.search(piece4_));

                let piece5_ = " greater than or equal ";

                let network2pieces = oracle_text.substring(0, oracle_text.search(piece5_)).split(" ");

                //support 

                //loop thru em

                let network2_ = " ";

                for (i = 0; i < 6; i++ ){

                    if ( network2pieces[network2pieces.length - i] == "on" ) {

                                    for (j = 1; j < i; j++ ){

                                    network2_ = network2pieces[network2pieces.length - j] + " " + network2_;

                                    }


                    }


                }


//has received an amount of ETH on Ethereum L1 greater than or equal to the amount they sent testAddress1 on Arbitrum One no later than 0.5 hours after the Arbitrum One transaction confirms) == TRUE)

                let piece6_ = " no later than ";

                let piece7_ = "  after the ";

                let timeLimit_ = oracle_text.substring(oracle_text.search(piece6_) + piece6_.length, oracle_text.search(piece7_));

                let piece8_ = 0;

                let new_oracle_text = "Bridge " + coinName_ + " from " + network1_ + " to " + network2_ + " | Provider: " + providerPubkey + " | ";

                t2 = text(new_oracle_text);

                t3 = new_oracle_text;

                }

                      }else{

         //               console.log("splitting0: " + oracle_text.split(";")[5]);
          //              console.log("splitting01: " + (" return opposite of previous output" == oracle_text.split(";")[5]));
                        
                        var offsetNumber;
                        if (" return opposite of previous output" == oracle_text.split(";")[5]){
                            offsetNumber = Number(2);
                        }else{
                            offsetNumber = Number(1);
                        }


                        if ((oracle_text.split(";")[3].substring(21, 0) == " Z (in MM/DD/YYYY) = " ) && (oracle_text.split(";")[2].substring(5, 0) == " Y = ") && (oracle_text.split(";")[1].substring(5, 0) == " X = ") && (oracle_text.split(";")[oracle_text.split(";").length - offsetNumber] == " return (price of Y is more than X as of Z as reported by W)") && (oracle_text.split(";")[0] == "W = https://www.coinmarketcap.com historical data daily close price") && (oracle_text.split(";")[4] == " return (price of Y is more than X as of Z as reported by W)")) {
         //                       console.log("splitting")
                      //        var coinName = oracle_text.split(";")[2].substring(6,3) ;
                                var coinPrice = oracle_text.split(";")[1].substring(5, oracle_text.split(";")[1].length);
                                var coinName = oracle_text.split(";")[2].substring(5, oracle_text.split(";")[2].length);
                                var coinMaturity = oracle_text.split(";")[3].substring(21, oracle_text.split(";")[3].length);
                                offsetNumber2 = 1;
 
                                var d1 = new Date(coinMaturity);
                                var n1 = d1.toString();

                                n1 = n1.substring(16,4);

            //                                                  console.log("here is d1: " + n1[Number(n1.length) - Number(1)]);
            //                    console.log("here is d1 2" + n1);  
                                if (n1[n1.length -1] == " "){
                                    n1 = n1.substring(n1.length -1, 0);
                                }
         //                       console.log("this is a date format" + n1);
//flipping for perspective of user
                                if (offsetNumber == Number(1)){
                                t2 = text(coinName + " price is more than "+ coinPrice + " at Midnight " + n1 + " GMT ");
                    //            t__ = t2;
                                }

                                if (offsetNumber == Number(2)){
                                t2 = text(coinName + " price is not more than "+ coinPrice + " at Midnight " + n1 + " GMT ");
                    //            t__ = t2;
                                }



                                t3 =  "The price of " + coinName + " is more than "+ coinPrice + " at Midnight " + n1 + "GMT "; // Jul 15 2020 GMT; 
                                    
                        }else{
              //                  console.log("1maturity is" + (oracle_text.split(";")[0].substring(5, 0) == " W = "));
             //                   console.log("1maturiy is" + oracle_text.split(";")[0].substring(5, 0));

              //                  console.log("1maturiy is" + " Z (in MM/DD/YYYY) = ");

   //                     console.log("splitting1: " + oracle_text.split(";")[5]);
   //                     console.log("splitting11: " + (" return opposite of previous output" == oracle_text.split(";")[5]));
   //                     console.log("splitting11 offsetNumber is " + offsetNumber);
   //                     console.log("splitting111 is" + (oracle_text.split(";")[oracle_text.split(";").length - offsetNumber] == " return (Team W defeated Team X in the game that started on date Z (in local time))")  );
   //                     console.log("splitting1111 is" + (oracle_text.split(";")[oracle_text.split(";").length - offsetNumber]));

   //                     console.log("splitting14 is" + ( (oracle_text.split(";")[3].substring(21, 0) == " Z (in MM/DD/YYYY) = " ) && (oracle_text.split(";")[2].substring(5, 0) == " Y = ") && (oracle_text.split(";")[0].substring(4, 0) == "W = ") && (oracle_text.split(";")[1].substring(5, 0) == " X = ") ));


                            if ((oracle_text.split(";")[3].substring(21, 0) == " Z (in MM/DD/YYYY) = " ) && (oracle_text.split(";")[2].substring(5, 0) == " Y = ") && (oracle_text.split(";")[0].substring(4, 0) == "W = ") && (oracle_text.split(";")[1].substring(5, 0) == " X = ") && (oracle_text.split(";")[oracle_text.split(";").length - offsetNumber] == " return (Competitor W defeated Competitor X in the competition that started on date Z (in local time))") && (oracle_text.split(";")[4] == " return (Competitor W defeated Competitor X in the competition that started on date Z (in local time))")) {

      //                  console.log("splitting2: " + oracle_text.split(";")[5]);
      //                  console.log("splitting22: " + (" return opposite of previous output" == oracle_text.split(";")[5]));

                                offsetNumber2 = 1;
                                var team1 = oracle_text.split(";")[0].substring(4, oracle_text.split(";")[0].length);
                                var team2 = oracle_text.split(";")[1].substring(5, oracle_text.split(";")[1].length);
                                var coinMaturity = oracle_text.split(";")[3].substring(22, oracle_text.split(";")[3].length);


                                var d1 = new Date(coinMaturity);
                                var n1 = d1.toString();

                                n1 = n1.substring(16,4);

               //                                               console.log("here is d1: " + n1[Number(n1.length) - Number(1)]);
                //                console.log("here is d1 2" + n1);  
                                if (n1[n1.length -1] == " "){
                                    n1 = n1.substring(n1.length -1, 0);
                                }
             //                   console.log("this is a date format" + n1);


//flipping this so it's from the perspective of the user
                                if (offsetNumber == Number(1)) {
                                t2 = text(team1 + " will defeat " + team2 + " in the competition starting on " + n1 + " (local time) ");
                                t__ = t2;
                                }
//was coinMaturity
                                if (offsetNumber == Number(2)) {
                                t2 = text(team1 + " will not defeat " + team2 + " in the competition starting on " + n1 + " (local time) ");
                                t__ = t2;
                                }


                             //   }
                                t3 =  team1 + " will defeat " + team2 + " in the competition starting on " + coinMaturity + " (local time) ";



                            }else{




                        t2 = text(oracle_text);
                          t3 = oracle_text;   
                                }



                                            }

//                                offsetNumber2 = 0;

                                                        }
                        
}
                    

        //            console.log("xxxy this is t" + t2.outerHTML);
        //            console.log(t2);
         //           console.log((t3.split(" ")));
       //                                     console.log((t3.split(" "))[0]);
      //              console.log(t2[0]);


       //             console.log("xyzxyz button2: " + l[0]);

       //             console.log("xyzxyz button: " + l[0][5]);
                    
        //            console.log("xxyx first t2 is: " + oracle_text);

                    var temp_t2 = t2.outerHTML;

                    let cidHolder = placeholder;



          //          console.log("xyzxyz button3: " + cidHolder);



                    //return loadBookmark(_contract)

    //                var button = button_maker2("See Odds", function() { return hideBeforeDisplay(l, offsetNumber2, oracle_text, temp_t2) });


                    var button = button_maker2("See Odds", function() { return loadBookmark(cidHolder) });

                    if ( oracle_text.search("pubkey_ =") > 0 ){
                    
                    button = button_maker2("See prices", function() { return loadBookmark(cidHolder) });

                    }


                    //adding some space
   //                 console.log("firstTimeBool: " + firstTimeBool);
   //                 console.log(filterText === undefined);
                    if (filterText === undefined){

                    oracles.appendChild(t2);
                    oracles.appendChild(text(" "));
                    oracles.appendChild(button);
                    oracles.appendChild(br());

                    
                    }else{

                        //check if strings match
           //             console.log("filter text is: " + filterText);
                        //start slicing filterText
                        var increment2;
                        increment2 = 0;
                        var increment;
                        ;
                        var lengthSplit = (filterText.split(" ")).length;
            //            console.log(lengthSplit);

                //    for (i = 0; i < cars.length; i++) {
                //    text += cars[i] + "<br>";
                //    }


                        //need to do month conversions here

                        let filterText2 = filterText;

                        if (filterText.split(" ")[Number(lengthSplit) - Number(2)] == "Jan" ) {
                        
                            filterText2 = "January " + filterText.split(" ")[Number(lengthSplit) - Number(1)];
                        
                        }

                        if (filterText.split(" ")[Number(lengthSplit) - Number(2)] == "Feb" ) {
                        
                            filterText2 = "February " + filterText.split(" ")[Number(lengthSplit) - Number(1)];
                        
                        }                        

                        if (filterText.split(" ")[Number(lengthSplit) - Number(2)] == "Mar" ) {
                        
                            filterText2 = "March " + filterText.split(" ")[Number(lengthSplit) - Number(1)];
                        
                        }

                        if (filterText.split(" ")[Number(lengthSplit) - Number(2)] == "Apr" ) {
                        
                            filterText2 = "April " + filterText.split(" ")[Number(lengthSplit) - Number(1)];
                        
                        }


                        if (filterText.split(" ")[Number(lengthSplit) - Number(2)] == "May" ) {
                        
                            filterText2 = "May " + filterText.split(" ")[Number(lengthSplit) - Number(1)];
                        
                        }

                        if (filterText.split(" ")[Number(lengthSplit) - Number(2)] == "Jun" ) {
                        
                            filterText2 = "June " + filterText.split(" ")[Number(lengthSplit) - Number(1)];
                        
                        }

                        if (filterText.split(" ")[Number(lengthSplit) - Number(2)] == "Jul" ) {
                        
                            filterText2 = "July " + filterText.split(" ")[Number(lengthSplit) - Number(1)];
                        
                        }

                        if (filterText.split(" ")[Number(lengthSplit) - Number(2)] == "Aug" ) {
                        
                            filterText2 = "August " + filterText.split(" ")[Number(lengthSplit) - Number(1)];
                        
                        }

                        if (filterText.split(" ")[Number(lengthSplit) - Number(2)] == "Sep" ) {
                        
                            filterText2 = "September " + filterText.split(" ")[Number(lengthSplit) - Number(1)];
                        
                        }

                        if (filterText.split(" ")[Number(lengthSplit) - Number(2)] == "Oct" ) {
                        
                            filterText2 = "October " + filterText.split(" ")[Number(lengthSplit) - Number(1)];
                        
                        }

                        if (filterText.split(" ")[Number(lengthSplit) - Number(2)] == "Nov" ) {
                        
                            filterText2 = "November " + filterText.split(" ")[Number(lengthSplit) - Number(1)];
                        
                        }

                        if (filterText.split(" ")[Number(lengthSplit) - Number(2)] == "Dec" ) {
                        
                            filterText2 = "December " + filterText.split(" ")[Number(lengthSplit) - Number(1)];
                        
                        }


                        for (increment = 0; increment < lengthSplit; increment++ ){;
                        
                            if (t3.search((filterText.split(" "))[increment]) < 0){

                                increment2 = increment2 + 1;

                                }

                        // also need to check the case where the last two words of the filterText are in the search, concatenated
                        
                        }

                        if (optionPresetButton2_.checked == true ) {

                            if (t3.search(filterText2) < 0){

                                increment2 = increment2 + 1;

                            }

                        }

                        //make increment2 1 as well if a cid has already been used.
//                        cidArray.toString()
    //                    console.log("indexOf check: " + cidArray.length);
     //                   console.log("indexOf check3: " + cidHolder);
     //                   console.log("indexOf check2: " + cidArray.indexOf(cidHolder));
     //                   console.log("indexOf check4")


                        /*
                        if (cidArray.indexOf(cidHolder) != "-1"){

                            if (foundCidArray.indexOf(cidHolder) != "-1"){

                                increment2  = increment2 + 1;

                            }else{

                            foundCidArray.push(cidHolder);
                            
                            }

                        }

                        */

                            if (foundCidArray.indexOf(cidHolder) == "-1") {

                                foundCidArray.push(cidHolder);

                            } else {

                                increment2  = increment2 + 1;
                            
                            }


                 //       console.log("indexOf check4: " + increment2);


                        if (increment2 < 1) {
                        oracles.appendChild(t2);
                        oracles.appendChild(button);
                        oracles.appendChild(br());
                        }

                    }

                };
               // firstTimeBool = 1;

    //        });
                display_oracles(l.slice(1));
                displayOraclesNumber = 1;
                

//                cidArray.length = 0;
//                foundCidArray.length = 0;


        };

    oraclePull(h);

    }
    

        abcd.resetfilterbutton.style.display = 'inline';
    };



//calculate what you need then execute the function
async function display_oracles2(l, _placeholder1, _placeholder2, _placeholder3) {
            
        console.log("placeholder is: " + _placeholder3);

            myStopFunction();

                    console.log("showing h1" + l);
                    console.log(firstTimeBool);

            if (firstTimeBool != 1){
                        //        oracles.innerHTML = "";
                                firstTimeBool = 1;
                            }

            var Oracle;
            var oracle_text;
            var z;
            var t__;
                    div.appendChild(oracleDoc);
                    //oracleDoc.innerHTML = "testing";
                    if (JSON.stringify(l) == "[]") {
                        return 0;
                    } else {
                        var h = l;
                        console.log("showing h12: " + h[5]);
                        //console.log("this is h");
                        //console.log(JSON.stringify(h));
                        console.log("here is h3: "+ h);

                        console.log("here is el: "+ JSON.stringify(l));

                        async function oraclePull (h, _placeholder1, _placeholder2, _placeholder3){
            //            var Oracle = await rpc.apost(["oracle", h[1]]);
            
var placeholder;

    if(_placeholder1 == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
        placeholder = _placeholder2;
    }else{
        placeholder = _placeholder1;
    }
    var offsetNumber2;

  //  if h[]

  console.log("placeholder is: " + placeholder);


  //          if (displayOraclesNumber != 1){
            z = await rpc.apost(["read", 3, placeholder], get_ip(), parseInt("8090"));
                    console.log("zee1 is: " + z);
            zHolder = z;
//            displayOraclesNumber = 1;
    //        }

    //        console.log("XYXY is ");

     //       console.log("zee is: " + atob(zHolder[1]));

            Oracle = zHolder;
            oracle_text = atob(zHolder[1]);
//            }
          //  oraclePull(h);
    //        console.log("oracle_text zee is: " + oracle_text);
    //        console.log("zee is: " + zHolder);

//        await rpc.apost(["oracle", h[1]], async function(Oracle) {
                //rpc.post(["oracle", h], function(Oracle) {
                if(Oracle == "error") {
                    console.log("non existant oracle.");
                } else {
    //                console.log(JSON.stringify(Oracle));
        //            console.log(atob(Oracle[1]));
        //            var oracle_text = atob(Oracle[1]);
                    //determine if it is bitcoin put or call
    //                console.log(oracle_text.search("as reported by Close price as of "));
    //                console.log(oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/"));

                    if (( (oracle_text.search("bitcoin price is more than ") == 0) || (oracle_text.search("bitcoin price is less than ") == 0)) && (oracle_text.search("as reported by Close price as of ") >= 33) && (oracle_text.search("as reported by Close price as of ") <= 35) && (oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/") >= 77) && (oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/") <= 79)) {
                        console.log("oracle text success");
                        console.log();
                            var price = oracle_text.slice(26,33);
                            console.log(price);
                            console.log("price testing");
                            console.log(price[price.length-1] == " ");
                            console.log(price[price.length]);
                            if ((price[1] == "$") && (price[0] == " ") && (price[price.length-1] == " ")){
                            console.log(price.slice(2,price.length-1));
                            console.log(price.search(" "));

                            var coinPrice = price.slice(2,price.length-1);


                            console.log("date testing");

                            console.log(oracle_text.slice(oracle_text.search("as reported by Close price as of ")+("as reported by Close price as of ").length,oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/")));
                            var dateValue = oracle_text.slice(oracle_text.search("as reported by Close price as of ")+("as reported by Close price as of ").length,oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/"));
                            
                            console.log(dateValue.slice(0,3));
                            if ((dateValue.slice(0,3) == "Jul") || (dateValue.slice(0,3) == "Aug") || (dateValue.slice(0,3) == "Sep") || (dateValue.slice(0,3) == "Oct") ){
                                    console.log("success!");
                                    console.log(oracle_text.slice(17,21));
                            var callorput;

                            if (oracle_text.slice(17,21) == "more"){

                            callorput =  "call";
                            
                            } else if (oracle_text.slice(17,21) == "less"){
                                callorput = "put";
                            }

                            t2 = text("Bitcoin ".concat(callorput)+ " option | Strike: $"+ coinPrice+" | Maturity: Midnight "+dateValue+" GMT | ");
                            t3 = "Bitcoin ".concat(callorput)+ " option | Strike: $"+ coinPrice+" | Maturity: Midnight "+dateValue+" GMT | ";
                            }
                            }
                            
                    }else{

                 //       console.log("splitting text " + oracle_text.split(";"));
          //       console.log("splitting text0 " + oracle_text.split(";")[3].substring(21, oracle_text.split(";")[3].length));
         //        console.log("splitting text1" + (oracle_text.split(";")[3].substring(21, 0) == " Z (in MM/DD/YYYY) = " ));
                      //      console.log("splitting text " + (oracle_text.split(";")[1].substring(5, oracle_text.split(";")[1].length) ));
                        console.log("oracletextis " + oracle_text);    
            if (oracle_text.search(";") < 0 ){

                        t2 = text(oracle_text);
                          t3 = oracle_text;  
                      }else{

                        console.log("splitting0: " + oracle_text.split(";")[5]);
                        console.log("splitting01: " + (" return opposite of previous output" == oracle_text.split(";")[5]));
                        
                        var offsetNumber;
                        if (" return opposite of previous output" == oracle_text.split(";")[5]){
                            offsetNumber = Number(2);
                        }else{
                            offsetNumber = Number(1);
                        }




                        if ( (oracle_text.search("pubkey_") < 0) && (oracle_text.split(";")[3].substring(21, 0) == " Z (in MM/DD/YYYY) = " ) && (oracle_text.split(";")[2].substring(5, 0) == " Y = ") && (oracle_text.split(";")[1].substring(5, 0) == " X = ") && (oracle_text.split(";")[oracle_text.split(";").length - offsetNumber] == " return (price of Y is more than X as of Z as reported by W)") && (oracle_text.split(";")[0] == "W = https://www.coinmarketcap.com historical data daily close price") && (oracle_text.split(";")[4] == " return (price of Y is more than X as of Z as reported by W)")) {
                                console.log("splitting")
                      //        var coinName = oracle_text.split(";")[2].substring(6,3) ;
                                var coinPrice = oracle_text.split(";")[1].substring(5, oracle_text.split(";")[1].length);
                                var coinName = oracle_text.split(";")[2].substring(5, oracle_text.split(";")[2].length);
                                var coinMaturity = oracle_text.split(";")[3].substring(21, oracle_text.split(";")[3].length);
                                offsetNumber2 = 1;
 
                                var d1 = new Date(coinMaturity);
                                var n1 = d1.toString();

                                n1 = n1.substring(16,4);

                                                              console.log("here is d1: " + n1[Number(n1.length) - Number(1)]);
                                console.log("here is d1 2" + n1);  
                                if (n1[n1.length -1] == " "){
                                    n1 = n1.substring(n1.length -1, 0);
                                }
                                console.log("this is a date format" + n1);
//flipping for perspective of user
                                if (offsetNumber == Number(1)){
                                t2 = text(coinName + " price is more than "+ coinPrice + " at Midnight " + n1 + " GMT ");
                    //            t__ = t2;
                                }

                                if (offsetNumber == Number(2)){
                                t2 = text(coinName + " price is not more than "+ coinPrice + " at Midnight " + n1 + " GMT ");
                    //            t__ = t2;
                                }



                                t3 =  "The price of " + coinName + " is more than "+ coinPrice + " at Midnight " + n1 + "GMT "; // Jul 15 2020 GMT; 
                                    
                        }else{
                                console.log("1maturity is" + (oracle_text.split(";")[0].substring(5, 0) == " W = "));
                                console.log("1maturiy is" + oracle_text.split(";")[0].substring(5, 0));

                                console.log("1maturiy is" + " Z (in MM/DD/YYYY) = ");

//                        console.log("splitting1: " + oracle_text.split(";")[5]);
//                        console.log("splitting11: " + (" return opposite of previous output" == oracle_text.split(";")[5]));
//                        console.log("splitting11 offsetNumber is " + offsetNumber);
//                        console.log("splitting111 is" + (oracle_text.split(";")[oracle_text.split(";").length - offsetNumber] == " return (Team W defeated Team X in the game that started on date Z (in local time))")  );
//                        console.log("splitting1111 is" + (oracle_text.split(";")[oracle_text.split(";").length - offsetNumber]));

//                        console.log("splitting14 is" + ( (oracle_text.split(";")[3].substring(21, 0) == " Z (in MM/DD/YYYY) = " ) && (oracle_text.split(";")[2].substring(5, 0) == " Y = ") && (oracle_text.split(";")[0].substring(4, 0) == "W = ") && (oracle_text.split(";")[1].substring(5, 0) == " X = ") ));


                            if ( (oracle_text.search("pubkey_") < 0) && (oracle_text.split(";")[3].substring(21, 0) == " Z (in MM/DD/YYYY) = " ) && (oracle_text.split(";")[2].substring(5, 0) == " Y = ") && (oracle_text.split(";")[0].substring(4, 0) == "W = ") && (oracle_text.split(";")[1].substring(5, 0) == " X = ") && (oracle_text.split(";")[oracle_text.split(";").length - offsetNumber] == " return (Competitor W defeated Competitor X in the competition that started on date Z (in local time))") && (oracle_text.split(";")[4] == " return (Competitor W defeated Competitor X in the competition that started on date Z (in local time))")) {

//                        console.log("splitting2: " + oracle_text.split(";")[5]);
//                        console.log("splitting22: " + (" return opposite of previous output" == oracle_text.split(";")[5]));

                                offsetNumber2 = 1;
                                var team1 = oracle_text.split(";")[0].substring(4, oracle_text.split(";")[0].length);
                                var team2 = oracle_text.split(";")[1].substring(5, oracle_text.split(";")[1].length);
                                var coinMaturity = oracle_text.split(";")[3].substring(22, oracle_text.split(";")[3].length);


                                var d1 = new Date(coinMaturity);
                                var n1 = d1.toString();

                                n1 = n1.substring(16,4);

                                                              console.log("here is d1: " + n1[Number(n1.length) - Number(1)]);
                                console.log("here is d1 2" + n1);  
                                if (n1[n1.length -1] == " "){
                                    n1 = n1.substring(n1.length -1, 0);
                                }
                                console.log("this is a date format" + n1);


//flipping this so it's from the perspective of the user
                                if (offsetNumber == Number(1)) {
                                t2 = text(team1 + " will defeat " + team2 + " in the competition starting on " + n1 + " (local time) ");
                                t__ = t2;
                                }
//was coinMaturity
                                if (offsetNumber == Number(2)) {
                                t2 = text(team1 + " will not defeat " + team2 + " in the competition starting on " + n1 + " (local time) ");
                                t__ = t2;
                                }


                             //   }
                                t3 =  team1 + " will defeat " + team2 + " in the competition starting on " + coinMaturity + " (local time) ";



                            }else{




                        t2 = text(oracle_text);
                          t3 = oracle_text;   
                                }



                                            }

//                                offsetNumber2 = 0;

                                                        }
                        
}
                    

     //               console.log("xxxy this is t" + t2.outerHTML);
     //               console.log(t2);
     //               console.log((t3.split(" ")));
       //                                     console.log((t3.split(" "))[0]);
     //               console.log(t2[0]);
      //              console.log("xyzxyz button: " + h);
      //              console.log("xxyx first t2 is: " + oracle_text);

                    var temp_t2 = t2.outerHTML;
//                    var button = button_maker2("See Odds", function() { return hideBeforeDisplay(l, offsetNumber2, oracle_text, temp_t2) });

                    let placeholderTemp = _placeholder3;
       //             console.log("placeholder is: " + placeholderTemp);

                 return hideBeforeDisplay3(l, offsetNumber2, oracle_text, temp_t2, placeholderTemp);

     //            console.log("testing123: " + l);

                    //adding some space
     //               console.log("firstTimeBool: " + firstTimeBool);
       //             console.log(filterText === undefined);
                    if (filterText === undefined){

//                    oracles.appendChild(t2);
//                    oracles.appendChild(text(" "));
//                    oracles.appendChild(button);
//                    oracles.appendChild(br());

                    
                    }else{

                        //check if strings match
            //            console.log("filter text is: " + filterText);
                        //start slicing filterText
                        var increment2;
                        increment2 = 0;
                        var increment;
                        ;
                        var lengthSplit = (filterText.split(" ")).length;
                        console.log(lengthSplit);

                //    for (i = 0; i < cars.length; i++) {
                //    text += cars[i] + "<br>";
                //    }

                        for (increment = 0; increment < lengthSplit; increment++ ){;
                        
                        if (t3.search((filterText.split(" "))[increment]) < 0){

                            increment2 = increment2 + 1;

                        }
}
                        if (increment2 < 1) {
//                        oracles.appendChild(t2);
//                        oracles.appendChild(button);
//                        oracles.appendChild(br());
                        }

                    }

                };
               // firstTimeBool = 1;

    //        });
//                display_oracles(l.slice(1));
                displayOraclesNumber = 1;
   console.log("through");     
        

        };

    oraclePull(h, _placeholder1, _placeholder2, _placeholder3);
console.log("through");
    }
    };




    var trueArray_ = new Array;
    var falseArray_ = new Array;

    async function offerInputLoad(){

                globalBlankText = 0;
                globalNotBlankText = 0;

                holderDiv.innerHTML = "";

    trueArray.length = 0;
    falseArray.length = 0;

            myStopFunction();
        // the server stores trades based on market id which is a function of what is being traded for what in the swap offer.
        // so we cover two cases: VEO & Type 1 are being traded and VEO & Type 2 are being traded.
 
        if (offersInput.value == ''){

        }else{

        /*
        let oracles2_ = await rpc.apost(["markets", 2], get_ip(), "8090");
        console.log("xxx oraclepull: " + JSON.stringify(oracles2_[1]));
        console.log("xxx oraclepull: " + JSON.stringify(oracles2_[1][1]));
        */


        hideOdds();
        var mid1_;
        var mid2_;

        var veoCID = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
        var subCID = offersInput.value;

        mid1_ = new_market.mid(offersInput.value, veoCID, 1, 0);
        mid2_ = new_market.mid(offersInput.value, veoCID, 2, 0);
        var mid3_ = new_market.mid(veoCID, offersInput.value , 0, 2);


//        let oracles3_ = await rpc.apost(["read", mid1_], get_ip(), "8090");

//        console.log("xxx oraclepull2: " + oracles3_);

        console.log("offersInput value is: " + offersInput.value);
        console.log("mids are: " + mid1_ + " " + mid2_ + " " + mid3_);
        console.log("mids are2: " + mid1_ + " " + mid2_);




//now we need to construct l then start calling display oracles
// here is what one looks like ["market",1,"ETxn0LRZlJALWplG8YxYt0j92mQ9+PdKNBZlp/hrQ6M=","0hXzpa20rOZpJzDq8UvCvFCQkqjPjdkWRGl3cRPvO2c=",2,"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",0,0];

    var input1 = new Array;
    input1.push("market");
    input1.push(mid1_);

    input1.push(veoCID);
    input1.push(0);

    input1.push(offersInput.value);
    input1.push(1);

    input1.push(0);
    var newJSON1 = Object.assign({}, input1);

    console.log(newJSON1);

    console.log(newJSON1[5]);
    console.log(input1[5]);


// ["market",1,"pqxNEAbT+KNRmZ3GSeJcUJW1AEefv0pt+LIf2EwGWXs=","0hXzpa20rOZpJzDq8UvCvFCQkqjPjdkWRGl3cRPvO2c=",1,"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",0,0]
    await display_oracles2(JSON.stringify(newJSON1), subCID, veoCID, 1);

    var input2 = new Array;
    input2.push("market");
    input2.push(mid2_);

    input2.push(veoCID);
    input2.push(0);

    input2.push(offersInput.value);
    input2.push(2);

    input2.push(0);

    var newJSON2 = Object.assign({}, input2);

//    console.log(JSON.stringify(input2));

    await display_oracles2(JSON.stringify(newJSON2), subCID, veoCID, 2);

//    betterTrades();


    globalInputBool = 0;
       
    offersButton2.style.display = 'inline';
    offersButton4_.style.display = 'inline';
    

    globalcreatetradenonce = 0;
    
    globalLPBool = 0;

    globalTradeNonce = 0;



    }

}



    async function hideBeforeDisplay3(h, offsetNumber2_, t2_, t3_, _placeholder3){
    //    hideOdds();
        console.log("through2");
        console.log("placeholder is: " + _placeholder3);

       display_oracle_2(h, offsetNumber2_, t2_, t3_, _placeholder3);
    
    }


    async function hideBeforeDisplay2(){
        hideOdds();
        
        display_oracle(global_l, global_offsetNumber2, global_oracle_text, global_oracleSimplified_text);
    
    }


    async function hideBeforeDisplay(h, offsetNumber2_, t2_, t3_){
        hideOdds();
        


        offersInput.value = "";
    global_l = h;
    global_offsetNumber2 = offsetNumber2_;
    global_oracle_text = t2_;
    global_oracleSimplified_text = t3_;



        display_oracle(h, offsetNumber2_, t2_, t3_);
    

    }
    async function display_oracle(h, offsetNumber2_, t2_, t3_) {
    //    console.log(JSON.stringify([Buys, Sells]));
    //    var l = Buys.concat(Sells.slice(1));
    //    console.log("this is l:");
   //     console.log(l);


 //                   z = await rpc.apost(["read", 3, h[3]], get_ip(), parseInt("8090"));
 //           console.log("z is: " + atob(z[1]));
        console.log("whatsh: " + h[0]);
   //     console.log("whatsh2: " + h[4][1])
        var m = h[0];



//        var l = await rpc.apost(["markets"], get_ip(), parseInt("8090"));
//            console.log("FIRST L IS: " + JSON.stringify(l));
//            console.log("FIRST SLICE IS" + l.slice(1)[0]);
//            l = l.slice(1);
//            console.log("SECOND SLICE IS: " + l.slice(1));

  //      rpc.default_explorer(["get_offers", l], function(l2) {
 //           console.log("here are the offers   " + JSON.stringify(l2));
 //           console.log(JSON.stringify(l2));
 //           offers.innerHTML = "";
 //           bigL = l2.slice(1);
//            console.log("xyzxyz: " + l[0]);
  //          console.log("L is display oracle" + bigL);
        //    firstTimeBool2 = 0;
            return display_offers(m, offsetNumber2_, t2_, t3_);
    //        display_oracle(h.slice(1));

  //      });
    };


    async function display_oracle_2(h, offsetNumber2_, t2_, t3_, _placeholder3) {
    //    console.log(JSON.stringify([Buys, Sells]));
    //    var l = Buys.concat(Sells.slice(1));
    //    console.log("this is l:");
   //     console.log(l);


 //                   z = await rpc.apost(["read", 3, h[3]], get_ip(), parseInt("8090"));
 //           console.log("z is: " + atob(z[1]));
        console.log("whatsh: " + h[0]);

        var m = h;
//        var l = await rpc.apost(["markets"], get_ip(), parseInt("8090"));
//            console.log("FIRST L IS: " + JSON.stringify(l));
//            console.log("FIRST SLICE IS" + l.slice(1)[0]);
//            l = l.slice(1);
//            console.log("SECOND SLICE IS: " + l.slice(1));

  //      rpc.default_explorer(["get_offers", l], function(l2) {
 //           console.log("here are the offers   " + JSON.stringify(l2));
 //           console.log(JSON.stringify(l2));
 //           offers.innerHTML = "";
 //           bigL = l2.slice(1);
 //           console.log("xyzxyz: " + l[0]);
  //          console.log("L is display oracle" + bigL);
        //    firstTimeBool2 = 0;
            return display_offersLoad(m, offsetNumber2_, t2_, t3_, _placeholder3);
    //        display_oracle(h.slice(1));

  //      });
    };


//var globalPositionData;

    function display_positions2(balances_db2_){
         //   var l = window.localStorage.getItem("positionData"+keys.pub());
        if (JSON.stringify(balances_db2_) == "[]") {
            return 0;
        }else{



         console.log("RRRR display_positions2: " + Object.keys(balances_db2_)    );   




         var key1 = Object.keys(balances_db2_);
//         var x = 0

 
        var tempKey;
        var tempDiv = document.createElement('div');
        positionDiv.appendChild(tempDiv);


//        do {

//x < key1.length
//zxcv

                for(d = 0; d < key1.length; d++){
  //      let  x = d;
        var key = key1[d];

               var tempBalDB;


//         console.log("RRRR display_positions21: " + JSON.stringify(balances_db2));
//         console.log("RRRR display_positions211: " + JSON.stringify(balances_db2[1]));

//         console.log("RRRR display_positions22: " + JSON.stringify(balances_db2_[key]));

         var wat = balances_db2_[key];
         var _time2 = balances_db2_[key].time;
         var bal_ = balances_db2_[key].bal;
         var type_ = balances_db2_[key].type;
         var secondtype_ = balances_db2_[key].type;

         var cid_ = balances_db2_[key].cid;
         var oracle_ = balances_db2_[key].string;
    
         console.log("inside display_positions" + (type_ == 2));

         //basically if ur the first one to do it, dont do it
                if (type_ == Number(1)){
                    type_ = "True";
                }
                if (type_ == 2){
                    type_ = "False";
                }

        console.log("inside display_positions2: " + type_);

        //        positionDiv.appendChild(br());


    //            positionDiv.appendChild(text("Settlement:"));
    //            positionDiv.appendChild(text(" "));

//now we loop through the tempvar2 object
              //  for (let j = 0,  j < tempvar2.length, j++) {


//next find where the CID is stored 
        if (cid_ == undefined){
 //           x = x + 1;
            internalNonce = internalNonce + 1;
        }else{

                if (internalNonce != 0){
    //            positionDiv.appendChild(br());
        //        positionDiv.appendChild(br());
                }


            var a = document.createElement("a");
            var cidTruncate = cid_.slice(0,5)+ "..." + cid_.slice(cid_.length - Number (4), cid_.length);
            a.innerHTML = cidTruncate;
            a.target = "_blank";
            a.href = "http://159.89.87.58:8080/explorers/contract_explorer.html?cid=".concat(cid_);


         //       positionDiv.appendChild(ctcButton);
        //        positionDiv.appendChild(br());


                tempDiv.appendChild(text("Contract: "));
                tempDiv.appendChild(a);

                var firstThing = text(" | ");
                tempDiv.appendChild(firstThing);                

                firstThing.appendChild(text("Balance: "));
                firstThing.appendChild(text(Number(bal_ / 100000000).toPrecision(3)));

                firstThing.appendChild(text(" | "));                
                firstThing.appendChild(text("Type: "));


                firstThing.appendChild(text(type_));
                

    //            console.log("balances_db2_ data: " + JSON.stringify(balances_db2_[key]));

     //           console.log("balance db slicing: " +JSON.stringify(balances_db2_) );
      //          console.log("balance db slicing: " +JSON.stringify(balances_db2.slice(1)));



                    var json_data = balances_db2_;
                    var result1 = [];

                    for(var i in json_data)
                        result1.push([i, json_data [i]]);

//                    console.log("result1 is: " + result1);

//                    console.log(JSON.stringify(json_data[1]));




        function internalScope(){
                tempKey = key;
                globalDB = balances_db2_[key];
                console.log("Wat is: " + JSON.stringify(wat));


                testList[key] = balances_db2_[key];
                testListNonce[d] = key;


//                let bdk = balances_db2_[key];

                var bdk2 = wat;

                var testList2 = testList;
                var testListNonce2 = testListNonce;
                var x2 = d;


                var new_version = JSON.parse(JSON.stringify (bdk2));

//                var button = button_maker2("Concede", function() { doitConcession(new_version)});

                var button2 = button_maker2("Sell", function() { doitConcession3(testList2, testListNonce2, x2, new_version, cidTemp) });
                var cidTemp = cid_;
                var button3_ = button_maker2("View market", function() { loadBookmark2(cidTemp) });

                var balTemp = bal_;
                
                var typeTemp = secondtype_;

                

                var timeTemp = _time2;

                var button = button_maker2("Concede", function() { doitConcession8(timeTemp, balTemp, typeTemp, cidTemp)});


                console.log("testlist is: " + JSON.stringify(testList));

                console.log("testlist is: " + JSON.stringify(testListNonce[1]));


                button.title = "0.25% rebate for lost bets";
                button2.title = "create an offer to sell your position for VEO" + JSON.stringify(balances_db2_[key]);
                firstThing.appendChild(text(" "));                
                firstThing.appendChild(button);

                firstThing.appendChild(text(" "));                
                firstThing.appendChild(button2);

        //        firstThing.appendChild(text(" "));                
        //        firstThing.appendChild(button3_);
 
                firstThing.appendChild(br());

//                positionDiv.appendChild(text("Reward: "));
//                positionDiv.appendChild(text(Number(((Number(theirStake))/100000000).toPrecision(3))));
                
                internalNonce = internalNonce + 1;
  //              x = x + 1;

            }


            internalScope();

            }


}


//  while(x < key1.length);
                //            display_positions2(balances_db2_.slice(1));
  

                      
    }
balances_db2 = {};
}

var testList = {};
var testListNonce = {};


function testListTest(){

    testList['test'] = "123";
    testList['test2'] = "456";
    console.log(testList);

}

//testListTest();

var globalDB;

function doitConcession3(testList_, testListNonce_, x_, a_, _cid){

            var globalcidTruncate = _cid.slice(0,5)+ "..." + _cid.slice(_cid.length - Number (4), _cid.length);
            globalCIDLink.innerHTML = globalcidTruncate;
            globalCIDLink.target = "_blank";
            globalCIDLink.href = "http://159.89.87.58:8080/explorers/contract_explorer.html?cid=".concat(_cid);    

    newDiv2.style.display = 'block';
    globalBalDB = a_;
    globalCID_  = _cid;


//    console.log("doit3: " + JSON.stringify(testList_));
//    console.log("doit3: " + JSON.stringify(testListNonce_));
//    console.log("doit3: " + JSON.stringify(x_));
    console.log("doit4: " + JSON.stringify(a_));

}


function concedeDefeat(){

}

    function display_positions(l,n){
         //   var l = window.localStorage.getItem("positionData"+keys.pub());

       // var 
         var y = n;


         console.log("split positions");
         // console.log(JSON.stringify(l));


         var tempvar = "[" + l + "]";
  //      console.log("tempvar is " + (tempvar == undefined));
                 if (JSON.parse(tempvar)[n] == undefined) {
            return 0; 
        } else {


            //now check if its on chain

        var temparray = new Array();
        temparray.push(tempvar);

        // console.log("tempvar testing: " + (tempvar));
      //  console.log("tempvar  testing1: " + JSON.parse(tempvar)[15]);
        console.log("tempvar  testing2: " + atob(JSON.parse(tempvar)[n][1][23]));

                console.log("tempvar  testing2: " + JSON.parse(tempvar)[0][1][16]);
                console.log("tempvar  testing3: " + JSON.parse(tempvar)[0][1]);
     //           console.log("tempvar  testing3: " + JSON.parse(tempvar)[0][2][1][5]);
       // console.log("tempvar array testing2: " + temparray[1]);
        //100000000
         var oracleLanguage = atob(JSON.parse(tempvar)[n][1][23]);
         var myStake = JSON.parse(tempvar)[n][2][1][5];
         var theirStake = JSON.parse(tempvar)[n][2][1][4];

         var ctcButton = button_maker2("Settle early (if you won)", function() { return settleEarly() });
         //need to find CID
        var CID = JSON.parse(tempvar)[n][1][16];

        merkle.request_proof("channels", CID, function(c) {
            console.log("channel is ");
            console.log(c);
            if ((c == "empty") || (c == "fail")) {
                console.log("that channel does not exist. Maybe you haven't synced with the network, or maybe it is already closed, or maybe it never existed");
              //  display_positions(window.localStorage.getItem("positionData"+keys.pub()), y + 1);
               // internalNonce = 0;
                return 0;
            };
         console.log("inside display_positions");

         //basically if ur the first one to do it, dont do it

                if (internalNonce != 0){
                positionDiv.appendChild(br());
                positionDiv.appendChild(br());
                }

        //        positionDiv.appendChild(br());


                positionDiv.appendChild(text("Settlement:"));
                positionDiv.appendChild(text(" "));

//now we loop through the tempvar2 object
              //  for (let j = 0,  j < tempvar2.length, j++) {


//next find where the CID is stored

if (tempvar2 != "[[-6]]"){
            let i = 1;
            do {
              //  if (JSON.parse(tempvar)[n][1][16] == tempvar){
                console.log("ntext is tempvar: " +JSON.parse(tempvar)[n][1][16])
             //   console.log("i is : " + i + " while ntext is tempvar2: " + JSON.stringify(JSON.parse(tempvar2)[0][i][4][1][4]))



                if( ('"' + JSON.parse(tempvar)[n][1][16]+ '"') == JSON.stringify(JSON.parse(tempvar2)[0][i][4][1][4])) {
                var tempStorage = JSON.stringify(JSON.parse(tempvar2)[0][i]);



                positionDiv.appendChild(text(" "));
                var settleEarlyButton = button_maker2("Settle early (if you lost)", function() { return settleEarly(tempStorage)});
                positionDiv.appendChild(settleEarlyButton);

                positionDiv.appendChild(text(" "));

                }
                i=Number(i)+Number(1);

                //} while (i < ( Number(JSON.parse(tempvar2).length) + Number(2)) );
            } while (i < ( Number(JSON.parse(tempvar2)[0].length)) );

//}
}



         //       positionDiv.appendChild(ctcButton);
                positionDiv.appendChild(br());
                positionDiv.appendChild(text("Event: "));
                positionDiv.appendChild(text(oracleLanguage));
                positionDiv.appendChild(br());                

                positionDiv.appendChild(text("Risk: "));
                positionDiv.appendChild(text(Number(myStake / 100000000).toPrecision(3)));
                

 
                positionDiv.appendChild(br());

                positionDiv.appendChild(text("Reward: "));
                positionDiv.appendChild(text(Number(((Number(theirStake))/100000000).toPrecision(3))));
                
                internalNonce = internalNonce + 1;


         //       positionDiv.appendChild(br());


             //   positionDiv.appendChild(text("afsdfdf"));
  

            })   
                            display_positions(window.localStorage.getItem("positionData"+keys.pub()), y + 1);
  

                }

                      
    }

 async function display_offers(l, offsetNumber2_, t2_, t3_) {




        console.log("TESTING" + l);
     //   bigL = l;
    //    console.log("L is "+ bigL);
        console.log("displaying offers");
            var m = l[0];
            var z = await rpc.apost(["read", l[2]], get_ip(), parseInt("8090"));
            console.log("Z ORDERS 0.5 ARE: " + JSON.stringify(z[1][7]));
            console.log("Z ORDERS ARE: " + JSON.stringify(z));
            var orders = z[1][7];
            console.log("Z ORDERS 2 ARE: " + orders);
  //          console.log("Z ORDERS 2.5 ARE: " + z[1][7].slice(1));
            orders = orders.slice(1);
            console.log("Z ORDERS 3 ARE: " + JSON.stringify(orders));
            var orders2 = orders.slice(1);
            console.log("Z ORDERS 4 ARE: " + JSON.stringify(orders2));
        if (JSON.stringify(l) == "[]") {
            return 0;
        } else {
            var h = l;
   //         var t = document.createElement("div");
            var type;
//            if (h[9] == 1) {
            if (1 == 1) {
                type = "binary";
            //    price = h[3];
                return display_offers2(orders, l, type, offsetNumber2_, t2_, t3_, " or ", "");
            } 

         /*   else if (h[9] == 2) {
                var oid = h[2];
                type = "scalar"
                oracle_limit(oid, function(oracle_max) {
                    console.log("oracle_list callback");
                    console.log(oracle_max);
                    var direction = h[4];
                    if (direction == 2) {
                        price = (1023 - h[3]) * oracle_max / 1023;
                    } else if (direction == 1) {
                        price = h[3] * oracle_max / 1023;
                    } else {
                        console.log("fail");
                        return 0
                    };
                    return display_offers2(l, h, t, type, price, " veo/stablecoin or ", " stablecoin/veo;");
                });
            }  */

             else {
                console.log(h[9]);
                console.log("contract type not supported.");
            }
        }
    };

 async function display_offersLoad(l, offsetNumber2_, t2_, t3_, _placeholder3) {


        console.log("placeholder is: " + _placeholder3);

 
        console.log("TESTING" + l);
     //   bigL = l;
    //    console.log("L is "+ bigL);
        console.log("displaying offers" + JSON.parse(l)[1]);
        l = JSON.parse(l);
            var m = l;
            var z = await rpc.apost(["read", l[1]], get_ip(), parseInt("8090"));
//            console.log("Z ORDERS 0.5 ARE: " + JSON.stringify(z[1][7]));
      //      console.log("Z ORDERS ARE: " + JSON.stringify(z));
            var orders = z[1][7];
  //          console.log("Z ORDERS 2 ARE: " + orders);
  //          console.log("Z ORDERS 2.5 ARE: " + z[1][7].slice(1));
            orders = orders.slice(1);
   //         console.log("Z ORDERS 3 ARE: " + JSON.stringify(orders));
            var orders2 = orders.slice(1);
   //         console.log("Z ORDERS 4 ARE: " + JSON.stringify(orders2));
        if (JSON.stringify(l) == "[]") {
            return 0;
        } else {
            var h = l;
   //         var t = document.createElement("div");
            var type;
//            if (h[9] == 1) {
            if (1 == 1) {
                type = "binary";
            //    price = h[3];
                return display_offers2Load(orders, l, type, offsetNumber2_, t2_, t3_, " or ", "", _placeholder3);
            }

         /*   else if (h[9] == 2) {
                var oid = h[2];
                type = "scalar"
                oracle_limit(oid, function(oracle_max) {
                    console.log("oracle_list callback");
                    console.log(oracle_max);
                    var direction = h[4];
                    if (direction == 2) {
                        price = (1023 - h[3]) * oracle_max / 1023;
                    } else if (direction == 1) {
                        price = h[3] * oracle_max / 1023;
                    } else {
                        console.log("fail");
                        return 0
                    };
                    return display_offers2(l, h, t, type, price, " veo/stablecoin or ", " stablecoin/veo;");
                });
            }  */

             else {
   //             console.log(h[9]);
   //             console.log("contract type not supported.");
            }
        }
    };


            var true1 = document.createElement("INPUT");
            true1.type = 'checkbox';
            true1.style="width:15px;height:15px;"
         //   above.vertical-align = 'bottom';
            var false1 = document.createElement("INPUT");
            false1.type = 'checkbox';
            false1.style="width:15px;height:15px;"

        var trueArray = new Array();
        var falseArray = new Array();

                var xyz_;

                var firstTimeTrades = 0;
                var secondTimeTrades = 0;

            var firstLine = document.createElement("div");
            var firstLine2 = document.createElement("div");

            var holderDiv = document.createElement("div");


                let copyText = document.createElement("div");
                copyText.style.display = 'none';
                let blankText = document.createElement("div");


                let bridgingDiv = document.createElement("div");

                let bridgingDiv_ = document.createElement("div");


                let bridgingDiv2 = document.createElement("div");

                let bridgeCustomerSentField = document.createElement("div");
                let bridgeCustomerSentButton = button_maker2("Go", function() { continueBridge() });

                let bridgeCustomerNoSentField = document.createElement("div");
                let bridgeCustomerNoSentButton = button_maker2("Go", function() { continueBridge() });

                let bridgeProviderSentField = document.createElement("div");
                let bridgeProviderSentButton = button_maker2("Go", function() { continueBridge() });

                let bridgeProviderNoSentField = document.createElement("div");
                let bridgeProviderNoSentButton = button_maker2("Go", function() { continueBridge() });




    function continueBridge(){
        bridgingDiv.style.display = 'none';

    bridgingDiv_.style.display = 'inline';
//    holderDiv.style.display = 'none';
    bridgingDiv_.innerHTML = "";


    offers.appendChild(bridgingDiv_);

    bridgingDiv_.appendChild(br());
//    bridgingDiv.style.textIndent = "50px";

    bridgingDiv_.appendChild(bridgingDiv2);

    bridgingDiv2.innerHTML = "Bridge in progress. Follow instructions to get your security deposit back."

    bridgingDiv2.style.fontSize = "20px";

 //   bridgingDiv.appendChild(br());
//    bridgingDiv.appendChild(br());

    bridgingDiv_.appendChild(br());
    bridgeProviderSentField.innerHTML = "Once " + globalProviderPubkey + " has sent you your coins hit this button: ";

    bridgingDiv_.appendChild(bridgeProviderSentField);
    bridgeProviderSentField.style.display = 'inline';
    bridgeProviderSentField.style.textIndent = "50px";



    bridgingDiv_.appendChild(text(" "));
    bridgeProviderSentButton.style.display = 'inline';
    bridgingDiv_.appendChild(bridgeProviderSentButton);

    bridgingDiv_.appendChild(br());
    bridgingDiv_.appendChild(br());

    bridgingDiv_.appendChild(bridgeProviderNoSentField);
    bridgeProviderNoSentField.style.display = 'inline';

    bridgeProviderNoSentField.style.textIndent = "50px";

    bridgeProviderNoSentField.innerHTML = "If " + globalProviderPubkey + " failed to send you coins within 30 minutes of you sending them coins hit this button: ";

    bridgingDiv_.appendChild(text(" "));
    bridgeProviderNoSentButton.style.display = 'inline';

    bridgingDiv_.appendChild(bridgeProviderNoSentButton);

    }


    function beginBridge(){

    holderDiv.style.display = 'none';

    bridgingDiv.style.display = 'inline';
    bridgingDiv.innerHTML = "";
    

    offers.appendChild(bridgingDiv);

    bridgingDiv.appendChild(br());
//    bridgingDiv.style.textIndent = "50px";

    bridgingDiv.appendChild(bridgingDiv2);

    bridgingDiv2.innerHTML = "Bridge in progress. Follow the instructions below."

    bridgingDiv2.style.fontSize = "20px";

 //   bridgingDiv.appendChild(br());
//    bridgingDiv.appendChild(br());

    bridgingDiv.appendChild(br());
    bridgeCustomerSentField.innerHTML = "Once you send your coins to " + globalProviderPubkey + " hit this button: ";

    bridgingDiv.appendChild(bridgeCustomerSentField);
    bridgeCustomerSentField.style.display = 'inline';
    bridgeCustomerSentField.style.textIndent = "50px";



    bridgingDiv.appendChild(text(" "));
    bridgeCustomerSentButton.style.display = 'inline';
    bridgingDiv.appendChild(bridgeCustomerSentButton);

    bridgingDiv.appendChild(br());
    bridgingDiv.appendChild(br());

    bridgingDiv.appendChild(bridgeCustomerNoSentField);
    bridgeCustomerNoSentField.style.display = 'inline';

    bridgeCustomerNoSentField.style.textIndent = "50px";

    bridgeCustomerNoSentField.innerHTML = "If you failed to send your coins to " + globalProviderPubkey + " in time hit this button: ";

    bridgingDiv.appendChild(text(" "));
    bridgeCustomerNoSentButton.style.display = 'inline';

    bridgingDiv.appendChild(bridgeCustomerNoSentButton);





//    bridgingDiv.innerHTML = "asdasdfsdf";


    }


    function betterTrades(){
//        holderDiv.innerHTML = "";

  //      console.log("betterTradesCount");
   //     console.log("globalTradeNonce is: " + globalTradeNonce);
     //       console.log(JSON.stringify(trueArray));

      //      console.log(JSON.stringify(falseArray));


//        if (globalTradeNonce != 1){


    bridgingDiv.style.display = 'none';

    bridgingDiv_.style.display = 'none';


   holderDiv.style.display = 'block';
        offers.appendChild(holderDiv);
        holderDiv.innerHTML = "";

   //     console.log("firstTimeTrades is: " + firstTimeTrades);

   //     if (firstTimeTrades == 0){


            if (globalB1.search(" pubkey_ =") < 0){


            firstTimeTrades = 1;
            console.log(globalB1);

            firstLine.innerHTML = "Bet on true:";

            firstLine.style.fontSize = "20px";

            holderDiv.appendChild(firstLine);
            holderDiv.appendChild(br());
    //        secondTimeTrades = 0;
//        }
            }
                if (firstTimeTrades != 7){
        //        console.log("here we are");
     //       firstLine2.appendChild(br());

            //sort the arrays

     //       console.log(JSON.stringify(trueArray));

   //         console.log(JSON.stringify(falseArray));

            let sortedArray = trueArray.sort(([a, b], [c, d]) => c - a || b - d);

   //         console.log(JSON.stringify(sortedArray));




            let sortedArray2 = falseArray.sort(([a, b], [c, d]) => c - a || b - d);

    //        console.log(JSON.stringify(sortedArray2));

            let lengthVar = Math.max(sortedArray2.length, sortedArray.length);

    //        console.log("lengthVar is:" + lengthVar);
   //         console.log("lengthVar is:" + sortedArray.length);
   //         console.log("lengthVar is:" + sortedArray2.length);

            let trueDiv = document.createElement("div");
            let falseDiv = document.createElement("div");

//            falseArray.push([_price2, implProb, swapOffer2, _risk_, _profit_]);
            let swapOfferTrue = 0;
            let swapOfferFalse = 0;

            if (globalB1.search(" pubkey_ =") > 0) {

            }else{
                if (sortedArray.length > 0){
                for(let i = 0; i < sortedArray.length; i++){

    //                console.log("in truvdiv")

                    trueDiv.innerHTML = "Odds: " + sortedArray[i][1] + " | Risk: " + sortedArray[i][3] + " | Profit: " + sortedArray[i][4] ;

                    swapOfferTrue = sortedArray[i][2];

                    console.log(JSON.stringify(swapOfferTrue));
                    console.log(JSON.stringify(swapOfferTrue[1][3]));


                    let swapOfferTrue_ = swapOfferTrue;

                var buttonTrue = button_maker2("Accept", function() { viewTrading(swapOfferTrue_)});
                
          //      trueDiv.style.textIndent = "50px";

//                console.log("expertmodetrue is: " + expertMode_);

//                console.log("expertmodetrue is: " + sortedArray2[i][3]);

//                console.log("expertmodetrue is: " + sortedArray2[i][4]);

    console.log("xxx: " + (swapOfferTrue[1][3] == headers_object.top()[1]));
    console.log(headers_object.top()[1]);


               if ( ( ((sortedArray[i][3] < 0.01 * sortedArray[i][4]) || (sortedArray[i][3] > 100 * sortedArray[i][4])) && (expertMode_ == 1) && (globalB1.search(" pubkey_ =") < 0)) || (swapOfferTrue[1][3] == headers_object.top()[1]) ) {

                console.log("inhere")

               }else{
                holderDiv.appendChild(buttonTrue);
                        holderDiv.appendChild(text(" | "));


                holderDiv.appendChild(text(trueDiv.innerHTML));
                

                
                holderDiv.appendChild(br());


            }
                }
            }

        }


        if (sortedArray2.length == 0){

            secondTimeTrades = 1;




            firstLine2.innerHTML = "Bet on false:";

            firstLine2.style.fontSize = "20px";
//            firstLine2.style.paddingLeft = "135px";

            holderDiv.appendChild(br());
            holderDiv.appendChild(firstLine2);
            holderDiv.appendChild(br());


        }else{               
                
        for(let i = 0; i < sortedArray2.length; i++){



        if (secondTimeTrades == 0){

            secondTimeTrades = 1;



            if (globalB1.search(" pubkey_ =") < 0) {
            firstLine2.innerHTML = "Bet on false:";

            firstLine2.style.fontSize = "20px";
//            firstLine2.style.paddingLeft = "135px";

            holderDiv.appendChild(br());
            holderDiv.appendChild(firstLine2);
            holderDiv.appendChild(br());

            }

            if (globalB1.search(" pubkey_ =") > 0) {
            let firstLine3 = document.createElement("div");
            
            firstLine3.innerHTML = "Copy LP address to get started.";
//            firstLine3.style.textDecoration = 'underline';

            if (globalCopiedBool != 1){

            firstLine2.innerHTML = "Bridge offers:";

            }else{

            firstLine2.innerHTML = "Bridge offers: ";
            
            }

            firstLine2.style.fontSize = "20px";
//            firstLine2.style.paddingLeft = "135px";

            holderDiv.appendChild(br());
            holderDiv.appendChild(firstLine2);
            holderDiv.appendChild(br());


            holderDiv.appendChild(firstLine3);
            holderDiv.appendChild(br());

            }

                }
//                if (i < sortedArray.length){

     //               console.log("in falsediv")

                
                if (globalB1.search(" pubkey_ =") > 0) {
                globalBridgeBool = 1;
                falseDiv.innerHTML = "Fee: " + sortedArray2[i][3] + " VEO | Send up to " + sortedArray2[i][4] + " VEO worth of " + globalCoinName;



                }else{
                globalBridgeBool = 0;

                falseDiv.innerHTML = "Odds: " + sortedArray2[i][1] + " | Risk: " + sortedArray2[i][3] + " | Profit: " + sortedArray2[i][4] ;
                
                }
                

                swapOfferFalse = sortedArray2[i][2];


                let swapOfferFalse_ = swapOfferFalse;

                let buttonFalse = button_maker2("Accept", function() { viewTrading(swapOfferFalse_)});
                
                            if (globalB1.search(" pubkey_ =") > 0) {
                buttonFalse.style.display = 'none';
                }else{
                buttonFalse.style.display = 'inline';

                }

  //          firstLine2.style.paddingLeft = "230px";
//                firstLine2.innerHTML = "False";
   //         firstLine2.style.display = 'inline';



                if ((globalB1.search(" pubkey_ =") > 0) && (sortedArray2[i][3] > 0.1 * sortedArray2[i][4])) {


                }else{

                if ( (((sortedArray2[i][3] < 0.01 * sortedArray2[i][4]) || (sortedArray2[i][3] > 100 * sortedArray2[i][4])) && (expertMode_ == 1) && (globalB1.search(" pubkey_ =") < 0)) || (swapOfferFalse[1][3] == headers_object.top()[1])  ) {

                }else{

                holderDiv.appendChild(buttonFalse);
                holderDiv.appendChild(text(" | "));
                holderDiv.appendChild(text(falseDiv.innerHTML));
                
                            if (globalB1.search(" pubkey_ =") > 0) {
                holderDiv.appendChild(text(" | "));
                }
                

                                            if (globalB1.search(" pubkey_ =") < 0) {
                                                        holderDiv.appendChild(br());

                                            }

                                        }

                }


                let copyButton_ = button_maker2("Copy", function() { copyPubkey_() });


//                blankText.style.display = 'none';                
                function copyPubkey_() {
                

            

                    console.log(globalNotBlankText == undefined);

                if ( ((globalNotBlankText == undefined) && (globalBlankText == undefined)) || ((globalNotBlankText == 0) && (globalBlankText == 0)) ) {

                holderDiv.appendChild(br()); 

                }
                


                copyText.innerHTML = "Address to send " + globalCoinName + " has been copied to clipboard. Hit the accept button to start the bridge.";
                copyText.style.color = 'green';
                copyText.style.fontSize = "16px";




                blankText.innerHTML = "You need to paste your " + globalNetworkName1 + " public key above before you can start.";
                blankText.style.color = 'red';
                blankText.style.fontSize = "16px";
//                console.log(blankText.style.display);



               // globalBlankText
                //input4

                if (input4.value == ""){

                if( globalBlankText == 1){

                }else{

                   
                holderDiv.appendChild(blankText);                    
                blankText.style.display = 'inline';

                console.log("Changing style: " + blankText.style.display);                
                copyText.style.display = 'none';
                globalBlankText = 1;
                globalNotBlankText = 0;
                

                }    

                }else{


                if (globalNotBlankText == 1){

                }else{
//                holderDiv.appendChild(br());                    

                blankText.style.display = 'none';

                holderDiv.appendChild(copyText);

                copyButton_.style.display = 'none';
                buttonFalse.style.display = 'inline';                
                            
                copyText.style.display = 'inline';
                globalCopiedBool = 1;
                copyToClipboard(globalProviderPubkey);
                globalBlankText = 0;
                globalNotBlankText = 1;                           

                }

                }

                console.log("notblank: " + globalNotBlankText);

                console.log("blank: " + globalBlankText);


                //establish global memo address

                let tempAddy = input4.value + "+";

                let tempVeoAddy = "BCtKPs6GWpYf4TubposJZsKp85wRJsCvrxpTCoRR51djr6VQgJ8RWGzQr+l9J6BwOzV7dqBG/m2OQH8aK2tA4LM="

                tempVeoAddy = tempVeoAddy.substring(0,3) + tempAddy + tempVeoAddy.substring(Number(3) + Number(tempAddy.length),tempVeoAddy.length);

                globalMemoAddress = tempVeoAddy;

                }



                if ((globalB1.search(" pubkey_ =") > 0) && (sortedArray2[i][3] > 0.1 * sortedArray2[i][4])) {

                }else{
                if (globalB1.search(" pubkey_ =") > 0) {
                holderDiv.appendChild(copyButton_);

            
                holderDiv.appendChild(br());
                }
                    }

                }

                }

      //      firstTimeTrades = 0;

            secondTimeTrades= 0;

            }


    }
//    globalTradeNonce = 1;


    var z_ = 0;
    async function display_offers2Load(orders, l, type, offsetNumber2_, t2_, t3_, d1message, d2message, _placeholder3) {

    //    console.log("placeholder is: " + _placeholder3);

        if (JSON.stringify(orders) == "[]") {
            xyz2 = 1;
     //       console.log("placeholder is: " + _placeholder3);
     //       if (_placeholder3 == "1"){
            betterTrades()
     //       }
            return 0;
        }else{


        var direction;
            var t = document.createElement("div");
        var m = l;
   //     console.log("mdisplayoffers2 is: " + (m[5] == 0));
  //      console.log("mdisplayoffers2 is: " + JSON.stringify(m));




    //    console.log()
  //      console.log("mdisplayoffers3 is type 1: " + type1 +" type2: " + type2);
  //      console.log("order1 is: " + t2_);

        var order = orders[0];
        var Maximum = 4294967295;
        var price = order[1] / Maximum;
        var amount = order[2];
        var tid = order[3];
        swapOffer = await trade_details2(tid);
        var swapOffer2 = swapOffer;
  //      console.log("THIS IS T4: " + swapOffer[1][5]);
  //      console.log("SWAPOFFER IS: " + swapOffer);
  //      console.log("SWAPOFFER IS 2: " +swapOffer[1][8])
  //      console.log("tid is: " + tid);

        var type1 = swapOffer[1][5];
        var type2 = swapOffer[1][8];

        //type1 is what you gain if you accept, type2 is what you lose if you accept
     //   console.log("swapOffer is: " + swapOffer2);


        var newDirection;
        if ((type1 == 1) && (type2 == 0)){
            newDirection = "the result is true";
        }
        if ((type1 == 0) && (type2 == 2)){
            newDirection = "the result is true";
        }


        if ((type1 == 2) && (type2 == 0)){
            newDirection = "the result is false";
        }
        if ((type1 == 0) && (type2 == 1)){
            newDirection = "the result is false";
        }




        var amountGain = swapOffer[1][9];
        var amountLose = swapOffer[1][6];

        var amountSwapped = false;
        var amountSwapped2;

        if (type1 != 0){
           amountGain = Number(swapOffer[1][6]);
           amountLose = swapOffer[1][9]; 
           amountSwapped2 = true;

        }
// if not 0, then it means sell veo and buy subcurrency
  //      console.log("xxxx: " + offsetNumber2_);
  //      console.log("xxxx swap bool: " + amountSwapped2);
  //      console.log("xxxx t2 is :" + (t2_.search("competition") != "-1"));


            //offsetnumber2 being 1 means it is a preformatted question
            //lets just figure out what it is given

            //      you gain veo + lose type 1 = you bet on false
    //              you gain type 2 + lose veo = you bet on false
    
    //              you gain type 1 + lose veo = you bet on true
    //              you gain veo and lose type 2 = you bet on true
            //
            //
            //

            if (offsetNumber2_ == 1) {
                direction = "the result is true";
            } else if (type == "scalar") {
                direction = "the price of stablecoin measured in veo increases";
                return 0;
            }

            if (offsetNumber2_ == undefined) {
                direction = "the result is false";
            } else if (type == "scalar") {
                direction = "the price of stablecoin measured in veo decreases";
                return 0;
            }
        


        
//        var text = "bet type: ".concat(type).concat("; price = ").concat(price.toFixed(5)).concat(d1message).concat((1/price).toFixed(5)).concat(d2message).concat(" you win if ").concat(direction).concat("; they pay = ").concat(s2c(h[7])).concat("; you pay = ").concat(s2c(h[8])).concat("; expires: ").concat(h[5]);
  
           direction = newDirection;

          offers.style.display = "inline";
          
  //        console.log("amount1Gain is " + s2c(amountGain));
   //       console.log("amount1Lose is " + s2c(amountLose));


          var probLanguage = " | Implied Probability: ";

          if (amountSwapped2 == true){
          //      amountGain = Number(amountGain) + Number(amountLose);


          var implProb = (Number(100) - 100*((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)))).toPrecision(3) + "%";

//          var implProb = (Number(100) - 100*((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)))).toPrecision(3) + "%";



    //      console.log("bbbb " + implProb);
            }else{

            var implProb = (100*((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)))).toPrecision(3) + "%";

            }



          if (amountSwapped2 !=true){
            //if sports match is confirmed
            if (t2_.search("competition") != "-1") {
                if((s2c(amountGain) - s2c(amountLose)) > s2c(amountLose)){
                 
      //           console.log("ZZZZ")   
                 var percentage = ((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)));
                 
                 xyz_ = percentage;

                 var x = Number(-100) + Number(10000)/(Number(100)*(Number(1)-percentage));
    //             console.log("ZZZZ: " + "-"+x.toPrecision(3)); 
                 var probLanguage = " | Betting odds: ";
                implProb = "-"+x.toPrecision(4);
        //            console.log("xyz is: " + xyz_);


                }
            
            if ((s2c(amountGain) - s2c(amountLose)) <= s2c(amountLose)){

                 var percentage = ((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)));

                xyz_ = percentage;
                 var x = (Number(100)*(Number(1)/percentage)) - Number(100);
       //          console.log("GGGG" + "+"+x.toPrecision(3));
                 var probLanguage = " | Betting odds: ";
                 implProb = "+"+x.toPrecision(4);
       //             console.log("xyz is: " + xyz_);

            }
            


            }

          }


            if (amountSwapped2 ==true){
            //if sports match is confirmed

      //      amountGain = Number(amountGain) + Number(amountLose);

            if (t2_.search("competition") != "-1") {
                
                if( (s2c(amountLose) > (s2c(amountGain) - s2c(amountLose)) ) ){
                 
          //       console.log("ZZZZ")   
                 var percentage = (s2c(amountLose) / (s2c(amountGain)));
                    xyz_ = percentage;
    //                console.log("xyz is: " + xyz_);

                 var x = Number(-100) + Number(10000)/(Number(100)*(Number(1)-percentage));
           //      console.log("ZZZZ: " + "-"+x.toPrecision(3)); 
                 var probLanguage = " | Betting odds: ";
                implProb = "-"+x.toPrecision(4);


                }
            
            if ( (s2c(amountLose) <= (s2c(amountGain) - s2c(amountLose)) ) ){

                 var percentage = (s2c(amountLose) / (s2c(amountGain)));
                    xyz_ = percentage;                 
                 var x = (Number(100)*(Number(1)/percentage)) - Number(100);
    //                console.log("xyz is: " + xyz_);


         //        console.log("GGGG" + "+"+x.toPrecision(3));
                 var probLanguage = " | Betting odds: ";
                 implProb = "+"+x.toPrecision(4);

            }
            


            }

          }


//           amountGain = swapOffer[1][9];
//           amountLose = swapOffer[1][6]; 

/*
          if (direction == "the result is false"){
                implProb = ((100*((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain))))).toPrecision(3) + "%"
                    }
*/       

        //for debugging
//        var idStuff = "type: "+type1 + "/" + type2 + " | amounts: " + swapOffer[1][6] + "/" + swapOffer[1][9] ;

        var idStuff = "";
        let _risk_ = 0;
        let _profit_ = 0;
        let _percent = xyz_;
  //      console.log("percentage is: " + xyz_);

        if (amountSwapped2 != true){
        
        var text = "You win if "+direction+ probLanguage.concat(implProb).concat(" | Risk: ").concat(Number((s2c(amountGain) - s2c(amountLose)).toPrecision(3))).concat(" ")+"| Profit: ".concat(Number(s2c(amountLose).toPrecision(3))).concat(" | ").concat(idStuff);
        
        _risk_ = Number((s2c(amountGain) - s2c(amountLose)).toPrecision(3));
        _profit_ = Number(s2c(amountLose).toPrecision(3));
        
        } else {
       
        var text = "You win if "+direction+ probLanguage.concat(implProb).concat(" | Risk: ").concat(Number((s2c(amountLose)).toPrecision(3))).concat(" ")+"| Profit: ".concat(Number((s2c(amountGain) - s2c(amountLose)).toPrecision(3))).concat(" | ").concat(idStuff);
        
        _risk_ = Number((s2c(amountLose)).toPrecision(3));
        _profit_ = Number((s2c(amountGain) - s2c(amountLose)).toPrecision(3));

        }

  //      var text.appendChild("asdfs");



    //    console.log("orders are:" + orders);
    //    console.log("orders are:" + JSON.stringify(l));

    //    console.log("xyz2 is " + xyz2);
        if (globalInputBool != 1 && xyz2 != 0){
       //     var cid_1 = m[2];

        //first time running we need to calculate two arrays, true and false
        //xyzw








        var cid_1;
   //         var xyz1;
            var a1 = document.createElement("a");
      
            var b1 = document.createElement("a");

            console.log("XXXX t3 is " + t3_);
            
            b1.innerHTML = t3_;
        
            if (m[2] == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
                cid_1 = m[4];
            }else if (m[4] == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
                cid_1 = m[2];
            }else{
                cid_1 = "unsupported swap type";
            }
        
            var cidTruncate1 = cid_1.slice(0,5)+ "..." + cid_1.slice(cid_1.length - Number (4), cid_1.length);
            a1.innerHTML = cidTruncate1;
            a1.target = "_blank";
            a1.href = "http://159.89.87.58:8080/explorers/contract_explorer.html?cid=".concat(cid_1);
            xyz2 = 0;
            var text2 = document.createElement("div");
            var text3 = document.createElement("div");
            var text4 = document.createElement("div");
            var text5 = document.createElement("div");
            var text6 = document.createElement("div");
            var text7 = document.createElement("div");
            var text8 = document.createElement("div");

//            var input4 = document.createElement("INPUT");
            var input5 = document.createElement("INPUT");
//            var input6 = document.createElement("INPUT");

            input4.style.display = 'inline';
            input5.style.display = 'inline';



            var tradingButton = button_maker2("Create trade", function() { createTrade(Number(input4.value), Number(input5.value), t2_) });
    //        acceptConfirmation.innerHTML = "asdsad";
            acceptConfirmation.style.display = "inline";
            var spacing = document.createElement("div");
            spacing.innerHTML = " ";
            spacing.style.display = "inline";
//            var text2 = "Contract: ";
            text2.innerHTML = "Contract: ";
            text3.innerHTML = "Event: ";
            text4.innerHTML = "Risk: ";
            text5.innerHTML = "Profit: ";
            text6.innerHTML = "Betting on true";
            text7.innerHTML = " or false";
            text8.innerHTML = " ";

            text7.style.display = 'inline';
            text8.style.display = 'inline';


    //        text6.style.display = 'inline';


            b1.style.display = "inline";
    //        text3.style.display = "inline";


                globalB1 = t3_;

            text2.style.textIndent = "50px";
            text3.style.textIndent = "50px";
            text4.style.textIndent = "50px";
            text5.style.textIndent = "50px";
            text6.style.textIndent = "50px";
//            text8.style.textIndent = "70px";



   //         tradingButton.style.textIndent = "50px";




            true1.style.display = 'inline';

            false1.style.display = 'inline';


            offers.appendChild(br());

            offers.appendChild(br());

            offers.appendChild(text2);
            text2.appendChild(a1);
            text2.appendChild(spacing);
            text2.appendChild(acceptConfirmation);

            offers.appendChild(text3);


            var providerPubkey_;

            if (t3_.search("pubkey_ =") > 0){

//                if ( ( ( oracle_text.search("pubkey_") > 0 ) && ( ( oracle_text.search(";") > 0 ) ) ) ){

                let piece1_ = 0;

//let pubkey_ = pubkey in the swap receipt associated with this trade offer; if testAddress1 has not received any of ETH on Arbitrum One from pubkey_ within 3 blocks of this swap offer getting into an Amoveo block, return TRUE, else return( (pubkey_ has received an amount of ETH on Ethereum L1 greater than or equal to the amount they sent testAddress1 on Arbitrum One no later than 0.5 hours after the Arbitrum One transaction confirms) == TRUE)

//has received an amount of ETH on Ethereum L1 greater than or equal to the amount they sent testAddress1 on Arbitrum One no later than 0.5 hours after the Arbitrum One transaction confirms) == TRUE)

   //             console.log("bridgeLanguage 1: " + oracle_text.split(" ")[14]);

//                console.log("bridgeLanguage 2: " + oracle_text.split(" ")[14]);

  //              console.log("bridgeLanguage 1: " + oracle_text.split(" ")[14]);

                let oracle_text = t3_;

                let providerPubkey = oracle_text.split(" ")[45];

                let piece2_ = " has not received any of ";

                let piece3_ = " on ";

                let coinName_ = oracle_text.substring(oracle_text.search(piece2_) + piece2_.length, oracle_text.search(piece3_));

                let piece4_ = " from pubkey_ within ";

                let network1_ = oracle_text.substring(oracle_text.search(piece3_) + piece3_.length, oracle_text.search(piece4_));

                let piece5_ = " greater than or equal ";

                let network2pieces = oracle_text.substring(0, oracle_text.search(piece5_)).split(" ");

                //support 

                //loop thru em

                let network2_ = " ";

                for (i = 0; i < 6; i++ ){

                    if ( network2pieces[network2pieces.length - i] == "on" ) {

                                    for (j = 1; j < i; j++ ){

                                    network2_ = network2pieces[network2pieces.length - j] + " " + network2_;

                                    }


                    }


                }


//has received an amount of ETH on Ethereum L1 greater than or equal to the amount they sent testAddress1 on Arbitrum One no later than 0.5 hours after the Arbitrum One transaction confirms) == TRUE)

                let piece6_ = " no later than ";

                let piece7_ = "  after the ";

                let timeLimit_ = oracle_text.substring(oracle_text.search(piece6_) + piece6_.length, oracle_text.search(piece7_));

                let piece8_ = 0;

//                let new_oracle_text = "Bridge " + coinName_ + " from " + network1_ + " to " + network2_ + " | Provider: " + providerPubkey;
                let new_oracle_text = "Bridge " + coinName_ + " from " + network1_ + " to " + network2_;
   


                b1.innerHTML = new_oracle_text;


                    globalCoinName = coinName_;

                    globalNetworkName1 = network1_;

                            text4.innerHTML = "Your " + network1_ + " public key: ";

                            text5.innerHTML = "Send coins to " + providerPubkey + " ";


                            providerPubkey_ = providerPubkey;


                            globalProviderPubkey = providerPubkey_;


            }



            //            text4.innerHTML = "Risk: ";
            //            text5.innerHTML = "Profit: ";
            //            text6.innerHTML = "Betting on true";
            //            text7.innerHTML = " or false";
            //            text8.innerHTML = " ";








            text3.appendChild(b1);



            if (t3_.search("pubkey_ =") < 0){
            offers.appendChild(text4);
            text4.appendChild(input4);
            offers.appendChild(text5);
            text5.appendChild(input5);





            offers.appendChild(text6);
            text6.appendChild(true1);
            text6.appendChild(text7);
            text6.appendChild(false1);
//            offers.appendChild(text8);
            text6.appendChild(text8)
            text6.appendChild(tradingButton);
        }

            if (t3_.search("pubkey_ =") > 0){




            offers.appendChild(text4);
            text4.appendChild(input4);
            
     //       offers.appendChild(text5);
//            text5.appendChild(input5);
            
            var button8 = button_maker2("Copy address", function() { clipboard_() });


            function clipboard_() {

                copyToClipboard(providerPubkey_);
            
            }


//            text5.appendChild(button8);


            }


//            offers.appendChild(br());            

    
                        if (t3_.search("pubkey_ =") > 0){
                        }else{
            offers.appendChild(br());

        }
        globalInputBool = 1;
        }



       // xyz1 = 0

        t.innerHTML = text;
        

            t.style.display = "inline";



        if (type1 == type2){
        t.innerHTML = "Unsupported format - trade hidden";
        offers.appendChild(t);
        offers.appendChild(br());
        }else{


  //      offers.appendChild(t);
  //IMPORTANT


    //    console.log("PPPP button h: " + swapOffer);
    //    console.log("PPPP button type: " + type);

        var button = button_maker2("Accept trade", function() { viewTrading(swapOffer2) });
//        var button = button_maker2("Accept trade", function() { swap_viewer3.view(swapOffer2) });
  //      console.log("building arrays: " + swapOffer2);
  //      console.log("building arrays: " + direction);
  //      console.log("building arrays: " + _risk_);
  //      console.log("building arrays: " + _profit_);

        let direction2 = direction;


        if (direction2 == "the result is true"){
            console.log("zxcv in true")
    //        let tradeList = [implProb, swapOffer2, _risk_, _profit_]
            
            let _price = Number(_profit_)/(Number(_risk_) + Number(_profit_));

            trueArray.push([_price, implProb, swapOffer2, _risk_, _profit_]);
  //          console.log("zxcv: " + JSON.stringify(trueArray));
        }

        if (direction2 == "the result is false"){
            let _price2 = Number(_profit_)/(Number(_risk_) + Number(_profit_));
 //           let tradeList2 = [implProb, swapOffer2, _risk_, _profit_]
            falseArray.push([_price2, implProb, swapOffer2, _risk_, _profit_]);

  //          console.log("zxcv: " + JSON.stringify(falseArray));

       //     tradeList2 = [];
        }

   //     console.log(JSON.stringify(trueArray));
   //     console.log(JSON.stringify(falseArray));

        t2_.search("competition") != "-1"

        button.style.display = "inline";



   //     offers.appendChild(text(" "));
   //     offers.appendChild(button);
   //     offers.appendChild(br());

   //   IMPORTANT
    }
        display_offers2Load(orders.slice(1), l, type, offsetNumber2_, t2_, d1message, d2message, _placeholder3);


    }

 //   globalInputBool = 1;
};



    async function createTrade2(_risk, _profit, _t2, _type){


        let myAmount_ = _risk;
//        let theirAmount_ = Number(_risk) + Number(_profit);

        let theirAmount_ = Number(_profit);

        await bet_builder9(_t2, myAmount_, theirAmount_, _type);
//                setTimeout(offerInputLoad(), 3000);
   

    }


    async function createTrade(_risk, _profit, _t2){


        let myAmount_ = _risk;
//        let theirAmount_ = Number(_risk) + Number(_profit);

        let theirAmount_ = Number(_profit);


        //check the checkboxes
        if ((true1.checked == true) && (false1.checked == true)) {
            console.log("u cant do that");
        }else{

            if ((true1.checked != true) && (false1.checked != true)){
           console.log("u cant do that");

            }else{
                let _type = 0;
                if (true1.checked == true){
                    _type = 1;
                }

                if (false1.checked == true){
                    _type = 2;
                }
                globalcreatetradenonce = 1;
                await bet_builder2(_t2, myAmount_, theirAmount_, _type);
//                setTimeout(offerInputLoad(), 3000);
                }

            }

    }


    async function display_offers2(orders, l, type, offsetNumber2_, t2_, t3_, d1message, d2message) {

        if (JSON.stringify(orders) == "[]") {
            xyz1 = 1;
            return 0;
        }else{


        var direction;
            var t = document.createElement("div");
        var m = l;
  //      console.log("mdisplayoffers2 is: " + m[2]);
  //      console.log("mdisplayoffers2 is: " + m);
        var type1 = m[4];
        var type2 = m[6];

        //type1 is what you gain if you accept, type2 is what you lose if you accept

        var newDirection;
        if ((type1 == 1) && (type2 == 0)){
            newDirection = "the result is true";
        }
        if ((type1 == 0) && (type2 == 2)){
            newDirection = "the result is true";
        }


        if ((type1 == 2) && (type2 == 0)){
            newDirection = "the result is false";
        }
        if ((type1 == 0) && (type2 == 1)){
            newDirection = "the result is false";
        }



    //    console.log()
   //     console.log("mdisplayoffers3 is type 1: " + type1 +" type2: " + type2);


        var order = orders[0];
        var Maximum = 4294967295;
        var price = order[1] / Maximum;
        var amount = order[2];
        var tid = order[3];
        swapOffer = await trade_details2(tid);
        var swapOffer2 = swapOffer;
        console.log("THIS IS T4: " + swapOffer[1][6]);
        console.log("SWAPOFFER IS: " + swapOffer);
        console.log("tid is: " + tid);
        var amountGain = swapOffer[1][9];
        var amountLose = swapOffer[1][6];

        var amountSwapped = false;
        var amountSwapped2;

        if (type1 != 0){
           amountGain = swapOffer[1][6];
           amountLose = swapOffer[1][9]; 
           amountSwapped2 = true;

        }
// if not 0, then it means sell veo and buy subcurrency
        console.log("xxxx: " + offsetNumber2_);
        console.log("xxxx swap bool: " + amountSwapped2);
        console.log("xxxx t2 is :" + (t2_.search("competition") != "-1"));


            //offsetnumber2 being 1 means it is a preformatted question
            //lets just figure out what it is given

            //      you gain veo + lose type 1 = you bet on false
    //              you gain type 2 + lose veo = you bet on false
    
    //              you gain type 1 + lose veo = you bet on true
    //              you gain veo and lose type 2 = you bet on true
            //
            //
            //

            if (offsetNumber2_ == 1) {
                direction = "the result is true";
            } else if (type == "scalar") {
                direction = "the price of stablecoin measured in veo increases";
                return 0;
            }

            if (offsetNumber2_ == undefined) {
                direction = "the result is false";
            } else if (type == "scalar") {
                direction = "the price of stablecoin measured in veo decreases";
                return 0;
            }
        

        
//        var text = "bet type: ".concat(type).concat("; price = ").concat(price.toFixed(5)).concat(d1message).concat((1/price).toFixed(5)).concat(d2message).concat(" you win if ").concat(direction).concat("; they pay = ").concat(s2c(h[7])).concat("; you pay = ").concat(s2c(h[8])).concat("; expires: ").concat(h[5]);
  
           direction = newDirection;

          offers.style.display = "inline";
          
          console.log("amount1Gain is " + s2c(amountGain));
          console.log("amount1Lose is " + s2c(amountLose));


          var probLanguage = " | Implied Probability: ";

          if (amountSwapped2 == true){
          var implProb = (Number(100) - 100*((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)))).toPrecision(3) + "%";
          console.log("bbbb " + implProb);
            }else{

            var implProb = (100*((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)))).toPrecision(3) + "%";

            }



          if (amountSwapped2 !=true){
            //if sports match is confirmed
            if (t2_.search("competition") != "-1") {
                if((s2c(amountGain) - s2c(amountLose)) > s2c(amountLose)){
                 
                 console.log("ZZZZ")   
                 var percentage = ((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)));
                 var x = Number(-100) + Number(10000)/(Number(100)*(Number(1)-percentage));
                 console.log("ZZZZ: " + "-"+x.toPrecision(3)); 
                 var probLanguage = " | Betting odds: ";
                implProb = "-"+x.toPrecision(4);


                }
            
            if ((s2c(amountGain) - s2c(amountLose)) <= s2c(amountLose)){

                 var percentage = ((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)));
                 var x = (Number(100)*(Number(1)/percentage)) - Number(100);
                 console.log("GGGG" + "+"+x.toPrecision(3));
                 var probLanguage = " | Betting odds: ";
                 implProb = "+"+x.toPrecision(4);

            }
            


            }

          }


            if (amountSwapped2 ==true){
            //if sports match is confirmed
            if (t2_.search("competition") != "-1") {
                
                if( (s2c(amountLose) > (s2c(amountGain) - s2c(amountLose)) ) ){
                 
                 console.log("ZZZZ")   
                 var percentage = (s2c(amountLose) / (s2c(amountGain)));
                 var x = Number(-100) + Number(10000)/(Number(100)*(Number(1)-percentage));
                 console.log("ZZZZ: " + "-"+x.toPrecision(3)); 
                 var probLanguage = " | Betting odds: ";
                implProb = "-"+x.toPrecision(4);


                }
            
            if ( (s2c(amountLose) <= (s2c(amountGain) - s2c(amountLose)) ) ){

                 var percentage = (s2c(amountLose) / (s2c(amountGain)));
                 var x = (Number(100)*(Number(1)/percentage)) - Number(100);
                 console.log("GGGG" + "+"+x.toPrecision(3));
                 var probLanguage = " | Betting odds: ";
                 implProb = "+"+x.toPrecision(4);

            }
            


            }

          }


//           amountGain = swapOffer[1][9];
//           amountLose = swapOffer[1][6]; 

/*
          if (direction == "the result is false"){
                implProb = ((100*((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain))))).toPrecision(3) + "%"
                    }
*/       

        //for debugging
//        var idStuff = "type: "+type1 + "/" + type2 + " | amounts: " + swapOffer[1][6] + "/" + swapOffer[1][9] ;

        var idStuff = "";


        if (amountSwapped2 != true){
        var text = "You win if "+direction+ probLanguage.concat(implProb).concat(" | Risk: ").concat(Number((s2c(amountGain) - s2c(amountLose)).toPrecision(3))).concat(" ")+"| Profit: ".concat(Number(s2c(amountLose).toPrecision(3))).concat(" | ").concat(idStuff);
        } else {
        var text = "You win if "+direction+ probLanguage.concat(implProb).concat(" | Risk: ").concat(Number((s2c(amountLose)).toPrecision(3))).concat(" ")+"| Profit: ".concat(Number(s2c(amountGain).toPrecision(3))).concat(" | ").concat(idStuff);
        }

  //      var text.appendChild("asdfs");


        console.log("xyz1 is " + xyz1);
        if (xyz1 != 0){
       //     var cid_1 = m[2];

        var cid_1;
   //         var xyz1;
            var a1 = document.createElement("a");
      
            var b1 = document.createElement("a");

            console.log("XXXX t3 is " + t3_);
            
            b1.innerHTML = t3_;
        
            if (m[3] == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
                cid_1 = m[5];
            }else if (m[5] == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
                cid_1 = m[3];
            }else{
                cid_1 = "unsupported swap type";
            }
        

            offersInput.value = cid_1;

            var cidTruncate1 = cid_1.slice(0,5)+ "..." + cid_1.slice(cid_1.length - Number (4), cid_1.length);
            a1.innerHTML = cidTruncate1;
            a1.target = "_blank";
            a1.href = "http://159.89.87.58:8080/explorers/contract_explorer.html?cid=".concat(cid_1);
            xyz1 = 0;
            var text2 = document.createElement("div");
            var text3 = document.createElement("div");

    //        acceptConfirmation.innerHTML = "asdsad";
            acceptConfirmation.style.display = "inline";
            var spacing = document.createElement("div");
            spacing.innerHTML = " ";
            spacing.style.display = "inline";
//            var text2 = "Contract: ";
            text2.innerHTML = "Contract: ";
            text3.innerHTML = "Event: ";
            b1.style.display = "inline";

            globalB1 = t3_;
    //        text3.style.display = "inline";

            text2.style.textIndent = "50px";
            text3.style.textIndent = "50px";

            offers.appendChild(br());

            offers.appendChild(br());

            offers.appendChild(text2);
            text2.appendChild(a1);
            text2.appendChild(spacing);
            text2.appendChild(acceptConfirmation);

            offers.appendChild(text3);
            text3.appendChild(b1);
            offers.appendChild(br());
        //    offers.appendChild(br());
       //     offers.appendChild(br());

        }

       // xyz1 = 0

        t.innerHTML = text;
        

            t.style.display = "inline";



        if (type1 == type2){
        t.innerHTML = "Unsupported format - trade hidden";
        offers.appendChild(t);
        offers.appendChild(br());
        }else{


        offers.appendChild(t);
        console.log("PPPP button h: " + swapOffer);
        console.log("PPPP button type: " + type);

        var button = button_maker2("Accept trade", function() { viewTrading(swapOffer2) });
//        var button = button_maker2("Accept trade", function() { swap_viewer3.view(swapOffer2) });


        button.style.display = "inline";



   //     offers.appendChild(text(" "));
        offers.appendChild(button);
        offers.appendChild(br());

    }
        display_offers2(orders.slice(1), l, type, offsetNumber2_, t2_, d1message, d2message);

        offersButton2.style.display = 'inline';
        offersButton4_.style.display = 'inline';

    }
};



        async function trade_details2(tid){
        //if it is your own swap offer, then make a cancel offer button. todo.
        var t = await rpc.apost(["read", 2, tid], get_ip(), parseInt("8090"));
  //      console.log("THIS IS T: " + JSON.stringify(t));
 //       console.log("THIS IS T2: " + t[1][6]);
  //      console.log("THIS IS T3: " + t[1][9]);

        return(t);
//        swap_viewer.offer(JSON.stringify(t));
//        swap_viewer.view();
    };

    function plus_encode(s) {
        if (s == "") { return ""; }
        var h = s[0];
        if (h == "+") { h = "%2B"; }
        return h.concat(plus_encode(s.slice(1)));
    };


    function display_contract(h, type) {
        var CID = h[1];
        rpc.default_explorer(["get_offer_contract", CID], function(C) {
            var copy_contract_link = document.createElement("div");
            var contract_type = type;
            console.log(JSON.stringify(h));
            console.log(JSON.stringify(C));
            console.log(JSON.stringify(C[1]));
            globalChannelOffer = C[1];
            console.log("broadcasting C")
            console.log(C);
            console.log("trying to broadcast the offer");


            //pull position data
            //if it isnt there make sure its handled correctly
            console.log(window.localStorage.getItem("positionData"+keys.pub()));
            
            console.log("localstorage is: " + (window.localStorage.getItem("positionData"+keys.pub())) == null);


            if (window.localStorage.getItem("positionData"+keys.pub()) != null){

                var arr2 = new Array();
               // var positionData

                arr2.push(window.localStorage.getItem("positionData"+keys.pub()));
                arr2.push(JSON.stringify(C[1]));

                console.log("existing array is"+ arr2);
                window.localStorage.setItem("positionData"+keys.pub(), arr2);

                console.log("positionData is 1st" + window.localStorage.getItem("positionData"+keys.pub()));


            }else{
                var arr = new Array();

                console.log("stringified C1 part 2 is" + C[1]);
                console.log("stringified C1 is" + JSON.stringify(C[1]));
                console.log("stringified to string is  " + '"' + JSON.stringify(C[1])+'"' );
                console.log("stringified to string2 is  " + JSON.parse(JSON.stringify(C[1])) );
                arr.push(JSON.stringify(C[1]));
                console.log("array is:" + arr);
                    window.localStorage.setItem("positionData"+keys.pub(), JSON.stringify(C[1]));
            //    window.localStorage.setItem("positionData"+keys.pub(), '"' + JSON.stringify(C[1])+'"');
                console.log("positionData is  " + window.localStorage.getItem("positionData"+keys.pub()));

            }







            CBA.cp_start();

            keys.update_balance();
            


            //append

            //overwrite

           // localstorage.setitem
/*
            var oid = plus_encode(h[2]);
            var UL = C[1][1][18];
            var LL = C[1][1][19];
            F = function(X){
                var Y = parseInt(X) / 100000000;
                return(Y.toFixed(8));
            };
            //var direction = C[1][2][1][2];//either 1 or 2.
            var direction = C[1][1][1];//either 1 or 2.
            var d_string;
            if (direction == 1) {
                d_string = "false";
            } else if (direction == 2) {
                d_string = "true";
            } else {
                console.log(JSON.stringify(C[1][2][1]));
                console.log(direction);
                console.log("badly formed contract offer");
                return(0);
            }
        //    contract_div.innerHTML = JSON.stringify(C[1]);
            var our_amount = F(C[1][2][1][5]);
            var their_amount = F(C[1][2][1][4]);
            var oracle_height = C[1][3][2];
            console.log("c1 one: ");
            console.log(C[1]);
            console.log("c1 two: ");
            JSON.stringify(C[1]);
        //    copy_contract_link.innerHTML = "<a href=".concat("\"/otc_derivatives.html?auto_fill=").concat(contract_type).concat("&oracle=").concat(oid).concat("&our_amount=").concat(our_amount).concat("&their_amount=").concat(their_amount).concat("&oracle_height=").concat(oracle_height).concat("&bet_direction=").concat(d_string).concat("&upper_limit=").concat(UL).concat("&lower_limit=").concat(LL).concat("\" onclick=\"javascript:event.target.port=8080\"").concat(">open this contract in the contract-editor</a>");
        //    contract_div.appendChild(copy_contract_link);
        //    contract_div.appendChild(br());
            //console.log(JSON.stringify(C[1])); */
        });
    };

    return {div2: div2, title1: title1, oracle_filter: oracle_filter, title: title, title0: title0, positionDiv: positionDiv, newDiv2: newDiv2, offersLoad: offersLoad, offersButton2: offersButton2, offersButton4_: offersButton4_, offersInput: offersInput, offerInputLoad: offerInputLoad, display_positions: display_positions, oracle_filter: oracle_filter, oracleDoc: oracleDoc, title:title, oracles: oracles, t2: t2, offers: offers, oracle_list_pull: (function() { return oracle_list_pull; }), display_oracles: display_oracles, display_oracle: display_oracle, display_offers: display_offers, display_positions2: display_positions2, hideBeforeDisplay2: hideBeforeDisplay2, title3: title3, newDiv2: newDiv2, successVar2: successVar2, positionsInput: positionsInput, getBookMark: getBookMark, pullbm: pullbm, true1: true1, false1: false1, optionPresetButton2_: optionPresetButton2_, positionShow: positionShow, positionHide: positionHide, resetfilterbutton: resetfilterbutton, positionConfirmation: positionConfirmation, loadBookmark2: loadBookmark2, beginBridge: beginBridge, liquidityProvision: liquidityProvision};

})();
console.log("trying to display positions");


function populateInput(){

    var queryStore = window.location.search;
    queryStore = queryStore.substring(1,queryStore.length);

    abcd.offersInput.value = queryStore;
}


populateInput();

function runInputCheck(){
    if (abcd.offersInput.value == ""){

    }else{
        abcd.offerInputLoad();
    }
}

runInputCheck();


function focusOracleFilter(){
    abcd.oracle_filter.focus();
//    abcd.oracle_filter.select();

}

focusOracleFilter();

    var cidArray = new Array;

 async function checkrpc(){ 

    console.log(get_ip());

    let oracles_ = await rpc.apost(["markets", 2], get_ip(), "8090");
//        var oracles_ = await rpc.apost(["oracles", 3], get_ip(), 8091);
//        var oracles_ = await rpc.apost(["oracle_list"], get_ip(), 8090);
 //       var oracles_ = await variable_public_get(["oracle_list"]);

        console.log(JSON.stringify(oracles_));
        console.log(JSON.stringify(oracles_[0]));
        console.log(JSON.stringify(oracles_[1]));
        console.log(JSON.stringify(oracles_[1][1]));
        console.log(JSON.stringify(oracles_[1]));


        console.log(JSON.stringify(oracles_[2]));
        console.log(JSON.stringify(oracles_[3]));
    

    }

    async function filter(_number_){

        filterText = abcd.oracle_filter.value;


//        if ((abcd.optionPresetButton2_.checked == true) && (_number_ != 1) ){

        if ((abcd.optionPresetButton2_.checked == true) && (_number_ != 1) ){


            //figure out what day it is then add it to the filter

            // use eastern time because thats what most of the bets are

                let offset_ = new Date().getTimezoneOffset();// getting offset to make time in gmt+0 zone (UTC) (for gmt+5 offset comes as -300 minutes)

                let date_ = new Date();

                date_.setMinutes ( date_.getMinutes() + offset_);// date now in UTC time
                            
                let easternTimeOffset_ = -240; //for dayLight saving, Eastern time become 4 hours behind UTC thats why its offset is -4x60 = -240 minutes. So when Day light is not active the offset will be -300

                date_.setMinutes ( date_.getMinutes() + easternTimeOffset_);

                console.log("date is: " + date_.toString().split(" ")[2]);

                date_ = date_.toString();

//                abcd.oracle_filter.value = filterText + " " + date_.split(" ")[1] + " " + date_.split(" ")[2];



                filterText = filterText + " " + date_.split(" ")[1] + " " + Number(date_.split(" ")[2]);

        }

        if ((abcd.optionPresetButton2_.checked == true) && (_number_ == 1) ){


            //figure out what day it is then add it to the filter

            // use eastern time because thats what most of the bets are

                let offset_ = new Date().getTimezoneOffset();// getting offset to make time in gmt+0 zone (UTC) (for gmt+5 offset comes as -300 minutes)

                let date_ = new Date();

                date_.setMinutes ( date_.getMinutes() + offset_);// date now in UTC time
                            
                let easternTimeOffset_ = -240; //for dayLight saving, Eastern time become 4 hours behind UTC thats why its offset is -4x60 = -240 minutes. So when Day light is not active the offset will be -300

                date_.setMinutes ( date_.getMinutes() + easternTimeOffset_);

                console.log("date is: " + date_.toString().split(" ")[2]);

                date_ = date_.toString();

//                abcd.oracle_filter.value = filterText + " " + date_.split(" ")[1] + " " + date_.split(" ")[2];

                filterText = filterText + " " + date_.split(" ")[1] + " " + Number(date_.split(" ")[2]);

        }        

        firstTimeBool = 0;

        var port = "8090";


//        var l = await rpc.apost(["markets"], get_ip(), parseInt(port));
        var l = await rpc.apost(["markets", 2], get_ip(), parseInt(port));


   //     console.log("xxxx here is l: " + JSON.stringify(l));

        
 
        
        var cidHolder_;

//        console.log("xxxx here is l2: " + l[1][5]);
//        console.log("xxxx here is l23: " + l.length);
//        console.log("xxxx here is l234: " + JSON.stringify(l));

        l = l.slice(1);
        var actualLength = Number(l.length) - Number(1);

  //      console.log(l[0][1][5]);


        /*
        for (let i = 0; i < l.length / 3; i++) {


        //xyzwww
        if (l[i][1][3] == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
            cidHolder_ = l[i][1][5];
        }

        if (l[i][1][5] == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
            cidHolder_ = l[i][1][3];
        }




            cidArray.push(cidHolder_);
 //           console.log("cidholder is2: " + cidArray);
 //           console.log("cidholder is3: " + cidArray.indexOf("iPguye5rdK5p2p26LUoKmyhiP1fvZFPck16nkklqUDM="));

        }
    */

      //      console.log(cidArray.toString());


        myStopFunction();

        console.log("filterText is: " + filterText);

        abcd.display_oracles(l);
  //      myInterval = setInterval(async function(){ runtheloop() }, 1000*10);
    }




//    filter();

   async function resetFilter(){
    //            console.log(abcd.oracle_filter.value);
    //    filterText = undefined;

        abcd.resetfilterbutton.style.display = 'none';

        abcd.oracle_filter.value = "";

        abcd.oracles.innerHTML = "";

//        filter();
        
        /*
        firstTimeBool = 0;

        var port = "8090";
        var l = await rpc.apost(["markets"], get_ip(), parseInt(port));
        console.log("here is l: " + l);
        l = l.slice(1);

        myStopFunction();
        await abcd.display_oracles(l);
    
            */
    //    myInterval = setInterval(async function(){ runtheloop() }, 1000*10);
    }
//resetFilter();


   async function loadEvents(){
                console.log(abcd.oracle_filter.value);
        filterText = undefined;
        abcd.oracle_filter.value = "";
        firstTimeBool = 0;

        var port = "8090";
        var l = await rpc.apost(["markets"], get_ip(), parseInt(port));
        console.log("here is l: " + l);
        l = l.slice(1);

        myStopFunction();
        abcd.display_oracles(l);
    //    myInterval = setInterval(async function(){ runtheloop() }, 1000*10);
    }

   async function PresetFilter(x){

 //       console.log(abcd.oracle_filter.value);



        if (x == "Bridge"){

            abcd.optionPresetButton2_.checked = false;

        }
        filterText = x;
        abcd.oracle_filter.value = x;
        filter();


        /*
        firstTimeBool = 0;

        var port = "8090";
        var l = await rpc.apost(["markets"], get_ip(), parseInt(port));
        console.log("here is l: " + l);
        l = l.slice(1);

        myStopFunction();
        abcd.display_oracles(l);

        */

   //     myInterval = setInterval(async function(){ runtheloop() }, 1000*10);
    }


    function removeStorage(){
        window.localStorage.removeItem("positionData" + keys.pub());
        console.log("positionData in local storage removed");
    }

var tempvar2;

async function showPositions(){
        myStopFunction();

        abcd.positionDiv.innerHTML = "";
        internalNonce = 0;

        console.log("KEYSPUB IS: " + keys.pub());
        console.log("IP IS: " + get_ip2());

            const response = await rpc.apost(["account", keys.pub()], "159.89.87.58", 8091);
            if(response == "error") {
                //display.innerHTML = "<h3>load a key with funds.</h3>";
            } else {
             var sub_accs = response[1][3].slice(1);
             var liquidity_shares = response[1][4].slice(1);
            //    display.innerHTML = "";
            }
                    //TODO figure out which subcurrencies we own in each contract. each subcurrency goes into the selector seperately.

            console.log(JSON.stringify(response));
            console.log(response[1][3].slice(1));

        //    console.log("RRRR sub accs is:" + sub_accs);




            contracts_to_subs_(sub_accs, [], function(sub_accs2){
                load_balances_(
                    sub_accs2, liquidity_shares, "<h4>your balances in each subcurrency</h4>",
                    function(){
                        show_balances_();
                    
                        abcd.positionShow.style.display = 'none';
                        abcd.positionHide.style.display = 'inline';  
                    });
            });



 /* 


                            //var p2p_url = url(8090, "159.89.87.58");
                            var p2p_msg2 = ["read", 2, keys.pub()];
                            rpc.default_explorer(p2p_msg2, function(X){
                                console.log("sent message to p2p server.");
                                console.log(JSON.stringify(X))
                                //        var positionCTC = X;

//push it to an array                    

                tempvar2 = "[" + JSON.stringify(X) + "]";
            //    var arr0 = new Array();
                //arr0.push(tempvar2);

                //arr0.push(window.localStorage.getItem("positionData"+keys.pub()));


                console.log(tempvar2);
        if( tempvar2 != "[[-6]]"){
        console.log("positionCTC is " + JSON.stringify(JSON.parse(tempvar2)[0][1][4][1][4]));
        console.log("entire ctc is " + JSON.parse(tempvar2)[0][1]);
        //create ctc object first
      //  abcd.storeCTC local.
}



//        abcd.display_positions(window.localStorage.getItem("positionData"+keys.pub()),Number(0));

});
*/
}

    var tab_builder2 = [];
    var balances_db2 = {};
    var update_frequency2 = 0;//1000 * 60 * 10;//by default don't re-check the same balance if it has been less than 10 minutes.
    var loaded_into_selector2 = {};

    function show_balances_() {
        var sub_keys = Object.keys(balances_db2);
        var s = "";
//        balances.innerHTML = "";
        for(var i = 0; i<sub_keys.length; i++){
            var sa = balances_db2[sub_keys[i]];
            if(sa && sa.string){
                var s = sa.string;
                //console.log(s);
                if(!(loaded_into_selector2[sub_keys[i]])){
                    loaded_into_selector2[sub_keys[i]] = true;
        //            console.log("RRRR sa is: " + JSON.stringify(balances_db2));
                    var option = document.createElement("option");
                    option.innerHTML = s;
                    option.value = JSON.stringify([sa.cid, sa.type]);
                    for (var j = 0; j<tab_builder2.length; j++){
                        if((!("swap" === tab_builder2[j][0])) ||
                           (! (0 === sa.type))){
                        tabs[tab_builder2[j][0]].
                            selector.appendChild(
                                option.cloneNode(
                                    true));
                        };
                    };
                };
            };
        };
                console.log("lol41");

    };


    function load_balances_(accs, ls, s, callback) {
        console.log("RRRR load balances is: " + accs);
        var sub1 = accs.map(function(acc){
            //console.log(JSON.stringify(acc));
            var sk = sub_accounts.key(keys.pub(), acc[0], acc[1]);
            var sk2 = btoa(array_to_string(sk));
            return({sub_key:sk2,
                    cid: acc[0],
                    type: acc[1]
                   });
        });
        var sub2 = ls.map(function(mid){
            var sk = sub_accounts.key(keys.pub(), mid, 0);
            var sk2 = btoa(array_to_string(sk));
            return({sub_key:sk2,
                    cid: mid,
                    type: 0});
        });
        var subs = sub1.concat(sub2);
//        console.log("RRRR lb2 subs is: " + JSON.stringify(subs));
        return(lb2_(subs, callback));
    }

    function contracts_to_subs_(contracts, R, callback) {
        if(contracts.length < 1){
            return(callback(R));
        };
        var many_types = 2;
        contracts_to_subs2_(contracts[0], 1, many_types, [], function(subs){
            return(contracts_to_subs_(
                contracts.slice(1),
                R.concat(subs),
                callback));
        });
        console.log("RRRR contracts_to_subs is: " + contracts); 
    };

    function contracts_to_subs2_(CID, N, L, R, callback) {
        if(N>L){
            return(callback(R));
        };
                return(contracts_to_subs2_(CID, N+1, L, R.concat([[CID, N]]), callback));
    };

    async function lb2_(subs, callback){
        if(subs.length == 0){
            console.log("RRRR callback lb2 is: " + JSON.stringify(balances_db2));
            abcd.display_positions2(balances_db2);
            return(callback());
        };
        async function callback2(){
            setTimeout(function(){
              //      setTimeout(console.log("test", 300));
                return(lb2_(subs.slice(1), callback));
            }, 41);
        };


        var sub = subs[0];
        var sk = sub.sub_key;


// /*
        if(balances_db2[sk] &&
           balances_db2[sk].time &&
           ((Date.now() - balances_db2[sk].time) <
            update_frequency2)){

            return(callback2());
            //return(lb2(subs.slice(1), callback));
            //don't update.
        };
        if(!balances_db2[sk]){
            balances_db2[sk] = {};
        };


        balances_db2[sk].time = Date.now();
// */

                    console.log("lol3 1");

        //xyzw


                   function sleep(ms) {
                      return new Promise(resolve => setTimeout(resolve, ms));
                   }
                   async function sleeping() {
//                  
             //         for (let i = 1; i <20 ; i++) {        
                         await sleep(6000);
//                  
               //       }
                   }


//        async function rpcTimeout(){
        let sa = await sub_accounts.arpc(sk);
//        }
     
        
//        setTimeout(rpcTimeout(), 300);


//                   sleeping();   

        console.log("lol3sa " + sa);

        var balance = 0;
        if(sa && (sa[0] === "sub_acc")){
            balance = sa[1];
        };
        if(balance < 10001){
            //do we need to erase it, if it exists?
//            balances_db2[sk].time = Date.now()*2;
            //return(lb2(subs.slice(1), callback));
            return(callback2());
        };


        balances_db2[sk].bal = balance;
        balances_db2[sk].type = sub.type;
        balances_db2[sk].cid = sub.cid;


        if(sub.type == 0) {//its a market
            //build the string. load it in balances_db.
            
    /*
            var mid = sub.cid;
            var s = "market: "
                .concat(mid)
                .concat(" balance : ")
                .concat((balance / token_units()).toString());
            balances_db2[sk].string = s;
            show_balances_();
    */

            return(callback2());
            //return(lb2(subs.slice(1), callback));
        };
        //a subcurrency then
    //    let oracle_text = await rpc.apost(["read", 3, sub.cid], get_ip(), 8090);

        oracle_text = "lol";
        console.log("lol2");
//        balances_db2[sk].oracleLanguage = oracle_text;
        var s = "";
        if(sub.type == 2){
            s = s.concat("inverse ");
        };
        if(oracle_text &&(!(oracle_text == 0))){

            /*
            var ot1 = atob(oracle_text[1]);
            if(is_ticker_format_(ot1)){
                var ticker = decode_ticker(ot1);
                var limit = coll_limit(ot1);
                balances_db2[sk].limit = limit;
                var ticker_symbol = symbol(ot1);
                balances_db2[sk].ticker_symbol = "v".concat(ticker_symbol);
                s = s.concat("ticker: v")
                    .concat(ticker);
                if(sub.type === 1){
                    s = s
                        .concat(" balance: ")
                        .concat((balance * limit / token_units()).toString())
                        .concat(" v")
                        .concat(ticker_symbol);
                } else {
                    s = s
                        .concat(" balance: ")
                        .concat((balance/token_units()).toString());
                };
            } else if (oracle_text[0] === "contract"){
                */

       /*-record(contract, 
        {cid, source = <<0:256>>, 
         source_type = 0, choose_address_timeout,
         oracle_start_height, blockchain,
         amount, ticker, date, trade_id, now
         }).*/

         /*
                var trade_direction;
                if(sub.type === 2){
                    trade_direction = "buying VEO. Spending ";
                } else {
                    trade_direction = "selling VEO. Buying ";
                };
                console.log(balance);
                console.log(sa);
                s = ""
                    .concat(trade_direction)
                    .concat(atob(oracle_text[7]))
                    .concat(" of ")
                    .concat(atob(oracle_text[8]))
                    .concat(" on blockchain ")
                    .concat(atob(oracle_text[6]))
                    .concat(" by date ")
                    .concat(atob(oracle_text[9]))
                    .concat(". balance: ")
                    .concat((balance/token_units()).toString());
            } else {
                if(ot1.length > 64){
                    ot1 = ot1.slice(0, 64)
                        .concat("...");
                };
                s = s.concat("oracle text: ")
                    .concat(ot1)
                    .concat("contract: ")
                    .concat(sub.cid)
                    .concat(" balance: ")
                    .concat((balance/token_units()).toString());
            };
            */


        } else {
//            s = s
//                .concat("contract: ")
//                .concat(sub.cid)
//                .concat(" balance: ")
//                .concat((balance/token_units()).toString());
        };
 //       balances_db2[sk].string = s;
 //       console.log("RRRR BALANCES DB2 IS: " + JSON.stringify(balances_db2));

        console.log("lol4");
        
        setTimeout(console.log("test", 300));

  //      show_balances_();

        //}, get_ip(), 8090);
        //};

        return(callback2());
        
    };


    const ticker_regex = /W = ((qtrade\.io)|(coinmarketcap\.com)|(coinpaprika\.com)); T = [\d|:|\-| ]*China Standard Time \(GMT\+8\); ticker = [(a-z)(A-Z)]*; return\(the price of ticker at time T according to website W\) \* \d*/;
    const stablecoin_0 = /standard\s+stablecoin\s+0\s*;\s*ticker_path\s*=\s*\[(\w+\s*,\s*)*\w+\s*\]\s*;\s*website_path\s*=\s*\[([^,\]]+,\s*)[^,\]]+\]\s*;\s*time\s*=[^;]+;\s*price\s*=\s*\d+\s*;\s*for\(i=0; i<website_path\.length; i\+\+\)\{\s*price \*= \(the price of ticker_path\[i\] in ticker_path\[i\+1\] according to website\[i\]\)\s*\};\s*scale\s*=\s*\d+\s*;\s*return\(price\s*\*\s*scale\);/;

    function is_ticker_format_(x) {
        var b = (ticker_regex.test(x) ||
                 stablecoin_0.test(x));
        if(!(b)){
            //console.log(x);
        };
        return(b);
    };


    async function viewTrading(offer){

//        myStopFunction();

        console.log("IIII offer is: "+ offer);
        var X = offer;
        var Y = swaps.unpack(X);
        var now = headers_object.top()[1];
        
        var contract1, contract2;
        console.log("XXXX offer is: " + offer);
        console.log(JSON.stringify(Y));
        var original_limit_order_size = Y.parts;
        var available_to_match;





        //var TID = hash.doit(65 bytes of pubkey, then 32 bytes of salt)
//        var TID = btoa(array_to_string(hash(
//            string_to_array(
//                atob(Y.acc1))
//                .concat(string_to_array(
//                    atob(Y.salt))))));
        var TID = swaps.id_maker(Y.acc1, Y.salt);
        console.log("XXXX TID is: " + TID);
        var trade = await rpc.apost(["trades", TID])
        console.log("XXXX trade is: " + trade);
        if(trade === 0){
            available_to_match = original_limit_order_size;
        } else {
            available_to_match = original_limit_order_size - trade[2];
        };
        
       var A1 = Math.round(Y.amount1 * available_to_match / original_limit_order_size) / token_units();
//        var A2 = Math.round(Y.amount2 * available_to_match / original_limit_order_size) / token_units();
        var q = A1.toString();
        
        if(Y.cid1 == btoa(array_to_string(integer_to_array(0, 32)))){
            contract1 = "veo";
            console.log("XXXX veo is1: " + contract1);
        }else{
                //contract1 = Y.cid1
                //    .concat(" type ")
                //    .concat(Y.type1);
            contract1 = await contract_text2(
                Y.cid1, Y.type1);

            console.log("XXXX veo is2: " + contract1);
        }
        
        if(Y.cid2 == btoa(array_to_string(integer_to_array(0, 32)))){
            //currency 2 is the kind that you need to send. So this is the only type you could ever need to make the contract for.
            contract2 = "veo";
            console.log("XXXX veo2 is1: " + contract2);
        //    update_display(Y, now, contract1, contract2, available_to_match, original_limit_order_size);
            return(view2Trading([], X, Y, original_limit_order_size, available_to_match, q));
        }else{
            contract2 = await contract_text2(
                Y.cid2, Y.type2);

            console.log("XXXX veo2 is2: " + contract2);
        }
//        update_display(Y, now, contract1, contract2, available_to_match, original_limit_order_size);
        console.log("amount to make contracts");
            maybe_make_contracts2(Y.cid2, [], function(txs){
            console.log("made contracts");
            
            view2Trading(txs, X, Y, original_limit_order_size, available_to_match, q);
        });
        //});
    };



    function view2Trading(txs, X, Y, original_limit_order_size, available_to_match, q_) {
        //txs is the new_contracts parts.
        //swap_txs is the contract_use_txs
            var amount_to_match = Math.round(parseFloat(q_, 10) * token_units());
            if(!amount_to_match){
        //        display.innerHTML =
        //            "<p>You need to choose how much you want to buy</p>";
                return(0);
            }
            var A1 = Math.round(Y.amount1 * available_to_match / original_limit_order_size);
            if (amount_to_match > A1){
       //         display.innerHTML =
        //            "<p> that is more than everything that is available to buy. There is only "
        //            .concat(A1.toString())
        //            .concat(" available, so you cannot buy ")
        //            .concat(amount_to_match.toString())
        //            .concat("</p>")
        //            .concat("");
                return(0);
            };
            

            var matched_parts = Math.round(available_to_match * amount_to_match / A1);
            var signed_offer = X;
                    console.log("XXXX view2Tradin signed_offer is: " + signed_offer);            

            swaps.make_tx(signed_offer, matched_parts, async function(swap_txs){
               
                txs = txs.concat(swap_txs);

                var tx = await multi_tx.amake(txs);
                console.log(JSON.stringify(tx));
                var stx = keys.sign(tx);
                console.log("signed tx: " + JSON.stringify(stx));
                //need this
                var response = await apost_txs([stx]);



                console.log("response is: " + response);
           //     display.innerHTML = response;



                //need this

                if(!(response === "server rejected the tx")){
                    if(Y.type1 === 0){//only if you are paying veo for a subcurrency that is priced in veo.
                        var offer99 = swaps.accept_99(Y);
                        var signed_offer = swaps.pack(offer99);
                        var response = await rpc.apost(
                            ["add", signed_offer, 0],
                            get_ip(), 8090);
                        console.log(JSON.stringify(offer99));
                        console.log(response);
                    };
                };

                
                changeStatus4();
                keys.update_balance();

                if (globalBridgeBool == 1){

                    headers_object.send3(globalMemoAddress);
                globalBridgeBool = 0;
                }

            });
     

    

    };

    function changeStatus4(){
                acceptConfirmation.innerHTML = "<font color=\"green\">    Trade offer accepted!</font>";

                function changeStatus3(){
                acceptConfirmation.innerHTML = "";
                abcd.offerInputLoad();

                }

                function changeStatus3_(){
    //            acceptConfirmation.innerHTML = "";
    //            abcd.hideBeforeDisplay2();
                }



                setTimeout(changeStatus3, 3000);



    }



    async function contract_text2(cid, type) {
        var contract = await rpc.apost(
            ["read", 3, cid], default_ip(), 8090);
        console.log(JSON.stringify(contract));
        if((contract[0] === "scalar") &&
           (contract[6] === 0) &&//priced in veo
           (contract[3] === 1)//binary contract
          ){
            var win_string;
            if(type === 1){
                win_string = "veo if this is true: "
            } else {
                win_string = "veo if this is false: "
            }
            return(win_string
                   .concat(atob(contract[1])));
        } else {
            var s = "contract: "
                .concat(cid)
                .concat(" type: ")
                .concat(type);
            return(s);
        };

    };


    async function maybe_make_contracts2(cid, Txs, callback) {
        console.log("XXXX cid is: " + cid);
        if(cid == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
            return(callback(Txs));
        };
        var Contract = await merkle.arequest_proof("contracts", cid);
        console.log("XXXX contract is: " + Contract);
        if(!(Contract === "empty")){
            return(callback(Txs));
        console.log("XXXX callback is: ");
        }
        var z = await rpc.apost(["read", 3, cid], explore_swap_offer.ip_get, 8090);

        console.log("XXXX Z is: " + z);        
        if(z[0] == "scalar"){
            console.log("is scalar ");
            //{Text, Height, MaxPrice, Now}
            var tx = new_scalar_contract.make_tx(atob(z[1]), parseInt(z[3]), z[5], parseInt(z[6]));
                    console.log("XXXX tx is: " + tx);
            return(maybe_make_contracts2(tx[5], [tx].concat(Txs), callback));
            
        } else if (z[0] === "contract"){
                    console.log("XXXX elseif is: ");
            //contract hash is not in the buy_veo_contract.
            var oracle_start_height = z[5];
            var blockchain = z[6];
            var amount = z[7];
            var ticker = z[8];
            var date = z[9];
            var TID = z[10];
            var address_timeout = z[4];
            var reusable_settings = buy_veo_contract.reusable_settings(oracle_start_height, blockchain, amount, ticker, date);
            var settings = buy_veo_contract.settings(reusable_settings, address_timeout, 1, TID);
            var contract1bytes = buy_veo_contract.contract1bytes(settings);
            var contract_hash = btoa(array_to_string(hash(contract1bytes)));
            var tx = buy_veo_contract.new_contract_tx(contract_hash);
                    console.log("XXXX elseif tx is: " + tx);
            return(maybe_make_contracts2(tx[5], [tx].concat(Txs), callback));
        } else {
            display.innerHTML =
                "<p>You need to teach the server about this contract before you can bet on it. Use the teach scalar contract tool. </p>";
            return(0);
        };
    };


function hidePositions(){
    abcd.positionDiv.innerHTML = "";

    abcd.newDiv2.style.display = "none";

                        abcd.positionShow.style.display = 'inline';
                        abcd.positionHide.style.display = 'none'; 

}

function downloadPositions(){
download(window.localStorage.getItem("positionData"+keys.pub()), "My Position Data", "text/plain");

}

function hideOdds(){
    console.log("hiding odds");
    abcd.offers.innerHTML = "";

    //only hide odds below if this is the case
    if (globalcreatetradenonce == 1){


    }

//    abcd.offersInput.value = "";
}

function hideOdds2(){
    console.log("hiding odds");
    abcd.offers.innerHTML = "";
    abcd.offersInput.value = "";

        abcd.offersButton2.style.display = 'none';
        abcd.offersButton4_.style.display = 'none';

        abcd.true1.checked = false;
        abcd.false1.checked = false;


}

function returnOracleLanguage(x){

            rpc.default_explorer(["oracle", x, ], function(Oracle) {

            console.log("channel is ");
            console.log("oracleIs  " + Oracle);
            if (c == "empty") {
                console.log("that channel does not exist. Maybe you haven't synced with the network, or maybe it is already closed, or maybe it never existed");
                return 0;
            };
         console.log("inside display_positions");

            }); 
}

function settleEarly(x){
    
    console.log("tryna settle early ")
    console.log("settle early x is " + JSON.parse(x).length)
    var sctc = keys.sign(JSON.parse(x)[4]);

    //here is where we broadcast it. we need to figure out how to get sctc.
    return rpc.post(["txs", [-6, sctc]], function(x) {
        //console.log(x);
        console.log( "trying to broadcast this channel team close");
        //  return wait_till_closed(db);
    });
    console.log(x);

}


function hideTradeExplorer(){
    //here is how to construct it
    //keys.bal_div.style.display = 'none'
    abcd.title0.style.display = 'none';
    abcd.positionDiv.style.display = 'none';
    abcd.title1.style.display = 'none';
    abcd.offers.style.display = 'none';
    abcd.title.style.display = 'none';
    abcd.oracle_filter.style.display = 'none';
    abcd.oracles.style.display = 'none';
    abcd.div2.style.display = 'none';

    abcd.offersLoad.style.display = 'none';



}
// inline

function showTradeExplorer(){
    //here is how to construct it
    //keys.bal_div.style.display = 'none'
    abcd.title0.style.display = 'block';
    abcd.positionDiv.style.display = 'block';
    abcd.title1.style.display = 'block';
    abcd.offers.style.display = 'inline';
    abcd.title.style.display = 'block';
    abcd.oracle_filter.style.display = 'inline';
    abcd.oracles.style.display = 'block';
    abcd.div2.style.display = 'block';

    keys.div.style.display = 'block';
    keys.bal_div.style.display = 'block';
    keys.pub_div.style.display = 'none';

    keys.copy_address_button.style.display = 'none';
    keys.set_key_button.style.display = 'none';
    keys.download_key_button.style.display = 'none';
    keys.file_selector.style.display = 'none';

    abcd.offersLoad.style.display = 'inline';
//    abcd.offersButton4_.style.display = 'inline';

}

function hideCreateABet(){
    dcba.div.style.display = 'none';

}

function showCreateABet(){
    dcba.div.style.display = 'block';
    keys.div.style.display = 'block';
    keys.bal_div.style.display = 'block';
    keys.pub_div.style.display = 'none';

    keys.copy_address_button.style.display = 'none';
    keys.set_key_button.style.display = 'none';
    keys.download_key_button.style.display = 'none';
    keys.file_selector.style.display = 'none';

//    keys.c

//    copy_address_button: copy_address_button, set_key_button: set_key_button, download_key_button: download_key_button, file_selector: file_selector
    


}

function hideAccountManagement(){
    keys.div.style.display  = 'none';
    keys.bal_div.style.display = 'block';

    headers_object.wallet_text.style.display = 'none';
//    keys.bal_div.style.display = 'block';

    headers_object.wallet_text3.style.display = 'none';
    headers_object.bookmarkText.style.display = 'none';


}

function showAccountManagement(){
    hideTradeExplorer();
    hideCreateABet();
//    await abcd.getBookMark();
    keys.div.style.display  = 'block';

    headers_object.wallet_text.style.display = 'block';

    keys.pub_div.style.display = 'block';

    keys.copy_address_button.style.display = 'inline';
    keys.set_key_button.style.display = 'inline';
    keys.download_key_button.style.display = 'inline';
    keys.file_selector.style.display = 'inline';


    headers_object.wallet_text3.style.display = 'block';

    headers_object.bookmarkText.style.display = 'block';

    
}



function accountManagement(){
    hideTradeExplorer();
    hideCreateABet();
    hideProvideLiquidity();
    showAccountManagement();
    console.log("firsttimecheck is " + (abc == null));
}

function createABet(){
    hideTradeExplorer();
    hideAccountManagement();
    hideProvideLiquidity();
    showCreateABet();
    // Do stuff


}

function tradeExplorer(){
    hideCreateABet();
    hideAccountManagement();
    hideProvideLiquidity();
    showTradeExplorer();

}

function liquidityProvider(){
    hideCreateABet();
    hideAccountManagement();
    hideTradeExplorer();

    keys.div.style.display = 'block';
    keys.bal_div.style.display = 'block';
    keys.pub_div.style.display = 'none';

    keys.copy_address_button.style.display = 'none';
    keys.set_key_button.style.display = 'none';
    keys.download_key_button.style.display = 'none';
    keys.file_selector.style.display = 'none';

    abcd.title3.style.display = 'block';
//    abcd.div.appendChild(title1);


}

function hideProvideLiquidity(){
        abcd.title3.style.display = 'none';
}
var abc = window.localStorage.getItem("placeholder");
console.log("firsttimecheck is: " + abc == "null");

//hideCreateABet();
//determine first time?
function firstTime(){
console.log("in first time");
if (abc == null){
showAccountManagement();
}else{
tradeExplorer();
}
}

firstTime();

//abcd.oracle_list_pull();
 //   keys.copy_address_button.style.display = 'none';

var internalNonce;

//internalNonce = 0;
abcd.getBookMark();

//expertMode();


"use strict";
function dstOffsetAtDate(dateInput) {
    var fullYear = dateInput.getFullYear()|0;
    // "Leap Years are any year that can be exactly divided by 4 (2012, 2016, etc)
    //   except if it can be exactly divided by 100, then it isn't (2100,2200,etc)
    //    except if it can be exactly divided by 400, then it is (2000, 2400)"
    // (https://www.mathsisfun.com/leap-years.html).
    var isLeapYear = ((fullYear & 3) | (fullYear/100 & 3)) === 0 ? 1 : 0;
    // (fullYear & 3) = (fullYear % 4), but faster
    //Alternative:var isLeapYear=(new Date(currentYear,1,29,12)).getDate()===29?1:0
    var fullMonth = dateInput.getMonth()|0;
    return (
        // 1. We know what the time since the Epoch really is
        (+dateInput) // same as the dateInput.getTime() method
        // 2. We know what the time since the Epoch at the start of the year is
        - (+new Date(fullYear, 0)) // day defaults to 1 if not explicitly zeroed
        // 3. Now, subtract what we would expect the time to be if daylight savings
        //      did not exist. This yields the time-offset due to daylight savings.
        - ((
            ((
                // Calculate the day of the year in the Gregorian calendar
                // The code below works based upon the facts of signed right shifts
                //    • (x) >> n: shifts n and fills in the n highest bits with 0s 
                //    • (-x) >> n: shifts n and fills in the n highest bits with 1s
                // (This assumes that x is a positive integer)
                -1 + // first day in the year is day 1
                (31 & ((-fullMonth) >> 4)) + // January // (-11)>>4 = -1
                ((28 + isLeapYear) & ((1-fullMonth) >> 4)) + // February
                (31 & ((2-fullMonth) >> 4)) + // March
                (30 & ((3-fullMonth) >> 4)) + // April
                (31 & ((4-fullMonth) >> 4)) + // May
                (30 & ((5-fullMonth) >> 4)) + // June
                (31 & ((6-fullMonth) >> 4)) + // July
                (31 & ((7-fullMonth) >> 4)) + // August
                (30 & ((8-fullMonth) >> 4)) + // September
                (31 & ((9-fullMonth) >> 4)) + // October
                (30 & ((10-fullMonth) >> 4)) + // November
                // There are no months past December: the year rolls into the next.
                // Thus, fullMonth is 0-based, so it will never be 12 in Javascript
                
                (dateInput.getDate()|0) // get day of the month
                
            )&0xffff) * 24 * 60 // 24 hours in a day, 60 minutes in an hour
            + (dateInput.getHours()&0xff) * 60 // 60 minutes in an hour
            + (dateInput.getMinutes()&0xff)
        )|0) * 60 * 1000 // 60 seconds in a minute * 1000 milliseconds in a second
        - (dateInput.getSeconds()&0xff) * 1000 // 1000 milliseconds in a second
        - dateInput.getMilliseconds()
    );
}

// Demonstration:
var date = new Date(2100, 0, 1)
for (var i=0; i<12; i=i+1|0, date.setMonth(date.getMonth()+1|0))
    console.log(date.getMonth()+":\t"+dstOffsetAtDate(date)/60/60/1000+"h\t"+date);
date = new Date(1900, 0, 1);
for (var i=0; i<12; i=i+1|0, date.setMonth(date.getMonth()+1|0))
    console.log(date.getMonth()+":\t"+dstOffsetAtDate(date)/60/60/1000+"h\t"+date);

// Performance Benchmark:
console.time("Speed of processing 16384 dates");
for (var i=0,month=date.getMonth()|0; i<16384; i=i+1|0)
    date.setMonth(month=month+1+(dstOffsetAtDate(date)|0)|0);
console.timeEnd("Speed of processing 16384 dates");

function isDaylightSavingsInEffect(dateInput) {
    // To satisfy the original question
    return dstOffsetAtDate(dateInput) !== 0;
}


