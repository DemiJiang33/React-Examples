class PomodoroTimer extends React.Component {
	constructor(){
		super();
		this.state= {
			timeElapsed:0
		};
	}

	totalTimer(timeOne, timeTwo){
		return timeOne + timeTwo;
	}

	componentDidMount(){
		//console.log(new Date());
		this.interval = setInterval(this.elapseTime.bind(this),1000)
		this.setState({start: new Date()});
	}

	componentWillMount(){
		clearInterval(this.interval);
	}

	elapseTime(){
		//how much time has eclapsed
		var currentTime = new Date();
		//console.log("Current:" + currentTime);
		//console.log(this.state.start);
		//var timeElapsed = CURRENT TIME - START TIME
		var timeElapsed = Math.floor((currentTime - this.state.start) / 1000);
		//console.log(timeElapsed);

		this.setState({timeElapsed: timeElapsed});
		//console.log(this);

		//if timeElapsed = 25 minutes -> then alert
		if(this.state.timeElapsed >= this.props.workingTime * 60){
			clearInterval(this.interval);
			alert("Time for a break");
		}
	}

	render(){
		return(
			<div> This timer runs for {this.props.workingTime} minutes,
			followed by rest of {this.props.restigTime} minutes.
			<br />For a total time of {this.totalTimer(this.props.workingTime,this.props.restigTime)} minutes.
			<br />There are {this.state.timeElapsed} seconds elaspsed. 
			</div>
			)
	}
}


ReactDOM.render(
	<PomodoroTimer workingTime={1} restigTime={1}/>, 
	document.getElementById("root")
	);