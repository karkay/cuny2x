const Sequelize = require('sequelize');
const db = new Sequelize('postgres://postgres:```@localhost:5432/postgres')



//define model
const Hat = db.define('hats',{
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	material: {
		type: Sequelize.STRING,
		allowNull: false
	},
	height: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	brim: {
		type: Sequelize.BOOLEAN,
		allowNull: false
	},
})

// db.sync({force:true}).then(()=>
// 	Hat.create({
// 		name:"first hat",
// 		material: "leather",
// 		height: 8,
// 		brim: true,
// 	}))
// 	.then(newHat =>{
// 		console.log(newHat);
// 	});

module.exports = {
	Hat
}

