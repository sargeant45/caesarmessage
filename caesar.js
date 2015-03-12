/* 
 * Caesar cipher
 * 
 * Copyright (c) 2015 Project Nayuki
 * All rights reserved. Contact Nayuki for licensing.
 * http://www.nayuki.io/page/caesar-cipher-javascript
 */

"use strict";


/*
 * Handles the HTML input/output for Caesar cipher encryption/decryption.
 * This is the one and only entry point function called from the HTML code.
 */
function doCrypt(isDecrypt) {
	var shift = parseInt(document.getElementsById("encode").value, 10);
	if (isDecrypt)
		shift = (26 - shift) % 26;
	var textElem = document.getElementById("regulartext");
	var message = document.getElementById("encodedtext");
	message.innerHTML = caesarShift(textElem.value, shift) + "<br> E: " shift;
}


/*
 * Returns the result of having each alphabetic letter of the given text string shifted forward
 * by the given amount, with wraparound. Case is preserved, and non-letters are unchanged.
 * Examples:
 *   caesarShift("abz",  0) = "abz"
 *   caesarShift("abz",  1) = "bca"
 *   caesarShift("abz", 25) = "zay"
 *   caesarShift("THe 123 !@#$", 13) = "GUr 123 !@#$"
 */
function caesarShift(text, shift) {
	var result = "";
		for (var i = 0; i < text.length; i++) {
		var c = text.charCodeAt(i);
		if      (c >= 65 && c <=  90) result += String.fromCharCode((c - 65 + shift) % 26 + 65);  // Uppercase
		else if (c >= 97 && c <= 122) result += String.fromCharCode((c - 97 + shift) % 26 + 97);  // Lowercase
		else                          result += text.charAt(i);  // Copy
	}
	return result;
	
}
