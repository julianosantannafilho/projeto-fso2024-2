"use client";

import React, { ChangeEventHandler, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button, debounce, Icon, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

// AUTOCOMPLETE -> DEBOUNCE CRIAR
const Searchbar = () => {
	const searchValue = useRef(null);

	function search(e: any) {
		searchValue.current = e.target.value;
	}

	async function query(e: any) {
		e.preventDefault();
		console.log("buscando: ", searchValue.current);
		await axios.get(
			`http://localhost:8080/produto/${searchValue.current}/getAll`,
			{ withCredentials: true }
		);
	}

	console.log(searchValue);
	return (
		
	);
};

export default Searchbar;
