import getData from "../views/prueba.jsx";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			fetchContacts: async () => {
				try {
					const response = await getData();
					setStore({ contacts: response });
				} catch (error) {
					console.error(error);
				}
			}
		}
	};
};

export default getState;
