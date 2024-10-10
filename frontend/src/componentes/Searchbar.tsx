"use client";

import React, { ChangeEventHandler, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button, debounce, Icon, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// AUTOCOMPLETE -> DEBOUNCE CRIAR
const Searchbar = () => {
	const searchValue = useRef(null);

	function search(e: any) {
		searchValue.current = e.target.value;
	}

	function query(e: any) {
		console.log("buscando: ", searchValue.current);
	}

	console.log(searchValue);
	return (
		<div className="">
			<Input
				placeholder="Buscar produtos,marcas e muito mais..."
				onChange={search}
			/>
			<IconButton
				sx={{
					height: "200px",
				}}
				LinkComponent={"search"}
				onClick={query}>
				<SearchIcon />
			</IconButton>
		</div>
	);
};

export default Searchbar;
