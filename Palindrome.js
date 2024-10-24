function palindrome(str) {
    const cleanedString = str.replace(/[A-Za-z0-9]/g, '').toLowerCase();

    return cleanedString === cleanedString.split(" ").reverse().join('');
}
console.log(palindrome('eye'));