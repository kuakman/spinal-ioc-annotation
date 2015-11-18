/**
*	Es5 Examples - Model
*	@module examples.es5.model
*	@author Patricio Ferreira <3dimentionar@gmail.com>
*/
defined(['backbone'], function(Backbone) {

	/**
	*	Class Model
	*	@namespace examples.es5.model
	*	@class examples.es5.model.Model
	*	@extends Backbone.Model
	*
	*	@requires Backbone.Model
	*
	*	@Bone({ id: "model", spec: "application" })
	*/
	var Model = Boneyard.namespace('examples.es5.model.Model', Model.inherit({

		/**
		*	Initialize
		*	@public
		*	@method initialize
		*	@return examples.es5.model.Model
		*/
		initialize(...args) {
			return super.initialize(...args);
		}

	}, {

		/**
		*	@static
		*	@property NAME
		*	@type String
		**/
		NAME: 'Model'

	}));

	return Model;

});
