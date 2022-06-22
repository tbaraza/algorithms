// https://javatpoint.com/bubble-sort
function bubble(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        console.log('I', i)
        for (let j = i + 1; j < arr.length; j++) {
            console.log('J', j, arr[j]);
            console.log('val', arr[i])
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        console.log('break', arr)
    }

    return arr;
}

const arrr = [13, 32, 26, 35, 10]
console.log('bubble', bubble(arrr));