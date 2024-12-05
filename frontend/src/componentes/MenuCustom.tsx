"use client";

import React, { useEffect, useRef } from "react";

import MiniLogin from "./MiniLogin";
import {
	Box,
	Button,
	InputLabel,
	Menu,
	MenuItem,
	Typography,
} from "@mui/material";
import { Input } from "postcss";
import { useStore } from "zustand";
import Perfil from "./Perfil";
import { useStoreBomba } from "@/hooks/store";
import { useMsal } from "@azure/msal-react";

const MenuCustom = ({ children }) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const { instance } = useMsal();
	const login = useRef("");
	const senha = useRef("");
	const userId = useStoreBomba((state) => state.id);
	const empresa = useStoreBomba((state) => state.idEmpresa);
	console.log("userId", userId);
	useEffect(() => {}, [userId]);
	const name = useStoreBomba((state) => state.name);
	const username = useStoreBomba((state) => state.username);

	console.log(login.current, senha.current);
	return (
		<Box display={"flex"} justifyContent={"end"} height={"10vh"}>
			<Box
				display={"flex"}
				justifyContent={"start"}
				justifyItems={"center"}
				alignContent={"start"}
				width={"80vw"}>
				<img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Logo_Lojas_Havan.jpg" />
			</Box>
			<Box display={"flex"} alignItems={"center"}>
				<Typography variant="h1">Havan</Typography>
			</Box>
			<Box width={"33vw"}></Box>
			<Box width={"33vw"}></Box>
			{userId || empresa ? (
				<></>
			) : (
				<>
					<Button
						id="demo-positioned-button"
						aria-controls={open ? "demo-positioned-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}>
						Login
					</Button>
					<Menu
						id="demo-positioned-menu"
						aria-labelledby="demo-positioned-button"
						MenuListProps={{
							"aria-labelledby": "basic-button",
						}}
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "center",
						}}
						// ARRUMAR ANCHOR
						transformOrigin={{
							vertical: "bottom",
							horizontal: "left",
						}}>
						<MiniLogin setOpen={handleClose} />

						{children}
					</Menu>
				</>
			)}
		</Box>
	);
};

export default MenuCustom;
