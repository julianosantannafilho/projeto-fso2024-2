"use client";
import { Input } from "@/components/ui/input";
import {
	Button,
	CardActions,
	CardContent,
	debounce,
	Icon,
	IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useStoreBomba } from "@/hooks/store";
import { Box, Card, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Content from "./Content";
import CustomizedBadges from "@/componentes/CustomizedBadges";
import Searchbar from "@/componentes/Searchbar";

const Main = () => {
	const userId = useStoreBomba((state) => state.id);
	const searchValue = useRef(null);
	const [data, setData] = useState([]);

	function search(e: any) {
		searchValue.current = e.target.value;
	}
	useEffect(() => {
		if (searchValue.current == "") {
			console.log("search null");
			setData([]);
		} else {
			console.log("search not null");
			// query();
		}
	}, [searchValue.current]);
	async function query(e: any) {
		e.preventDefault();
		console.log("buscando: ", searchValue.current);
		await axios
			.get(
				`http://localhost:8080/produto/${searchValue.current || "a"}/search`,
				{
					withCredentials: true,
				}
			)
			.then((res) => {
				setData(res.data);
			});
	}

	async function queryComprar(produto) {
		console.log("usuario", userId);
		await axios.post(
			`http://localhost:8080/pedido/${produto.empresa.id}/${userId}`,
			{
				produto: produto.id,
				quantidade: produto.quantidade,
				valor: produto.valor,
			},
			{ withCredentials: true }
		);
	}
	return (
		<Box>
			<Box
				display={"flex"}
				justifyItems={"end"}
				alignContent={"center"}
				alignItems={"center"}
				justifyContent={"end"}>
				<form className="flex flex-row items-center w-full" onSubmit={query}>
					<Input
						placeholder="Buscar produtos,marcas e muito mais..."
						onChange={search}
					/>

					<SearchIcon onClick={query} />
				</form>
				<CustomizedBadges />
			</Box>
			{data.length >= 1 ? (
				<>
					{data.map((e, i) => {
						return (
							<Box key={i}>
								<Card key={e.id}>
									<CardContent>
										<Typography
											gutterBottom
											sx={{ color: "text.secondary", fontSize: 14 }}>
											{e.nome}
										</Typography>
										<img src={e.imagem} alt={e.nome} width={100} height={100} />
										<Typography variant="body2">{e.descricao}</Typography>
										<Typography variant="body2">R${e.valor},99</Typography>
									</CardContent>
									<CardActions>
										<Button onClick={() => queryComprar(e)} size="small">
											Comprar
										</Button>
									</CardActions>
								</Card>
							</Box>
						);
					})}
				</>
			) : (
				<>
					<Box marginBottom={2} marginTop={2}>
						<Typography variant="h4">Eletrodomésticos</Typography>
						<Content query={queryComprar} categoria={"eletrodomesticos"} />
					</Box>
					<Box marginBottom={2} marginTop={2}>
						<Typography variant="h4">Gamer</Typography>
						<Content query={queryComprar} categoria={"gamer"} />
					</Box>
					<Box marginBottom={2}>
						<Typography variant="h4">Maquiagem</Typography>
						<Content query={queryComprar} categoria={"maquiagem"} />
					</Box>
				</>
			)}
		</Box>
	);
};

export default Main;
