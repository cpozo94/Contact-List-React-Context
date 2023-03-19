import getData from "../views/home.jsx";
import { deleteUser } from "../views/home.jsx";







const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
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
			deleteContacts:async (name)=> {
				try{
					const response = await deleteUser(name);
					setStore({contacts: response});

				} catch (error) {
					console.error(error)
				}
			}
		}
	};
};

export default getState;
