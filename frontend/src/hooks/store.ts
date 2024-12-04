import { create } from "zustand";

export const useStoreBomba = create((set) => ({
	name: "wef",
	username: "",
	isEmpresa: false,
	id: "",
	idEmpresa: "",
	setIdEmpresa: (idEmpresa) =>
		set({
			idEmpresa: idEmpresa,
		}),
	setEmpresa: (empresa) =>
		set({
			isEmpresa: empresa,
		}),
	setUsername: (username) =>
		set({
			username: username,
		}),
	setId: (id) =>
		set({
			id: id,
		}),
	setName: (name) =>
		set({
			name: name,
		}),
}));
