// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: Apr 2024
// This file contains the JS functions for index.html
"use strict"

function myButtonClicked() {
 // input
 const fahrenheitTemp = parseFloat(document.getElementById("fahrenheit-temp").value)

 // process
 const celsiusTemp = (fahrenheitTemp - 32) * 5.0 / 9.0
 const finalAnswer = celsiusTemp.toFixed(2)

 // output
 document.getElementById("fahren-to-celsius").innerHTML =
   "The temperature in Celsius is " + finalAnswer + "C°."
}