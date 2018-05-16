"use strict";

$("#header").load('header.html');        
$("#footer").load('footer.html');    

// Global variables used by our Dapp
var contract_address = "n1e1yPaui6CiG9oqSGo4fxAdK1beDog7S88";

var NebPay = require("nebpay");
var nebPay = new NebPay();

//to check if the extension is installed
//if the extension is installed, var "webExtensionWallet" will be injected in to web page
if(typeof(webExtensionWallet) === "undefined"){
    alert ("Extension wallet is not installed, please install it first.")
}