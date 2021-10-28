console.log('table.js run..')


let array = [];

$('table tr').each(function () {
    let array_row = [];
    $(this).find('th, td').each(function () {
        array_row.push($(this).text());
    });
    array.push(array_row);
});

console.table(array);

let e = '';
for (let i = 1; i < array.length; i++) {

    e = '            <div>\n' +
        '                <span>' + array[0][0] + '</span>\n' +
        '                <span>' + array[i][0] + '</span>\n' +
        '            </div>\n' +
        '            <div class="d-flex justify-content-between">\n' +
        '                <span>' + array[0][1] + '</span>\n' +
        '                <span>' + array[i][1] + '</span>\n' +
        '            </div>\n' +
        '            <div class="d-flex justify-content-between">\n' +
        '                <span>' + array[0][2] + '</span>\n' +
        '                <span>' + array[i][2] + '</span>\n' +
        '            </div>\n' +
        '            <div class="d-flex justify-content-between">\n' +
        '                <span>' + array[0][3] + '</span>\n' +
        '                <span class="text-all-good">' + array[i][3] + '</span>\n' +
        '            </div>\n' +
        '            <div class="d-flex justify-content-between">\n' +
        '                <span>' + array[0][4] + '</span>\n' +
        '                <span>' + array[i][4] + '</span>\n' +
        '            </div>\n'

    $('#table-out').append('<div class="d-flex flex-column border-top py-2">' + e + '</div>');


}








