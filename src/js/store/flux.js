import getData from "../views/home.jsx";
import { deleteUser } from "../views/home.jsx";







const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: {},
		},

		//incluir en action tb la cancelación.
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
