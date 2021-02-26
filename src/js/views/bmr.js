import React, { Component } from "react";
import "../../styles/bmr.scss";

class Bmr extends Component {
	constructor() {
		super();

		this.state = {
			gender: "",
			weight: "",
			age: "",
			heightfeet: "",
			heightinches: "",
			activity: "",
			bmr: "",
			error: "",
			flag: false,
			system: ""
		};
	}

	handleAgeChange = event => {
		this.setState({ age: event.target.value });
	};
	handleWeightChange = event => {
		this.setState({ weight: event.target.value });
	};
	handleHeightFeetChange = event => {
		this.setState({ heightfeet: event.target.value });
	};
	handleHeightInchesChange = event => {
		this.setState({ heightinches: event.target.value });
	};
	handleGenderChange = event => {
		this.setState({ gender: event.target.value });
	};
	handleActivityChange = event => {
		this.setState({ activity: event.target.value });
	};
	handleSystemChange = event => {
		this.setState({ system: event.target.value });
	};

	calculateBMR() {
		let age = this.state.age;
		let weight = this.state.weight;
		let heightFeet = this.state.heightfeet; //will be used as height in CM for metric system
		let heightInches = this.state.heightinches;
		let gender = this.state.gender;

		if (this.state.system == 1) {
			if (age == "" || weight == "" || gender == "" || heightFeet == "" || heightInches == "") {
				this.setState({ error: "All fields are required" });
				return;
			}
		} else if (this.state.system == 2) {
			if (age == "" || weight == "" || gender == "" || heightFeet == "") {
				this.setState({ error: "All fields are required" });
				return;
			}
		}

		var bmrCalc = "";
		if (this.state.system == 1) {
			let height = heightFeet * 30.48 + heightInches * 2.54;
			if (gender == 1) {
				//Female
				bmrCalc = Math.round(655.1 + 4.35 * weight + 4.7 * height - 4.7 * age);
			} else if (gender == 2) {
				//Male
				bmrCalc = Math.round(66 + 6.2 * weight + 12.7 * height - 6.76 * age);
			}
		} else if (this.state.system == 2) {
			/*BMR calculation (Metric): 
Man BMR = 66.5 + ( 13.75 × weight in kg ) + ( 5.003 × height in cm ) – ( 6.755 × age in years )
Woman BMR = BMR = 655 + ( 9.563 × weight in kg ) + ( 1.850 × height in cm ) – ( 4.676 × age in years )*/
			if (gender == 1) {
				//Female
				bmrCalc = 655 + 9.563 * weight + 1.85 * heightFeet - 4.676 * age;
			} else if (gender == 2) {
				//Male
				bmrCalc = 66.5 + 13.75 * weight + 5.003 * heightFeet - 6.755 * age;
			}
		}

		this.setState({ bmr: bmrCalc });
		this.setState({ flag: true });
		this.setState({ error: "" });
	}

	calculateAct() {
		let ActCalc;

		if (this.state.activity == "1.2") {
			ActCalc = this.state.bmr * 1.2;
		} else if (this.state.activity == "1.375") {
			ActCalc = this.state.bmr * 1.375;
		} else if (this.state.activity == "1.55") {
			ActCalc = this.state.bmr * 1.55;
		} else if (this.state.activity == "1.725") {
			ActCalc = this.state.bmr * 1.725;
		} else if (this.state.activity == "1.9") {
			ActCalc = this.state.bmr * 1.9;
		}
		this.setState({ activity: ActCalc });
	}

	render() {
		let error;
		if (this.state.error) {
			error = <div className="error">{this.state.error} </div>;
		}
		let result;
		if (this.state.bmr) {
			result = <div className="result">{this.state.bmr}</div>;
		}

		let resultAct;
		if (this.state.bmr) {
			resultAct = <div className="result">{this.state.activity}</div>;
		}

		if (this.state.flag == true) {
			var a = true;
		}
		var b = true;
		if (this.state.system == 2) {
			var b = false;
		}

		if (this.state.system == 1) {
			var ft = "ft";
			var inch = "in";
		}

		return (
			<div id="bmrcalc ">
				<div className="bmrform container-fluid text-center pt-5">
					<h2 className="bmrh"> Daily Calorie Calculator</h2>
					{error}
					<div className="inputwrap bmrinputwrap">
						<label className="label pr-2 font-weight-bold">Gender</label>
						<label>
							<input
								type="radio"
								checked={this.state.gender === "1"}
								onChange={this.handleGenderChange}
								className="genderF bmrinput  pr-2"
								name="gender"
								value="1"
							/>
							Female
						</label>
						<label>
							<input
								type="radio"
								checked={this.state.gender === "2"}
								onChange={this.handleGenderChange}
								className="genderM bmrinput "
								name="gender"
								value="2"
							/>
							Male
						</label>
					</div>
					<div className="inputwrap ">
						<label className="label  pr-2 font-weight-bold">System</label>
						<label>
							<input
								type="radio"
								checked={this.state.system === "1"}
								onChange={this.handleSystemChange}
								name="Imperial"
								value="1"
								className="bmrinput pr-3"
							/>
							Imperial
						</label>

						<label>
							<input
								type="radio"
								checked={this.state.system === "2"}
								onChange={this.handleSystemChange}
								name="Metric"
								value="2"
								className="bmrinput"
							/>
							Metric
						</label>
					</div>
					<div className="inputwrap">
						<label className="label font-weight-bold px-2">Weight</label>
						<input
							type="number"
							value={this.state.weight}
							onChange={this.handleWeightChange}
							name="weight"
							className="weight bmrinput"
							min="0"
							max="999"
						/>
					</div>
					<div className="inputwrap">
						<label className="label font-weight-bold px-2">Height</label>
						<input
							type="number"
							value={this.state.heightfeet}
							onChange={this.handleHeightFeetChange}
							name="heightFeet"
							className="heightFeet bmrinput"
							min="0"
							max="8"
						/>

						{b && (
							<input
								type="number"
								value={this.state.heightinches}
								onChange={this.handleHeightInchesChange}
								name="heightInches"
								className="heightInches bmrinput"
								min="0"
								max="11"
							/>
						)}
					</div>
					<div className="inputwrap">
						<label className="label font-weight-bold px-2">Age</label>
						<input
							type="number"
							value={this.state.age}
							onChange={this.handleAgeChange}
							className="age bmrinput"
							name="age"
							min="0"
							max="120"
						/>
					</div>
					<button type="button" className="brm-btn" onClick={() => this.calculateBMR()}>
						Calculate Calories
					</button>
					{result}

					{/* {a == true && (
						<div className="workout">
							<div className="inputwrap">
								<label className="label bmrinput">Workout in a Week</label>
								<select
									className="activity"
									value={this.state.activity}
									onChange={this.handleActivityChange}
									name="activity">
									<option value="">Select your Activity</option>
									<option value="1.2">Sedentary (Very little or no exercise, and desk job)</option>
									<option value="1.375">Lightly Active (Light exercise 1 to 3 days per week)</option>
									<option value="1.55">
										Moderately Active (Moderate exercise 3 to 5 days per week)
									</option>
									<option value="1.725">Very Active (Heavy exercise 6 to 7 days per week)</option>
									<option value="1.9">
										Extremely Active (Very intense exercise, and physical job, exercise multiple
										times per day)
									</option>
								</select>
							</div>
							<button type="button" className="brm-btn" onClick={() => this.calculateAct()}>
								Calculate Calories
							</button>
							{resultAct}
						</div>
					)} */}
				</div>
			</div>
		);
	}
}

export default Bmr;
