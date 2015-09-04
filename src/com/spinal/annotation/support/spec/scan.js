/**
*	Supported Annotations module
*	@module com.spinal.annotation.support.spec
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import Annotation from '../annotation';

/**
*	Class Scan
*	@namespace com.spinal.annotation.support.spec
*	@class com.spinal.annotation.support.spec.Scan
*	@extends com.spinal.annotation.support.Annotation
*
*	@requires com.spinal.annotation.support.Annotation
**/
class Scan extends Annotation {

	/**
	*	Constructor
	*	@constructor
	*	@param [attrs] {Object} attributes
	*	@return com.spinal.annotation.support.spec.Scan
	**/
	constructor(attrs = {}) {
		super(attrs);
		return this;
	}

}

export default Scan;