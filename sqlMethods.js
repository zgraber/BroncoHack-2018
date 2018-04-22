module.exports = {
	//Makes the table initially
	createTable: 'CREATE TABLE IF NOT EXISTS MENTORS(ID INT NOT NULL, FNAME VARCHAR(20) NOT NULL, LNAME VARCHAR(20) NOT NULL, CATEGORY VARCHAR(20) NOT NULL, DESCRIPTION VARCHAR(500),IMG VARCHAR(50), TIER INT, PRIMARY KEY (ID));',
	//Pulls all mentors from the table
	allMentors: 'SELECT * FROM MENTORS;',
	//Select all the data on a user from the table
	mentor: function(id){return `SELECT * FROM MENTORS WHERE ID = ${id};`},
	//Insert a new user into the table -- needs variable names as they are in VALUES(...)
	newUser: function(id, fname, lname, category, description, img, tier) {return `INSERT INTO MENTORS(ID, FNAME, LNAME, CATEGORY, DESCRIPTION, IMG, TIER) VALUES(${id}, "${fname}", "${lname}", "${category}", "${description}", "${img}", ${tier});`},
	//Update a user's values -- note that ALL values except ID need to be accounted for, even if they are unchanged
	editUser:function(fname, lname, category, description, img, tier, id){ return `UPDATE MENTORS SET FNAME = ${fname}, LNAME = ${lname}, CATEGORY = ${category}, DESCRIPTION = ${description}, IMG = ${img}, TIER = ${tier} WHERE ID = ${id};`}
};
