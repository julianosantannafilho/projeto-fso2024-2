import { useStoreBomba } from "@/hooks/store";
import { Box } from "@mui/material";
import React from "react";

const Perfil = () => {
	const name = useStoreBomba((state) => state.name);
	const username = useStoreBomba((state) => state.username);
	return (
		<Box flex={1} alignContent={"center"} alignItems={"center"}>
			{username}
		</Box>
	);
};

export default Perfil;
