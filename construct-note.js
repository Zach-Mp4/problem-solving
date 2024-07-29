function freqCounter(str) {
    const frequency = {};

    for (let char of str) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    return frequency;
}

function constructNote(message, letters) {
    if (message.length === 0) return true;
    if(letters.length === 0) return false;
    const freqMsg = freqCounter(message);
    const freqLet = freqCounter(letters);
    
    for (let key in freqMsg){
        if (freqMsg[key] > freqLet[key]){
            return false;
        }
    }
    return true;
}
