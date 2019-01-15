const pg_client = require("./pg_config");
const router = require("express");
const bodyParser = require("body-parser");
const app = router();

app.use(bodyParser.json());

app.get('/api/input/', (req,res) =>{
	res.send("hitting input route");
	pg_client.query(
		`select * from hats`,(err,data) => {
			if(err) return console.error(err);
			//console.log(data);
			data.rows.forEach(rowObject => {
				console.log(rowObject);
			});
		}

	);

})

app.get('/api/input/:inputID', (req,res) =>{
	
	console.log(req.params.inputID);
	const id = parseInt(req.params.inputID);
	
	pg_client.query(
		`select * from hats where id =${id}`,(err,data) => {
			if(err) return console.error(err);
			//console.log(data);
			data.rows.forEach(rowObject => {
				console.log(rowObject);
				res.send(rowObject);

			});

			// res.send(data.rows);

		}

	);

})

app.post('/api/input', (req,res) =>{
	
	console.log(req.params);

	console.log(req.body);	
	
	const {name, material, height, brim} = req.body;
		


	
	pg_client.query(
		`insert into hats (name, material, height, brim) values('${name}','${material}','${height}','${brim}')`,(err,data) => {
			if(err) return console.error(err);
			//console.log(data);
			pg_client.query(`select * from hats`,(err,data)=>{
				if(err) return console.error(err);
				data.rows.forEach(rowObject => {
					console.log(rowObject);
				});
				res.status(201).send(data.rows);
			});
			console.log(data.rows);
			
			// res.send(data.rows);

		}

	);

})

app.delete('/api/input/:inputID', (req,res) =>{
	
	console.log(req.params.inputID);
	const id = parseInt(req.params.inputID);
	
	pg_client.query(
		`delete from hats where id =${id}`,(err,data) => {
			if(err) return console.error(err);
			//console.log(data);
			pg_client.query('select * from hats',(err,data)=>{
				if(err) return console.error(err);
				data.rows.forEach(row =>{
					console.log(row);
				});
				res.send(data.rows);
			});
		}
	);

})

app.listen(3000, ()=>{
	console.log("listening on 3000!");
});