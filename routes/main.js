'use strict';

/////////////////////////////////////////////
////////      process main            ///////
////////////////////////////////////////////


const main = (router) => {

	
	router.use(function(req, res, next) {

		const main = `
	  <pre>
	  strategicmachines.io: intelligent interaction platform

	  developer workbench for constructing winsome interactions

	  &copy2016 Strategic Machines all rights reserved
	  </pre> `

	  res.send(main)

    next()
 });
}

module.exports = main
