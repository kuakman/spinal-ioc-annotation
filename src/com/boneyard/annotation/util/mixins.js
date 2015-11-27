/**
*	@module com.boneyard.annotation.util
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import _ from 'underscore';

_.mixin({

	/**
	*	Returns true if a given object is not null nor undefined
	*	@public
	*	@method defined
	*	@param o {Object} object reference
	*	@return Boolean
	**/
	defined(o) {
		return (!_.isUndefined(o) && !_.isNull(o));
	},

	/**
	*	Clean up expression from comments blocks, white spaces and tabs
	*	@static
	*	@method clean
	*	@param expr {String} expression reference
	*	@return String
	**/
	clean(expr = "") {
		return expr.replace(/[\*|\\|\s|\t]+/gi, '');
	}

});