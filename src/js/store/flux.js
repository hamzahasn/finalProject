const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			searchResult: {},
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
			search: food => {
				console.log(food);
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
				return true;
				// return fetch().then().then(data => setStore({ "foo": data.bar }))
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
