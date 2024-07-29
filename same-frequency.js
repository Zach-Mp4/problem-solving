function freqCounter(int) {
    const frequency = {};
    const str = String(int);
    for (let char of str) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    return frequency;
}

// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    const freq1 = freqCounter(int1);
    const freq2 = freqCounter(int2);

    for (let key in freq1){
        if (freq1[key] !== freq2[key]){
            return false;
        }
    }
    return true;
}
