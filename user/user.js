// using node module notation

exports.sanitize = function(word){
    return word.toLowerCase().replace(/-/g,' ');
}
