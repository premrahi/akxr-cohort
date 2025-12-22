function capitalizeWords(sentence) {
    if (!sentence || typeof sentence !== 'string') return "";

    var result = sentence
        .trim()                          
        .toLowerCase()                   
        .split(/\s+/)                    
        .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');                      
    console.log(result);
    return result;
}

//For the purpose of user debugging.
capitalizeWords("Javascript Is Fun");