function countPairs(arr, target) {
    const seen = new Set();
    let pairCount = 0;

    for (let num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            pairCount++;
        }
        seen.add(num);
    }

    return pairCount;
}
