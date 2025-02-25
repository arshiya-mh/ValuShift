function convert() {
    let inputValue = document.getElementById('inputValue').value;
    let inputUnit = document.getElementById('inputUnit').value;
    let result;
    switch (inputUnit) {
        case 'meters':
            result = inputValue / 1000 + ' کیلومتر';
            break;
        case 'kilometers':
            result = inputValue * 1000 + ' متر';
            break;
        case 'grams':
            result = inputValue / 1000 + ' کیلوگرم';
            break;
        case 'kilograms':
            result = inputValue * 1000 + ' گرم';
            break;
        case 'celsius':
            result = (inputValue * 9/5) + 32 + ' فارنهایت';
            break;
        case 'fahrenheit':
            result = (inputValue - 32) * 5/9 + ' سانتی‌گراد';
            break;
        case 'liters':
            result = inputValue * 1000 + ' میلی‌لیتر';
            break;
        case 'milliliters':
            result = inputValue / 1000 + ' لیتر';
            break;
        default:
            result = 'واحد معتبر نیست';
    }




    document.getElementById('result').textContent = 'نتیجه: ' + result;
}




