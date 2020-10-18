//Problem 1
console.log("\n Problem 1\n")
var favMovies = ["Frozen", "Fast n Furious", "The mummy", "Joker", "Descpicable Me"];
console.log(favMovies[1]);


//Problem 2
var movies = new Array(5);
console.log("\n Problem 2\n")
for (var i = 0; i < favMovies.length; i++) {
    movies[i] = favMovies[i];
}
console.log(movies[0]);


//Problem 3
console.log("\n Problem 3\n")
movies.splice(2, 0, "Transformers");
console.log(movies.length);


//Problem 4
console.log("\n Problem 4\n")
var movies = [];
for (var i = 0; i < favMovies.length; i++) {
    movies.push(favMovies[i]);
}
delete movies[0];
console.log(movies);


//Problem 5
console.log("\n Problem 5\n")
var favMovies = ["Frozen", "Fast n Furious", "The mummy", "Joker", "Descpicable Me", "Eclipse", "Captain Philips"];
var movies = [];


for (var i = 0; i < favMovies.length; i++) {
    movies.push(favMovies[i]);
}


for (var j = 0; j < movies.length; j++) {
    console.log(movies[j]);
}


//Problem 6
console.log("\n Problem 6\n")
for (index in movies) {
    console.log(movies[index]);
}


//Problem 7
console.log("\n Problem 7\n")
var sortedMovies = movies.sort();
for (index in sortedMovies) {
    console.log(sortedMovies[index]);
}


//Problem 8
console.log("\n Problem 8\n")
var leastFavMovies = ["The ring", "Annabelle", "James Bond"];
var favMovies = movies;

console.log("\nMovies I like:\n\n" + favMovies.join("\n") +
            "\n\nMovies I regret watching:\n\n" + leastFavMovies.join("\n") + "\n\n");

//Problem 9
console.log("\n Problem 9\n")
var movies = favMovies.concat(leastFavMovies);
var reverseSort = movies.sort().reverse();

console.log(reverseSort.join("\n"));

//Problem 10
console.log("\n Problem 10\n")
console.log(reverseSort.pop());