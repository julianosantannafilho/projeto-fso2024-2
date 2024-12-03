"use client";

import React, { useRef } from "react";

import MiniLogin from "./MiniLogin";
import { Button, InputLabel, Menu, MenuItem } from "@mui/material";
import { Input } from "postcss";
import { useStore } from "zustand";
import Perfil from "./Perfil";
import { useStoreBomba } from "@/hooks/store";

const MenuCustom = ({ children }) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const login = useRef("");
	const senha = useRef("");

	const name = useStoreBomba((state) => state.name);
	const username = useStoreBomba((state) => state.username);

	console.log(login.current, senha.current);
	return (
		<div className="">
			{name && username ? (
				<Perfil />
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
						<MiniLogin />

						{children}
					</Menu>
				</>
			)}
		</div>
	);
};

export default MenuCustom;
