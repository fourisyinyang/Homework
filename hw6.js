// CA 276 Homework 6

// DOM Access

// Instructions: Using document.querySelectorAll and CSS selectors, obtain references to the following
// DOM nodes. I've already written calls to document.querySelectorAll(). You just have to fill in the
// CSS selector.

// If you get stuck use this page as a guide: http://www.w3.org/TR/css3-selectors/#selectors

// All LI elements

console.log(document.querySelectorAll('li'));

// All LI elements that are the descendants of an OL element

console.log(document.querySelectorAll('ol li'));

// All elements with the class name "highlight"

console.log(document.querySelectorAll('.highlight'));

// Any element under a form tag (hint: the asterisk is the wild card in CSS)

console.log(document.querySelectorAll('form > *'));

// All elements with the IDs "movies", "companies", or "fast_food" 
// (hint: use the comma to separate selectors)

console.log(document.querySelectorAll('#movies, #companies, #fast_food'));

// All elements that have an ID attribute

console.log(document.querySelectorAll('[id]'));

// All elements that have an ID attribute that ends with the letter "s"

console.log(document.querySelectorAll('[id $= s]'));

// The first child LI element of all lists, ordered or unordered

console.log(document.querySelectorAll('ol > li:first-child, ul > li:first-child'));

// The second child LI element of all lists, ordered or unordered

console.log(document.querySelectorAll('ol > li:nth-child(2), ul > li:nth-child(2)'));

// All elements that are empty

console.log(document.querySelectorAll('*:empty'));  //Is this right? My console log is diplaying the last p tag which is empty, but as well as the entire form. I can image this is happening because the form has not yet being filled and simply of being hidden.

// All elements that are checked

console.log(document.querySelectorAll('*:checked'));

// All radio buttons

console.log(document.querySelectorAll('[type=radio]'));

// All radio buttons that are checked

console.log(document.querySelectorAll('[type=radio]:checked'));

// All TDs that represent the 2nd column in the table with ID "names"

console.log(document.querySelectorAll('#names>tbody>tr>td:nth-child(2)'));

// All elements with the class name "hidden" that are not form elements

console.log(document.querySelectorAll('.hidden:not(form)'));

// All even TRs that are descendants of a TBODY

console.log(document.querySelectorAll('tbody>tr:nth-child(even)'));

// All odd TRs that are descendants of a TBODY

console.log(document.querySelectorAll('tbody>tr:nth-child(odd)'));


// OPTIONAL: Using what you know about arrays and accessing the DOM, write a function 
// that sorts the table with the ID "names". Your sort order will be ascending alphabetical 
// by last name. There are several ways to solve this. Below is an explanation of the logic for 
// one possible solution (feel free to skip this if you want to try out your own own algorithm):

// 1) append a new TBODY to the table (it is possible to have two TBODY tags in TABLE)
// 2) loop through all of the TR elements
// 3) insert each TR into the new TBODY. 
// 4) SORT LOGIC: During the loop you will need to place the new TR before the first TR 
// with a value greater than itself. If you were trying to insert the row with the last name “Boop” 
// into the TBODY below

/*
<tbody>
	<tr>
		<td>1</td>
		<td>John</td>
		<td>Doe</td>
	</tr>
</tbody>

the new row would go before it.

<tbody>
	<tr>
		<td>2</td>
		<td>Betty</td>
		<td>Boop</td>
	</tr>
	<tr>
		<td>1</td>
		<td>John</td>
		<td>Doe</td>
	</tr>
</tbody>
*/

// This technique is referred to as the Bubble sort. The rows with the highest values will 
// "bubble" towards the end.

// 5) Remove the empty TBODY element from the DOM tree.

// Attemping optional problem

// I finished this assignment in under 1 hour, spent about 6 hours working on this optional problem. I was NOT able to get it to work. I got it partially working with my own algorithm. It wasn't a really good approach since I was keep going in circle. I was able to extract all the last name from the list and sort them accordingly. However, I hit a dead end trying to append them back to a new table. Please see my code.

var arrayOfLastNamesInTD = document.querySelectorAll('#names>tbody>tr>td:nth-child(3)'); // Extract last name column from list
var arrayOfTR = document.querySelectorAll('#names>tbody>tr'); // Extract all tr from list
var arrayOfLastName = [9]; // An array to hold last names in text
var newArray = [9]; // Attempted to hold the sorted list with Tr elements
var newArray1 = []; // Tried to put all Td text in an array but failed.


/*for(i = 0; i < arrayOfTR.length; i++) {

   console.log(arrayOfTR[i]);
} // All Tr row captured

for(i = 0; i < arrayOfLastNamesInTD.length; i++) {

   console.log(arrayOfLastNamesInTD[i]);
} // Last name column captured*/

getLastName(arrayOfLastNamesInTD);
bubbleSort(arrayOfLastName);

for(i = 0; i < arrayOfLastName.length; i++) {

   console.log(arrayOfLastName[i]);
} // Sorted by last name

for (i = 0; i < arrayOfLastName.length; i++) {

	for (j = 0; j < arrayOfLastName.length; j++) {

		if (arrayOfLastNamesInTD[j].innerHTML === arrayOfLastName[i]) {
				newArray[i] = arrayOfTR[j].innerHTML;				
			}
	}

} // Putting sorted last name back with their associated Tr items


for(i = 0; i < newArray.length; i++) {

   console.log(newArray[i]);
} // Sorted by last name with td tags

// I got stuck here. Didn't know how to append what I have done back to the html page.

var newTBodyTag = document.createElement('tbody'), 
	newTRTag = document.createElement('tr'), 
	newTDTag1 = document.createElement('td'), 
	newTDTag2 = document.createElement('td'), 
	newTDTag3 = document.createElement('td');

/*var oldtbody = document.querySelector('tbody');
oldtbody.parentNode.removeChild(oldtbody);*/ // Remove tbody from html

//newTBodyTag.appendChild(newArray);

/*for(i = 0; i < newArray.length; i++) {
	newTBodyTag.appendChild(newArray[i])
   
}*/

//document.body.appendChild(newTBodyTag);



function getLastName(arr) {

	for(i = 0; i < arrayOfLastNamesInTD.length; i++) {

   		arrayOfLastName[i] = arrayOfLastNamesInTD[i].innerHTML;   		
      
	}
} // Extract last names to an array

function bubbleSort(a)
{
    var swapped;
    do {
        swapped = false;
        for(i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
} // Bubble sort

 // I gave up after 6 to 7 hours of try and error. I know I am doing something wrong and might have came up with some stupid algorithm. I am sure there is better and more efficient way to do this. I am beat.