/*var product = require('./products.js')*/
var React = require("react");
var ReactDOM = require("react-dom");

class SearchBar extends React.Component {

	handleQuery(event) {
		console.log(event.target.value);
	}
	render() {
		return React.createElement(
			"div",
			{ className: "search-bar" },
			React.createElement("input", { onChange: this.handleQuery.bind(this), placeholder: "Search" })
		);
	}
}

class Search extends React.Component {
	render() {
		return React.createElement(
			"div",
			{ className: "search" },
			React.createElement(SearchBar, null),
			React.createElement("div", { className: "result" })
		);
	}
}

ReactDOM.render(React.createElement(Search, null), document.getElementById("app"));