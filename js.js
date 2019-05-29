let inputWidth;
let inputHeight;

inputWidth = prompt('Nhap chieu rong :');
inputHeight = prompt('Nhap chieu dai :');

let wight = parseInt(inputWidth);
let height = parseInt(inputHeight);

let area = wight*height;

document.write('Dien tich cua hinh chu nhat la : ' + area);