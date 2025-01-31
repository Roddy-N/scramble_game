// // script.js 

// const words = [ 
// 	"react", 
// 	"angular", 
// 	"javascript", 
// 	"bootstrap", 
// 	"tailwind", 
// ]; 

// // Respective list of hints 
// const hints = [ 
// 	"JavaScript framework", 
// 	"JavaScript Framework", 
// 	"Scripting Language", 
// 	"Styling Library", 
// 	"Styling Library", 
// ]; 
// Function to fetch and read CSV from a file path
function fetchCSV(filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load CSV file");
            }
            return response.text();
        })
        .then(data => {
            parseCSV(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

// Function to parse CSV data and store in lists
function parseCSV(data) {
    const lines = data.trim().split("\n"); // Split into lines
    const words = [];
    const hints = [];

    lines.forEach((line, index) => {
        if (index === 0) return; // Skip header row
        const [word, hint] = line.split(",");
        if (word && hint) {
            words.push(word.trim());
            hints.push(hint.trim());
        }
    });

    console.log("Countries:", words);
    console.log("Fact:", hints);
}


// Initialize display word 
let displayWord = ""; 

// Function to shuffle letters 
function shuffle(str) { 
	strArray = Array.from(str); 
	for (let i = 0; i < strArray.length - 1; ++i) { 
		let j = Math.floor(Math.random() * strArray.length); 
		// Swap letters 
		let temp = strArray[i]; 
		strArray[i] = strArray[j]; 
		strArray[j] = temp; 
	} 
	return strArray.join(" "); 
} 

// Function to check input and display result 
function check() { 
	let input = document.getElementById("input"); 
	let output = document.getElementById("output"); 
	if ( 
		input.value.toLocaleLowerCase() === 
		displayWord.toLocaleLowerCase() 
	) 
		output.innerHTML = "Result: Correct"; 
	else output.innerHTML = "Result: Incorrect"; 
} 

// To refresh and show new word 
function refresh() { 
	index = Math.floor(Math.random() * 5); 
	displayWord = words[index]; 
	displayHint = hints[index]; 
	scrambleWord = 
		document.getElementById("scrambleWord"); 
	scrambleWord.innerText = 
		shuffle(displayWord).toUpperCase(); 
	let hint = document.getElementById("hint"); 
	hint.innerHTML = "<b>Hint:</b> " + displayHint; 
	document.getElementById("output").innerText = "Result:"; 
} 

// Function call when page load for first time 
refresh();
