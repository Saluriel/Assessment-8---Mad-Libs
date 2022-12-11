function addCommas(num) {
    // The toLocaleString() method returns a string with a language-sensitive representation of this number.
    let str = num.toLocaleString("en-US")
    return str;
}

module.exports = addCommas;