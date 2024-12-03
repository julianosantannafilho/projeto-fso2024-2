import BasicCard from "@/componentes/Card";
import { useStoreBomba } from "@/hooks/store";
import { Card } from "@mui/material";
import React from "react";

const Main = () => {
	const userId = useStoreBomba((state) => state.id);
	console.log(userId);
	return (
		<div className="border h-full">
			Main content
			<BasicCard></BasicCard>
		</div>
	);
};

export default Main;
