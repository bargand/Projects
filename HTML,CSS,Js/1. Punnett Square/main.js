function generateCasePermutations(str) {
    const results = [];
    
    function permute(prefix, index) {
        if (index === str.length) {
            results.push(prefix);
            return;
        }
        
        const char = str[index];
        // Choose lowercase
        permute(prefix + char.toLowerCase(), index + 1);
        // Choose uppercase
        permute(prefix + char.toUpperCase(), index + 1);
    }
    
    permute('', 0);
    return results;
}

// Example usage
const input = 'YyRr';  // Input string
const permutations = generateCasePermutations(input);

console.log(permutations);