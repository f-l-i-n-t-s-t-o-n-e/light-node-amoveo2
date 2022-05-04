async function publishSwap(offer){
//    var div = document.getElementById("publish_swap_offer");
//    var display = document.createElement("p");
//    div.appendChild(display);
    console.log("inside publishSwap" + JSON.stringify(offer));
    var s_ip = get_ip();
//    div.appendChild(br());
//    s_ip.value = get_ip();
    
    var s_port = "8090";
//    div.appendChild(br());

//    s_port.value = "8090";
var offer2 = offer;
//    var offer = text_input("offer: ", div);
//    div.appendChild(br());

//    var button = button_maker2("publish the offer", publish);
    
//    div.appendChild(button);
//    div.appendChild(br());

    async function publish(){
        console.log("QQQQ offer is: " + offer);
        var x = offer2;
        var cid1 = x[1][4];
        var zero = btoa(array_to_string(integer_to_array(0,32)));
        if(!(cid1 == zero)){
            var first = await rpc.apost(["read", 3, cid1], s_ip, parseInt(s_port));
            if(first == 0){
                display.innerHTML = "contract "
                    .concat(cid1)
                    .concat(" is unknown to the server");
                return(0);
            } else {
                return(publish2(zero, x));
            }
        } else {
            return(publish2(zero, x));
        };
    };
    async function publish2(zero, x) {
        var cid2 = x[1][7];
        var second_offer = 0;
        if(!(cid2 == zero)){
            var second = await rpc.apost(["read", 3, cid2], s_ip, parseInt(s_port));
            if(second == 0) {
                display.innerHTML = "contract "
                    .concat(cid2)
                    .concat(" is unknown to the server");
                return(0);
            } else {
                if(second[0] == "binary"){
                    var f = swaps.unpack(x);
                    var C = {
                        acc1: keys.pub(),
                        end_limit: 9999999999,
                        amount1: f.amount2,
                        cid1: f.cid2,
                        type1: f.type2,
                        amount2: Math.floor(f.amount2 * 0.99),
                        fee1: 200000,
                        nonce: f.nonce
                        };
                    second_offer = swaps.pack(C);
                };
                return(publish3(x, second_offer));
            }
        } else {
            return(publish3(x, 0));
        }
    };
    async function publish3(x, second_offer){
        var z = await rpc.apost(["add", x, second_offer], s_ip, parseInt(s_port));
    //    display.innerHTML = "successfully sent the swap offer to the server.";
    };

    publish();

    return({ip: function(x){ s_ip = x},
            port: function(x){ s_port = x},
            offer: function(x){ offer = x},
            publish: publish
           });
}
