//Rumus menghitung luas persegi
function kelilingPersegi(num) {
    return num + num + num + num;
}

//rumus menghitung keliling persegi
function luasPersegi(num) {
    return num * num
}

//rumus menghitung luas persegi panjang
function luasPersegiPanjang(p, l) {
    return p * l
}

//rumus mneghitung keliling persegi panjang
function kelPersegiPanjang(p, l) {
    return 2 * (p + l)
}

module.exports = {
    kelilingPersegi : kelilingPersegi,
    luasPersegi : luasPersegi,
    luasPersegiPanjang : luasPersegiPanjang,
    kelPersegiPanjang : kelPersegiPanjang,
}