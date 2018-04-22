module.exports = {
	//Makes the tables initially
	createTable: function() {return 'CREATE TABLE IF NOT EXISTS MENTORS(ID INT NOT NULL, FNAME VARCHAR(20) NOT NULL, LNAME VARCHAR(20) NOT NULL, CATEGORY VARCHAR(20) NOT NULL, DESCRIPTION VARCHAR(500),IMG VARCHAR(50), PRIMARY KEY (ID));'},

	//Pulls all mentors from the table
	allData: function(table) {return `SELECT * FROM "${table}";`},
	//Select all the data on a user from the table
	selectRow: function(table, id){return `SELECT * FROM ${table} WHERE ID = ${id};`},
	//Select categories of a type from MENTORS
	selectCategories: function(category) {return `SELECT ID, FNAME, LNAME, IMG FROM MENTORS WHERE CATEGORY = "${category}"`},
	//Insert a new user into the table -- needs variable names as they are in VALUES(...)
	newUser: function(table, id, fname, lname, category, description, img, tier) {return `INSERT INTO "${table}"(ID, FNAME, LNAME, CATEGORY, DESCRIPTION, IMG, TIER) VALUES(${id}, "${fname}", "${lname}", "${category}", "${description}", "${img}", ${tier});`},
	//Update a user's values -- note that ALL values except ID need to be accounted for, even if they are unchanged
	editUser:function(table, fname, lname, category, description, img, tier, id) {return `UPDATE "${table}" SET FNAME = ${fname}, LNAME = ${lname}, CATEGORY = ${category}, DESCRIPTION = ${description}, IMG = ${img}, TIER = ${tier} WHERE ID = ${id};`},
	//Delete a user by ID number
	delUser: function(table, id){return `DELETE FROM "${table}" WHERE ID = "${id}"`},
	//Number of rows for table
	countUser: function(table) {return `SELECT COUNT ID FROM "${table}"`}
};
