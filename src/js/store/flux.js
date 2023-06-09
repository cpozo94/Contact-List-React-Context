import getData from "../views/services.jsx";








const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: {},
		},

		
		actions: {
			fetchContacts: async () => {
				try {
					const response = await getData();
					setStore({ contacts: response });
				} catch (error) {
					console.error(error);
				}
			},
			editContact: (contact) => {
				const store = getStore();
				setStore({...store, contact})

			},
		}
	};
};

export default getState;
