const getState = ({ getStore, getActions, setStore }) => {
	const base_url = "https://fiture-backend.herokuapp.com";

	return {
		store: {
			searchResult: {},
			diary: [],
			foodselected: {
				date: "",
				morning: [],
				afternoon: [],
				night: []
			},
			loggedIn: false,
			user: {},
			token: "",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			addFoodItem: (foodItem, partOfTheDay) => {
				let store = getStore();
				let food_index = store.foodselected[partOfTheDay].indexOf(foodItem);

				if (food_index !== -1) {
					store.foodselected[partOfTheDay][food_index].qty++;
				} else {
					foodItem.qty = 1;
					store.foodselected[partOfTheDay] = store.foodselected[partOfTheDay].concat(foodItem);
				}

				// console.log(partOfTheDay);
				setStore(store);
			},
			logout: () => {
				let store = getStore();
				store.loggedIn = false;
				store.token = "";
				store.user = {};
				setStore(store);
			},
			updateFoodQty: (qty, index, time_of_day) => {
				let store = getStore();
				store.foodselected[time_of_day][index].qty = Number(qty);
				setStore(store);
			},
			removeFoodItem: (current_index, time_of_day) => {
				let store = getStore();
				let newArray = store.foodselected[time_of_day].filter((item, index) => index !== current_index);

				setStore({
					foodselected: {
						...store.foodselected,
						[time_of_day]: newArray
					}
				});
			},
			search: food => {
				// console.log(food);
				// fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${food}` , {
				fetch("https://trackapi.nutritionix.com/v2/search/instant?query=" + food, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"x-app-key": "2936ad558fb47c9d16a568df935b207f",
						"x-app-id": "08e0bd2f"
					}
				})
					.then(resp => {
						if (!resp.ok) throw new Error(resp.statusText);
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						setStore({ searchResult: data });
					})

					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			clearSearch: () => setStore({ searchResult: {} }),
			setDiary: (date, diaryEntry) => {
				let store = getStore();

				store.foodselected.date = date;
				// loop diaryEntry.foods and put the foods in the correct array
				// ie. store.foodselected.morning
				// while looping: store.foodselected[diaryentry.foods[i].time_of_day].push(diaryEntry.foods[i])

				// for(let i=0;i<arr.length;i++)

				setStore(store);
			},
			// Use getActions to call a function within a fuction
			signupUser: data => {
				console.log(data);
				return fetch(`${base_url}/register/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(res => res.json())
					.then(data => {
						return true;
					})
					.catch(err => err);
			},
			createDiaryEntry: () => {
				let store = getStore();
				let morning = store.foodselected.morning;
				let afternoon = store.foodselected.afternoon;
				let night = store.foodselected.night;

				function updateTimeOfDay(arr, time) {
					for (let i = 0; i < arr.length; i++) {
						arr[i].time_of_day = time;
					}
					return arr;
				}
				updateTimeOfDay(morning, "morning");
				updateTimeOfDay(afternoon, "afternoon");
				updateTimeOfDay(night, "night");

				let data = {
					date: store.foodselected.date,
					foods: morning.concat(afternoon, night),
					user_id: store.user.id
				};
				return fetch(`${base_url}/diary/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(res => {
						if (!res.ok) throw new Error(`Error ${res.status} - ${res.statusText}`);
						return res.json();
					})
					.then(data => {
						// need to re-sync the diary
						getActions().syncUserDiary();
					})
					.catch(err => err);
			},
			syncUserDiary: () => {
				let store = getStore();
				return fetch(`${base_url}/diary/user/${store.user.id}`)
					.then(res => {
						if (!res.ok) throw new Error(`Error ${res.status} - ${res.statusText}`);
						return res.json();
					})
					.then(data => {
						setStore({ diary: data.diary });
					})
					.catch(err => err);
			},
			loginUser: data => {
				console.log(data);
				return fetch(`${base_url}/login/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(res => {
						if (!res.ok) throw new Error(`Error ${res.status} - ${res.statusText}`);
						return res.json();
					})
					.then(data => {
						console.log(data);
						setStore({
							loggedIn: true,
							token: data.token,
							user: {
								id: data.user.id,
								email: data.user.email,
								first_name: data.user.first_name,
								last_name: data.user.last_name
							},
							diary: data.user.diary
						});
						return true;
					})
					.catch(err => err);
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
