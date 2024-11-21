const apiKey = 'service.b054df1d7e004db2b3bb0150e9930776';
const address = 'دانشگاه فنی و مهندسی باهنر شیراز';

fetch(`https://api.neshan.org/v6/geocoding?address=${encodeURIComponent(address)}`, {
    method: 'GET',
    headers: {
        'Api-Key': apiKey,
    },
})
.then(response => {
    return response.json();
})
.then(data => {
    const arz = data.location.y;
    const tul = data.location.x;
    alert(`مختصات آدرس وارد شده: عرض ${arz}، طول ${tul}`);
})