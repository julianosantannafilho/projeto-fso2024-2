"use client";

import {
	MsalProvider,
	AuthenticatedTemplate,
	useMsal,
	UnauthenticatedTemplate,
} from "@azure/msal-react";
import { loginRequest } from "../lib/auth";
import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import useFetchWithMsal from "@/hooks/useFetchWithMsal";
import { useStore } from "zustand";
import { useStoreBomba } from "@/hooks/store";
import Header from "@/home/Header";
import MiniLogin from "./MiniLogin";
import MenuCustom from "./MenuCustom";

const MainContent = () => {
	/**
	 * useMsal is hook that returns the PublicClientApplication instance,
	 * that tells you what msal is currently doing. For more, visit:
	 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
	 */
	const { instance } = useMsal();
	const id = useStoreBomba((state) => state.setId);
	let activeAccount = instance.getActiveAccount();
	useEffect(() => {
		activeAccount = instance.getActiveAccount();
		console.log("activeAccount", activeAccount);
		id(activeAccount?.username);
	}, [instance]);
	// const {data, error, execute, isLoading} = useFetchWithMsal();

	const updateName = useStoreBomba((state) => state.setName);

	const updateUsername = useStoreBomba((state) => state.setUsername);

	const handleRedirect = () => {
		instance
			.loginRedirect({
				...loginRequest,
				prompt: "create",
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		updateName(activeAccount?.name);
		updateUsername(activeAccount?.username);
	}, [activeAccount]);

	return (
		<div className="App">
			<AuthenticatedTemplate>
				<Box>autenticado {activeAccount?.username}</Box>
			</AuthenticatedTemplate>
			<UnauthenticatedTemplate>
				<Button
					className="signInButton"
					onClick={handleRedirect}
					variant="contained">
					Sign up
				</Button>
			</UnauthenticatedTemplate>
		</div>
	);
};

const AppEntra = ({ instance, children }) => {
	return (
		<MsalProvider instance={instance}>
			<MenuCustom>
				<MainContent></MainContent>
			</MenuCustom>
			{children}
		</MsalProvider>
	);
};

export default AppEntra;
