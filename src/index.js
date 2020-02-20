module.exports = function reverse (n) {
    let f = '';
    for (let i = n.length - 1; n >= 0; i--)
      f += n[i];
    return f;
}
 
