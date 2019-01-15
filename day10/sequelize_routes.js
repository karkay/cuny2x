const Hat = require('./sequelize_practice').Hat;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//to accept req body in json
app.use(bodyParser.json());



//app.use('/api', require('./api'));
//^ place this in index.js and it goes to the api folder when the /api route is hit and further routes to the next depth of routes inside that index.js file

app.get('/api/input', (req,res) =>{
	
	//selects all the hats and console logs them
	Hat.findAll().then(function(rows){
		rows.forEach(row=>{
			const {id,name,material,height,brim} = row;
			console.log(id,name,material,height,brim);
			res.send(row);
		})
	}).catch(err => console.error(err))

})

app.get('/api/input/:inputID', (req,res) =>{
	
	console.log(req.params.inputID);
	const id = parseInt(req.params.inputID);
	
	//returns the row of inputID
	Hat.findByPk(id).then(row=>{
		const {name,material,height,brim} = row;
		console.log(name, material, height,brim);
		res.send(row);
	}).catch(err=>{
		console.error(err);
		
		res.send("id does not exist in database");
	})

})

app.post('/api/input/', (req,res) =>{
	
	console.log(req.params);

	console.log(req.body);	
	
	const {name, material, height, brim} = req.body;

		
	//takes req body and forms a query to insert and returns 201 sending data.rows
	Hat.create(req.body).then(newHat => {

		Hat.findAll().then(rows => {
			res.status(201).send(rows);
		}).catch(err =>{
			console.log("findall catch");
		})
		console.log(newHat);

	}).catch(err => {
		

		res.send("cannot insert:", req.body);
	})


})

app.delete('/api/input/:inputID', (req,res) =>{
	
	console.log(req.params.inputID);
	const id = parseInt(req.params.inputID);
	//delete row with inputID and send back select all in res.send
	

})

app.listen(3000, ()=>{
	console.log("listening on 3000!");
});



// Hat.create({
// 	name: 'sequelized hat',
// 	material: 'sql',
// 	height: 5,
// 	brim: true
// }).then(newHat => {
// 	console.log(newHat);
// }).catch(err => {
// 	console.error(err);
// })

