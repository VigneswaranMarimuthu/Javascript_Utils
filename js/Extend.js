/**
 * Extending a superclass to form a subclass.
 * 
 * @author Vigneswaran Marimuthu
 * 
 * @param supercls
 * @param config
 * 
 * @returns Function
 */
function extend(supercls, config){
  if(!isFunction(supercls)){
		console.warn("Passed superclass is not a function.");
		return;
	}
	var initialize = true;
	
	initialize = false;
	var proto = new supercls();
	subclass.superclass = new supercls();
	initialize = true;
	
	for(var prop in config)
		proto[prop] = config[prop];
	
	function subclass(){
		if(initialize && this.init) this.init.call(this, this);
	}
	
	subclass.prototype = proto;
	subclass.constructor = supercls;
	
	return subclass;
}

function isFunction(value){
	return Object.prototype.toString.call(value) === "[object Function]";
}
