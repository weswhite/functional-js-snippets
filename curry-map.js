//curry in map
var objects = [{ id: 1 }, { id: 2 }, { id: 3 }]

//no curry, no reuse
objects.map(function(o){ return o.id })

//curry
var curry = require('curry')
var get = curry(function(property, object){ return object[property] })
objects.map(get('id')) //= [1, 2, 3]

//https://hughfdjackson.com/javascript/why-curry-helps/

var map = curry(function(fn, value){ return value.map(fn) })
var getIDs = map(get('id'))

getIDs(objects) //= [1, 2, 3]
