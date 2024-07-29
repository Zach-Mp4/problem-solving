// add whatever parameters you deem necessary
function averagePair(arr, avg) {
    //initialize pointers
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let currentAvg = (arr[left] + arr[right]) / 2;

        if (currentAvg === avg) {
            return true;
        } else if (currentAvg < avg) {
            left++;
        } else {
            right--;
        }
    }
    
    //return false if there is no match
    return false;

}
