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
		e.preventDefault();
		console.log("buscando: ", searchValue.current);
	}

	console.log(searchValue);
	return (
		<form className="flex flex-row items-center w-full" onSubmit={query}>
			<Input
				placeholder="Buscar produtos,marcas e muito mais..."
				onChange={search}
			/>

			<SearchIcon onClick={query} />
		</form>
	);
};

export default Searchbar;
