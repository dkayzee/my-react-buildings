const { Building, Architect, Style } = require('../models/index')

const main = async () => {

//delete database
	await Building.destroy({where:{}})
	await Architect.destroy({where:{}})
	await Style.destroy({where:{}})

//create contents for the tables
  const flatiron = await Building.create({
    name: 'Flatiron Building',
    year_built: 1902,
    city: 'New York City',
    image: 'https://cdn.homedit.com/wp-content/uploads/2015/06/Flatiron-Building-exterior-architecture.jpg'
  });

  const johnsonWaxHQ = await Building.create({
    name: 'Johnson Wax Headquarters',
    year_built: 1950,
    city: 'Racine',
    image: 'https://dome.mit.edu/bitstream/handle/1721.3/33080/118073_sv.jpg'
  });

  const sagrada = await Building.create({
    name: 'Sagrada Familia',
    year_built: 2028,
    city: 'Barcelona',
    image: 'https://laninga.files.wordpress.com/2016/05/dscf4303.jpg'
  });

  const cathedral = await Building.create({
    name: 'Cathedral of Brasilia',
    year_built: 1970,
    city: 'Brasilia',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Brasilia_Cathedral_wide.jpg'
  });

  const guggenheim = await Building.create({
    name: 'Guggenheim Museum',
    year_built: 1964,
    city: 'New York City',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Solomon_R._Guggenheim_Museum_New_York_City.jpg'
  });

  const stMary = await Building.create({
    name: '30 St Mary Axe',
    year_built: 2003,
    city: 'London',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/30_St_Mary_Axe_%28Swiss_Re_Building%29_and_St_Andrew_Undershaft_church.jpg'
  });

  const pompidou = await Building.create({
    name: 'Centre Georges Pompidou',
    year_built: 1977,
    city: 'Paris',
    image: 'http://media0.trover.com/T/58a587ca74eb4609cd047ccf/fixedw_large_4x.jpg'
  });

  // architects

  const burnham = await Architect.create({
    name: 'Daniel Burnham'
  });

  const wright = await Architect.create({
    name: 'Frank Lloyd Wright'
  });

  const gaudi = await Architect.create({
    name: 'Antoni Gaudi'
  });

  const niemeyer = await Architect.create({
    name: 'Oscar Niemeyer'
  });

  const foster = await Architect.create({
    name: 'Sir Norman Foster'
  });

  const piano = await Architect.create({
    name: 'Renzo Piano'
  });

  // styles

  const renaissance = await Style.create({
    name: 'Renaissance'
  });

  const nouveau = await Style.create({
    name: 'Art Nouveau'
  });

  const modern = await Style.create({
    name: 'Modern'
  });

  const postmodern = await Style.create({
    name: 'Postmodern'
  });

  // associations

  await flatiron.setArchitect(burnham);
  await johnsonWaxHQ.setArchitect(wright);
  await sagrada.setArchitect(gaudi);
  await cathedral.setArchitect(niemeyer);
  await guggenheim.setArchitect(wright);
  await stMary.setArchitect(foster);
  await pompidou.setArchitect(piano);

  await flatiron.setStyles(renaissance);
  await johnsonWaxHQ.setStyles(modern);
  await sagrada.setStyles(nouveau);
  await cathedral.setStyles(modern);
  await guggenheim.setStyles(modern);
  await stMary.setStyles(postmodern);
  await pompidou.setStyles(postmodern);

  process.exit()

}

main()