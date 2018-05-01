

var mentorArray=[];

var mentor1={
    "ID": 11,
    "FNAME": "William",
    "LNAME": "Graber",
    "IMG": "./micro.jpg"
}
var mentor2={
    "ID": 22,
    "FNAME": "Carter",
    "LNAME": "Tran",
    "IMG": "./shlong.jpg"
}
var mentor3={
    "ID": 33,
    "FNAME": "Ari",
    "LNAME": "Zhang",
    "IMG": "./dik.jpg"
}
mentorArray.push(mentor1);
mentorArray.push(mentor2);
mentorArray.push(mentor3);

console.log(mentorArray);

exports.renderList = function(req, res){
    res.render("mentorList",{mentorArray:mentorArray});
};

