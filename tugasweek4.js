function mencariAngkaAcak() {
    return Math.floor(Math.random() * 50) + 1;
}

function splitArray(arr) {
    let arrayGanjil = [];
    let arrayGenap = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arrayGenap.push(arr[i]);
        } else {
            arrayGanjil.push(arr[i]);
        }
    }

    return { arrayGanjil, arrayGenap };
}

function menghitungArray(arr) {
    let total = 0;
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];

        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }
    }

    let average = total / arr.length;

    return { min, max, total, average };
}

function membandingkanArray(array1, array2) {
    let comparison = {
        min: array1.min > array2.min ? "Min lebih besar array genap" : "Min lebih besar array ganjil",
        max: array1.max > array2.max ? "Max lebih besar array genap" : "Max lebih besar array ganjil",
        total: array1.total === array2.total ? "Total memiliki nilai sama antara array genap dan ganjil" : "Total memiliki nilai berbeda antara array genap dan ganjil",
        average: array1.average > array2.average ? "Rata-rata lebih besar array genap" : "Rata-rata lebih besar array ganjil"
    };

    return comparison;
}

let fullArray = [];
for (let i = 0; i < 100; i++) {
    fullArray.push(mencariAngkaAcak());
}

let arrays = splitArray(fullArray);
let evenStats = menghitungArray(arrays.arrayGanjil);
let oddStats = menghitungArray(arrays.arrayGenap);
let comparison = membandingkanArray(evenStats, oddStats);

console.log("Full Array:", fullArray);
console.log("Array Ganjil:", arrays.arrayGanjil);
console.log("Array Genap:", arrays.arrayGenap);
console.log("Array Ganjil Stats:", evenStats);
console.log("Odd Array Stats:", oddStats);
console.log("Comparison:", comparison);
