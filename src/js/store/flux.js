const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					"id": "457",
					"agenda_slug": "jonathan_agenda",
					"full_name": "Dave Bradley",
					"email": "test@gmail.com",
					"phone": "7864445566",
					"address": "47568 NW 34ST, 33434 FL, USA",
					"created_at": "2019-11-04 22:38:22"
				},
				{
					"id": "473",
					"agenda_slug": "eduuuuu",
					"full_name": "Eduardo Puermas",
					"email": "epuermas@gmail.com",
					"phone": "305-423-3800",
					"address": "66 W Flagler St #900, Miami, FL 33130",
					"created_at": "2019-11-22 01:02:25"
				},
				{
					"id": "656",
					"agenda_slug": "Jarb29",
					"full_name": "Angel Lopez",
					"email": "jodeojeo@gmail.com",
					"phone": "8928392832",
					"address": "Santiago centro",
					"created_at": "2020-02-22 15:13:56"
				},
				  {
        			"id": "899",
       				"agenda_slug": "Pollan_agenda",
					"full_name": "asd",
					"email": "asda",
					"phone": "ad",
					"address": "asd",
					"created_at": "2020-06-01 11:32:14"
    				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
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
