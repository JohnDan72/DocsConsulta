
// binaria
const binarySearch = (busca = null, data = []) => {
    let left = 0, right = data.length - 1;

    let response = {
        ok: false,
        errors: [{ msg: 'El elemento no se encuentra' }]
    };

    while (left <= right) {
        const middle = Math.trunc((left + right) / 2);
        if (data[middle] == busca) {
            response = {
                ok: true,
                index: middle
            }
            break;
        }
        if (data[middle] < busca) left = middle + 1;
        else right = middle - 1;
    }

    return response;
}
const data = [];
for (let i = 0; i < 100; i++) {
    data.push(i + 1);
}
const busca = 887;
console.log(binarySearch(busca, data));