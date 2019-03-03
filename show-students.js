//imperative

function showStudents(ssn) {
  var student = db.get(ssn);
  if(student !== null){
    document.querySelector(`#${elementId}`).innerHtml = 
      `${student.ssn},
       ${student.firstName},
       ${student.lastName}`;
  } else {
    throw new Error('Student not found!');
  }
}

showStudent('444-44-4444');

//decomposing functionally

var find = curry(function (db, id){
  var obj = db.get(id);
  if(obj === null) {
    throw new Error('Object not found');
  }
  return obj
})
var csv = (student) {
  return `${student.ssn}, ${student.firstName}, ${student.lastName}`;
}
var append = curry(function (elementId, info){
  document.querySelector(elementId).innerHtml = info;
})

var showStudent = run(
  append('#student-info'),
  csv,
  find(db));
  
showStudent('444-44-4444');
