// Question 2 : creation of allBooks' array

let allBooks ;

// Question 3 : initilisation of the array

allBooks = [
    {
        title :  "Go easy",
        author : "Abel Ngbandaman",
        image : "",
        alreadyRead : false
    },
    {
        title :  "Go easy on me",
        author : "Noel Ngban",
        image : "",
        alreadyRead : true
    }
]

// Question 4 :
bookProperties = ['title','author','image','alreadyRead']; //


// creation of table
let table = document.createElement('table');
table.style.border = '2px solid'; // add border 
document.querySelector('div').appendChild(table);

// filling out the table

for (let rowNumber = 0; rowNumber < 3; rowNumber++) {

    // creation of table lines 
    let tr = document.createElement('tr'); 
    tr.setAttribute('id',`${rowNumber}`);
    document.querySelector('table').appendChild(tr);

    // creation of table columns
    if(rowNumber === 0){ 
        bookProperties.forEach(bookPropertie => {
        let newTd = document.createElement('td')  
        let newTextNode = document.createTextNode(bookPropertie);
        newTd.appendChild(newTextNode);
        newTd.style.border = '1px solid'; // add border
        
        // add colums to the row
        document.getElementById(`${rowNumber}`).appendChild(newTd);
        });
    } else {
        bookRow = allBooks[rowNumber - 1];
        for(book in bookRow){
        //creation of columns
        let newTd = document.createElement('td')  
        let newTextNode = document.createTextNode(bookRow[book]);
        newTd.appendChild(newTextNode);
        newTd.style.border = '1px solid'; // add border
        
        // add colums to the row
        document.getElementById(`${rowNumber}`).appendChild(newTd);
        }

        console.log(`${bookRow['title']}  written by ${bookRow['author']}`); // display the book's  title and book's author

        // change color books already read
        if(bookRow['alreadyRead'] === true)
            document.getElementById(`${rowNumber}`).style.color = 'red'; 
    }   
}
