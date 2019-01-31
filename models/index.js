const Sequelize = require('sequelize');
	
const db = new Sequelize({
  database: 'epiphany_buildings_db',
  dialect: 'postgres'
});

//define building, architect, style models

const Building = db.define('building', {
  name: {
    type: Sequelize.STRING
  },
  year_built: {
    type: Sequelize.INTEGER
  },
  city: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.TEXT
  }
});

const Architect = db.define('architect', {
  name: {
    type: Sequelize.STRING
  }
});

const Style = db.define('style', {
  name: {
    type: Sequelize.STRING
  }
});

//associations

//1:M

Architect.hasMany(Building, { onDelete: 'cascade' });
Building.belongsTo(Architect);

//M:M

Building.belongsToMany(Style, { through: 'building_style_xref',
                                foreignKey: 'buildingId' });
                                
Style.belongsToMany(Building, { through: 'building_style_xref',
                                foreignKey: 'styleId' });  

//export models

module.exports = {
	db,
	Building,
	Architect,
	Style
}