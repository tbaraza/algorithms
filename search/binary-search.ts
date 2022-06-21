function binarySearch(arr: number[], searchItem: number) {
    // sort first
    const sorted = arr.sort((a, b) => a - b);

    // recursive search
    let startIndex = 0;
    let endIndex = arr.length - 1;

    return doSort(sorted, startIndex, endIndex, searchItem)
}

function doSort(arr: number[], start: number, end: number, searchItem: number): any {
    console.log(start, end)
    if (start > end) {
        return -1;
    }

    const mid = Math.ceil((start + end)/2)

    if (arr[mid] === searchItem) {
        return mid;
    }

    if (arr[mid] < searchItem) {
        return doSort(arr, mid + 1, end, searchItem)
    }

    if (arr[mid] > searchItem) {
        return doSort(arr, start, mid - 1, searchItem);
    }
}
// 3, 17, 22, 56, 98
const arr = [56, 3, 98, 17, 22]
console.log('search---', binarySearch(arr, 67))
console.log('search---', binarySearch(arr, 3))
console.log('search---', binarySearch(arr, 98))
console.log('search---', binarySearch(arr, 22))