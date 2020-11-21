//Check console to see the results
let n;
let array = []

function swap(array, firstIndex, secondIndex) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(array, left, right) {
    let index;
    if (array.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? array.length - 1 : right;
        index = partition(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }
    return array;
}

function firstTask() {
    for (let i = 0; i < n; i++) {
        array[i] = Math.random()
    }
    return array;
}

function secondTask() {
    let min = array[0];
    let max = array[0];
    let median;

    for (let i = 0; i < n; i++) {
        if (min > array[i]) {
            min = array[i];
        }
        if (max < array[i]) {
            max = array[i];
        }
    }

    let temp = quickSort(array, 0, n - 1)
    if (n % 2 === 0) {
        median = (temp[n / 2] + temp[n / 2 - 1]) / 2
    } else {
        median = temp[Math.round(n / 2) - 1]
    }
    return "Second Task: Minimal value: " + min + " Maximum value: " + max + " Median: " + median;
}

function thirdTask() {

    return quickSort(array, 0, n - 1);

}

function fourthTask() {
    let tagsCount = {}
    for (const tag of document.body.getElementsByTagName('*')) {
        if (tag.tagName in tagsCount) tagsCount[tag.tagName] += 1
        else tagsCount[tag.tagName] = 1
    }

    console.log(tagsCount);
}

n = 1234;
console.log("Array: " + firstTask());
console.log("Array Stats: " + secondTask());
console.log("QuickSort: " + thirdTask());
console.log("Tags Count: ");
fourthTask();
