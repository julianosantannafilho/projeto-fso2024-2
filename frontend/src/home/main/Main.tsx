"use client";
import BasicCard from "@/componentes/Card";
import { useStoreBomba } from "@/hooks/store";
import { Box, Card, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Content from "./Content";
import CustomizedBadges from "@/componentes/CustomizedBadges";
import Searchbar from "@/componentes/Searchbar";

const Main = () => {
	const userId = useStoreBomba((state) => state.id);

	return (
		<Box>
			<Box
				display={"flex"}
				justifyItems={"end"}
				alignContent={"center"}
				alignItems={"center"}
				justifyContent={"end"}>
				<Searchbar />
				<CustomizedBadges />
			</Box>
			<Box marginBottom={2} marginTop={2}>
				<Typography variant="h4">Eletrodomésticos</Typography>
				<Content categoria={"eletrodomesticos"} />
			</Box>
			<Box marginBottom={2} marginTop={2}>
				<Typography variant="h4">Gamer</Typography>
				<Content categoria={"gamer"} />
			</Box>
			<Box marginBottom={2}>
				<Typography variant="h4">Maquiagem</Typography>
				<Content categoria={"maquiagem"} />
			</Box>
		</Box>
	);
};

export default Main;
