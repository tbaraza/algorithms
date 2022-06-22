// https://javatpoint.com/comb-sort

function combSort(arr: number[]) {
    // same as bubblesort but the gap reduces by factor of 1.3
    // Time complexity  O(N^2)
    const n = arr.length;
    let gap = n;
    let shrink = 1.3;
    let swapped = true;

    while (gap !== 1 || swapped === true) {
        gap = Math.floor(gap/1.3);

        if (gap < 1) {
            gap = 1;
        }

        swapped = false;

        for (let i = 0; i < n - gap; i++) {
            if (arr[i] > arr[i + gap]) {
                const temp = arr[i];
                arr[i] = arr[i + gap];
                arr[i+gap] = temp;
                swapped = true;
            }
        }
    }

    return arr;
}
