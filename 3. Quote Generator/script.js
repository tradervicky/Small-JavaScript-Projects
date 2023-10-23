function generate(){
var quotes = {
    "Deepak Chopra" :  "“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”",

    "Jules Renard, The Journal of Jules Renard" : "“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”",
    "Pierce Brown, Red Rising" : "“Man cannot be freed by the same injustice that enslaved it.”",
    "Henry D. Thoreau" : "“The preachers and lecturers deal with men of straw, as they are men of straw themselves. Why, a free-spoken man, of sound lungs, cannot draw a long breath without causing your rotten institutions to come toppling down by the vacuum he makes. Your church is a baby-house made of blocks, and so of the state.",
    "Alexandre Dumas, The Count of Monte Cristo" : "“How did I escape? With difficulty. How did I plan this moment? With pleasure.”",
    "Nelson Mandela" : "“It is said that no one truly knows a nation until one has been inside its jails. A nation should not be judged by how it treats its highest citizens, but its lowest ones.”"
}


var authors = Object.keys(quotes);
var author = authors[Math.floor(Math.random()*authors.length)];
var quote = quotes[author];
document.getElementById("quote").innerHTML = quote;
document.getElementById("author").innerHTML = author;

}