module.exports = {
	//Makes the tables initially
	createMentorTable: function() {return 'CREATE TABLE IF NOT EXISTS MENTORS(ID INT NOT NULL, FNAME VARCHAR(20) NOT NULL, LNAME VARCHAR(20) NOT NULL, CATEGORY VARCHAR(20) NOT NULL, DESCRIPTION VARCHAR(500),IMG VARCHAR(50), PRIMARY KEY (ID));'},
	createMentorDataTable: function() {return 'CREATE TABLE IF NOT EXISTS MENTORDATA(ID INT NOT NULL, USERNAME VARCHAR(20) NOT NULL, PWORD VARCHAR(20) NOT NULL, EMAIL VARCHAR(30), PHONE VARCHAR(15), PRIMARY KEY(ID));'},
	createSiteDataTable: function() {return 'CREATE TABLE IF NOT EXISTS SITEDATA(ID INT NOT NULL, PROFILE VARCHAR(30), NAME VARCHAR(40), CATEGORY VARCHAR(20), CDESCRIPTION VARCHAR(500), CNAME VARCHAR(20), CMATERIAL VARCHAR(2000), PRIMARY KEY(ID));'},
	//Pulls all mentors from the table
	allData: function(table) {return `SELECT * FROM "${table}";`},
	//Generic edit
	//Select all the data on a user from the table
	selectRow: function(table, id){return `SELECT * FROM ${table} WHERE ID = ${id};`},
	//Select categories of a type from MENTORS
	selectCategories: function(category) {return `SELECT ID, FNAME, LNAME, IMG FROM MENTORS WHERE CATEGORY = "${category}";`},
	//Insert a new user into the table -- needs variable names as they are in VALUES(...)
	//Update a user's public values -- note that ALL values except ID need to be accounted for, even if they are unchanged
	editPublicUser: function(fname, lname, category, description, img, id) {return `UPDATE MENTORS SET FNAME = ${fname}, LNAME = ${lname}, CATEGORY = ${category}, DESCRIPTION = ${description}, IMG = ${img} WHERE ID = ${id};`},
	//Update a user's private data
	editPrivateUser: function(pword, email, phone, id) {return `UPDATE MENTORDATA SET PWORD = "${pword}", EMAIL = "${email}", PHONE = "${phone}" WHERE ID = ${id}`},
	//Delete a user by ID number
	delUser: function(table, id){return `DELETE FROM "${table}" WHERE ID = ${id};`},
	//Number of rows for table
	countUser: function(table) {return `SELECT Count(*) FROM "${table}";`},
	getSite: function(id) {return `SELECT * FROM SITEDATA WHERE ID = ${id};`},
	fillSite: function(id, profile, name, category, cdescription, cname, cmaterial) {return `UPDATE SITEDATA SET PROFILE = "${profile}", NAME = "${name}", CATEGORY = "${category}", CDESCRIPTION = "${cdescription}", CNAME = "${cname}", CMATERIAL = "${cmaterial}" WHERE ID = ${id};`}
};
