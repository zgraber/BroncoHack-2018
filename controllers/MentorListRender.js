var path  = require('path');

var mentorArray=[];

var mentor1={
    "ID": 11,
    "FNAME": "William",
    "LNAME": "Graber",
    "IMG": "test1.jpg"
}
var mentor2={
    "ID": 22,
    "FNAME": "Carter",
    "LNAME": "Tran",
    "IMG": "test2.jpg"
}
var mentor3={
    "ID": 33,
    "FNAME": "Ari",
    "LNAME": "Zhang",
    "IMG": "test3.jpg"
}

var mentor4={
    "ID": 44,
    "FNAME": "John",
    "LNAME": "LASTNAME",
    "IMG": "test4.jpg"
}
mentorArray.push(mentor1);
mentorArray.push(mentor2);
mentorArray.push(mentor3);
mentorArray.push(mentor4);

console.log(mentorArray);


exports.renderList = function(req, res){
    res.render("mentorList",{mentorArray:mentorArray});
};

