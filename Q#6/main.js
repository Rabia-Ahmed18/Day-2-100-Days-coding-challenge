// ----------------QUESTION #6--------------
// Stripping Name: Store a person's name and include some whitespace caharacters
//  at the beginning and end of the name.Make sure you use each character combination,
// "\t" and "\n" , at least once. Print the name once so the whitespaces around the name is displayed.
// Then print the name after stripping the whitespaces.
var personNameWithWhitespace = "\t\n  Rabia Ahmed  \n\t";
// print the name with whitespace
console.log("Name with whitespace :", personNameWithWhitespace);
// strip the  whitespace using .trim()
var strippedName = personNameWithWhitespace.trim();
// print the name after stripping whitespaces
console.log("strippped name:", strippedName);
