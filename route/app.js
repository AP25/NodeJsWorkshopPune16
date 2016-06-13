var asyncFileObj = require('./asyncOperations').asyncOpertion;
var _asyncFile = new asyncFileObj();

function app(){
	
}

app.prototype ={
		constructor : app
};

/**
 * @author apandit
 * @purpose : To call doSeries fun of asyncOpeartions : For async series  assignment
 */
app.prototype.doSeriesOpr= function(){
	//console.log("In doSeriesOpr");
	_asyncFile.doSeries(function(){
		console.log("Succesfully write file");
	});
};

/**
 * @author apandit
 * @purpose : To call doSeries fun of doParallelOpr : For async parallel processing assignment
 */

app.prototype.doParallelOpr= function(){

	_asyncFile.doParallel(function(){
		console.log("Succesfully write file");
	});
};


var _appObj = new app();

//call to series operation
_appObj.doSeriesOpr();

//call to parallel operation
//_appObj.doParallelOpr();


exports.app = app;











