const arr = [1, 2, 3, 4, 5, -6];

const first = arr[0];
const last = arr[arr.length - 1];

const chet = [];
const neChet = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) chet.push(arr[i]);
    else neChet.push(arr[i]);
}

const num = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) continue;
    num += arr[i] * arr[i];
}

const middleNum = 0;
for (let i = 0; i < arr.length; i++) {}
