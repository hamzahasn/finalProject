const getState = ({ getStore, getActions, setStore }) => {
	const base_url = "https://3000-scarlet-swordtail-uxps06va.ws-us03.gitpod.io";

	return {
		store: {
			searchResult: {},
			diary: [
				{
					date: "",
					morning: [],
					afternoon: [],
					night: []
				}
			],
			foodselected: {
				date: "",
				morning: [],
				afternoon: [],
				night: []
			},

			profile: {},
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

			loginUser: data => {
				console.log(data);
				return fetch(`${base_url}/login/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(res => res.json())
					.then(data => {
						setStore({ loggedIn: true, token: data.token, user: data.user });
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
