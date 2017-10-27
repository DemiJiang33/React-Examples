var React = require ("react");
var ReactDOM = require ("react-dom");
var Search = require('./component/search.jsx');
var products = require('./products.js');

/*console.log(product);*/

ReactDOM.render(
	<Search products={products}/>,
	document.getElementById("app")
	);