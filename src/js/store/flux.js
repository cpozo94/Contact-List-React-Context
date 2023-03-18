import getData from "../views/prueba.jsx";
import { deleteUser } from "../views/prueba.jsx";







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
			deleteContacts:async (userId)=> {
				try{
					const response = await deleteUser(userId);
					setStore({contacts: response});

				} catch (error) {
					console.error(error)
				}
			}
		}
	};
};

export default getState;
