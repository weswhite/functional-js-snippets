function negate(func){
  return function(){
    return !func.apply(null, arguments);
  }
}

function isNull(val){
  return val===null;
}

va isNotNull = negate(isNull)

isNotNull(null) //false
isNotNull({})//true
