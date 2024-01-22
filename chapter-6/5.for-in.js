var mobilePhone = {
    brand: 'Samsung',
    model: 'Galaxy Note 9',
    color: 'Midnight Black',
    price: 999,
    isInsured: true
};
// console.log(mobilePhone["brand"])
for(var key in mobilePhone) {
    console.log(key, "...", mobilePhone[key]);
} 