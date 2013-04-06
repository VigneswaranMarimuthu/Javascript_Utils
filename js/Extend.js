/**
 * Extending a superclass to form a subclass.
 * 
 * @author Vigneswaran Marimuthu
 * 
 * @param config
 * 
 * @returns Function
 */

var initialize = true;

Function.prototype.extend = function(config){
	
	initialize = false;
	var proto = new this();
	initialize = true;
	for(var prop in config)
		proto[prop] = config[prop];
	
	var subclass = function(){
		if(initialize && this.init) this.init.call(this, this);
	};
	
	subclass.prototype = proto;
	subclass.superclass = this.prototype;
	subclass.constructor = this;
	
	return subclass;
	
};
