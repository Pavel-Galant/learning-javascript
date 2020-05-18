//function mapOnReduce
Array.prototype.mapOnReduce = function(callback, thisArg) {
    return this.reduce((acc, value, index, arr) => {
        acc.push(callback.call(thisArg, value, index, arr))
        return acc;
    },[]);
}

console.log(Array(5,6,8,9).mapOnReduce(v => v*2));
console.log(Array({v:5,i:1}, {v:6,i:2}, {v:7,i:3}).mapOnReduce((v,index) => (v.v-v.i)*index));

//function filterOnReduce
Array.prototype.filterOnReduce = function(callback, thisArg) {
    return this.reduce((acc, value, index, arr) => {
        if (callback.call(thisArg, value, index, arr)) {
            acc.push(value);
        }
        return acc;
    },[]);
}

console.log(Array(-5,6,-8,9, 0, 56).filterOnReduce(v => (v>0)));
console.log(Array('Hello ', 'php', ' JavaScript ', 'Flutter', 'Dart').filterOnReduce((word) => {
    return word.trim() !== word;
}));