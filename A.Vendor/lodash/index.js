#!/usr/bin/env node
let _ = require('../node_modules/lodash/index.js');

const ori = [{a:1, b:1}, {a:2, b:2}, {a:2, b:3}];

let maps = _.filter(ori, function(item){
    if (item.a !== 2) {
        let pic = _.pick(item, ['a']);
        return pic;
    }
});

// console.log(maps);

let takew = _.takeWhile(ori, function(item){
    if (item.a !== 2) {
        let pic = _.pick(item, ['a']);
        return pic;
    }
});

let redu = _.reduce(ori, function(aim, item) {
    if (item.a === 2) {
       aim.push(_.pick(item, ['b'])) ;
       return aim ;
    }
    return aim;
}, []);

// console.log(redu);

let at = _.at(null, 'b');
console.log(at);


at = _.get({a:5}, 'a');
console.log(at);

at = _.get(null, 'a', []);
console.log(_.isEmpty(at));

at = _.get(null, 'a', {});
console.log(_.isEmpty(at));

let a = [{b:1}, {b:2}];
console.log(_.find(a, {b:1}));