var React = require ("react");

class Result extends React.Component{

	displayprice(price){
		return (price / 100.00);
	}

	render(){
		return(
			<div className = "in-stock">
			<h2><a href="#"> {this.props.product.name}</a> </h2>
			<p>${this.displayprice(this.props.product.price)}</p>
			<p>{this.props.product.description}</p>
			</div>
			)
	}

}

module.exports = Result;