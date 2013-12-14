// Homework 5

// This homework assignment will give you practice working with the DOM.

// Review the code we wrote in class by going here:

// https://github.com/galdamez/ca276-fall2013/blob/master/week9/wk9.js

// You'll be able to derive all your answers from what is in this file.


// Problem 1

// Using the W3C functions document.createElement(), document.createTextNode(), 
// and document.body.appendChild(), append the following HTML to the page.

// <dl>
// 	<dt>Some word</dt>
// 	<dd>Some definition</dd>
// </dl>

// You'll have to use document.createElement() for each HTML element (i.e. tag).
// You'll have to use document.createTextNode() for anything that is just text.
// When you have your DOM nodes ready, call document.body.appendChild() to append
// to the end of the body element.

// Feel free to replace "Some word" and "Some definition" with text of your 
// choosing. If you need ideas check out http://wordsmith.org/words/random.cgi

// Inject onto page using the W3C API

var modal, mask, word, definition, wordTextNode, definitionTextNode, boldTag, dlTag, dtTag, ddTag;

// Create text node
word = 'Palindrome';
wordTextNode = document.createTextNode(word);
definition = 'A word (such as "level"), a compound (such as "race car"), or a longer statement that communicates the same message when the letters of which it is composed are read in reverse order.The most famous palindrome is MADAM, IM ADAM (Adam\'s introduction of himself, in English, of course how convenient to Eve, the mother of all palindromes), but my personal favorite is the wiggy, loopy, lunatic GO HANG A SALAMI. IM A LASAGNA HOG. And let\'s tip our collective hat to the astonishingly long yet coherent DOC, NOTE, I DISSENT. A FAST NEVER PREVENTS A FATNESS. I DIET ON COD.';
definitionTextNode = document.createTextNode(definition);

// Create bold tag
boldTag = document.createElement('strong');

// Create definition list tag
dlTag = document.createElement('dl');

// Create definition term tag
dtTag = document.createElement('dt');

// Create definition description tag
ddTag = document.createElement('dd');

// Attach definition list and textnode to the modal node
dlTag.appendChild(dtTag);
dtTag.appendChild(boldTag);
boldTag.appendChild(wordTextNode);
dlTag.appendChild(ddTag);
ddTag.appendChild(definitionTextNode);

// Append node to page
document.body.appendChild(dlTag);



// Problem 2

// Do the same thing as problem 1 only insert your HTML using the innerHTML
// property of the DIV with id="definitions".

// Inject onto page using innerHTML

var definitions;

// Find a parent container to insert into
definitions = document.getElementById('definitions');

// Change the inner HTML of that definitions node
definitions.innerHTML += '<dl><dt><strong>Palindrome</strong></dt><dd>A word (such as "level"), a compound (such as "race car"), or a longer statement that communicates the same message when the letters of which it is composed are read in reverse order.The most famous palindrome is MADAM, IM ADAM (Adam\'s introduction of himself, in English, of course how convenient to Eve, the mother of all palindromes), but my personal favorite is the wiggy, loopy, lunatic GO HANG A SALAMI. IM A LASAGNA HOG. And let\'s tip our collective hat to the astonishingly long yet coherent DOC, NOTE, I DISSENT. A FAST NEVER PREVENTS A FATNESS. I DIET ON COD.</dd></dl>';

// Problem 3

// Do the same as Problem 2 only use the jQuery code we did in class. For 
// this problem you won't need to worry about setting up a click handler.
// Just worry about the code that does the text appending.

//jQuery approach
// Locate the parent container by way of a CSS selector
// Afterwards, append each HTML snippet one by one
$('#definitions')
	.append('<dl><dt><strong>Palindrome</strong></dt><dd>A word (such as "level"), a compound (such as "race car"), or a longer statement that communicates the same message when the letters of which it is composed are read in reverse order.The most famous palindrome is MADAM, IM ADAM (Adam\'s introduction of himself, in English, of course how convenient to Eve, the mother of all palindromes), but my personal favorite is the wiggy, loopy, lunatic GO HANG A SALAMI. IM A LASAGNA HOG. And let\'s tip our collective hat to the astonishingly long yet coherent DOC, NOTE, I DISSENT. A FAST NEVER PREVENTS A FATNESS. I DIET ON COD.</dd></dl>');