import { create } from "zustand";

export const useStoreBomba = create((set) => ({
	name: "wef",
	username: "",
	isEmpresa: false,
	id: "",
	setEmpresa: (empresa) =>
		set({
			empresa: empresa,
		}),
	setUsername: (username) =>
		set({
			username: username,
		}),
	setName: (name) =>
		set({
			name: name,
		}),
}));
