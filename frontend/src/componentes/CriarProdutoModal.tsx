"use client";

import { useStoreBomba } from "@/hooks/store";
import {
	Box,
	Button,
	FormControl,
	Icon,
	IconButton,
	Input,
	InputLabel,
	Modal,
} from "@mui/material";
import React, { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useStore } from "zustand";
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	pt: 4,
	px: 4,
	pb: 4,
};
function CriarProdutoModal({ open, setOpen }) {
	const nome = useRef("");
	const quantidade = useRef("");
	const valor = useRef("");
	const tipoProduto = useRef("");
	const status = useRef("");
	const descricao = useRef("");
	const imagem = useRef("");
	const idEmpresa = useStoreBomba((state) => state.idEmpresa);
	const setEmpresa = useStoreBomba((state) => state.setIdEmpresa);
	const [isLoading, setIsLoading] = useState(false);
	console.log("idempresa", idEmpresa);

	async function handleCreateProduto() {
		await axios
			.get(`http://localhost:8080/empresa/${idEmpresa}/get`, {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data);
				setEmpresa(res.data);
			})
			.catch((e) => console.log(e));
		setIsLoading(!isLoading);
		console.log("idEmpresa", idEmpresa);
		await axios
			.post(
				`http://localhost:8080/produto/create`,
				{
					empresa: idEmpresa,
					nome: nome.current,
					descricao: descricao.current,
					imagem: imagem.current,
					quantidade: quantidade.current,
					valor: valor.current,
					tipoProdutoCategoria: tipoProduto.current,
					status: status.current,
				},
				{ withCredentials: true }
			)
			.catch((e) => console.error(e))
			.then((res) => {
				if (res && res.status === 200) {
					setIsLoading(!isLoading);
					setOpen(!open);
				}
			});
	}

	return (
		<>
			<Button onClick={() => setOpen(!open)}>Criar produto</Button>
			<Box>
				<Modal open={open} onClose={() => setOpen(!open)}>
					<Box
						sx={{
							...style,
							width: "400px",
						}}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								p: 4,

								height: "fit-content",
								justifyItems: "center",
								alignContent: "center",
								alignItems: "center",
								backgroundColor: "white",
							}}>
							<Box>
								<InputLabel>Nome do produto</InputLabel>
								<Input
									onChange={(e) => (nome.current = e.target.value)}></Input>
							</Box>
							<Box>
								<InputLabel>Quantidade</InputLabel>
								<Input
									onChange={(e) =>
										(quantidade.current = e.target.value)
									}></Input>
							</Box>
							<Box>
								<InputLabel>Valor</InputLabel>
								<Input
									onChange={(e) => (valor.current = e.target.value)}></Input>
							</Box>

							<Box>
								<InputLabel>Status</InputLabel>
								<Input
									onChange={(e) => (status.current = e.target.value)}></Input>
							</Box>
							<Box>
								<InputLabel>Categoria do produto</InputLabel>
								<Input
									onChange={(e) =>
										(tipoProduto.current = e.target.value)
									}></Input>
							</Box>
							<Box>
								<InputLabel>Descrição do produto</InputLabel>
								<Input
									onChange={(e) =>
										(descricao.current = e.target.value)
									}></Input>
							</Box>
							<Box>
								<InputLabel>URL da imagem</InputLabel>
								<Input
									onChange={(e) => (imagem.current = e.target.value)}></Input>
							</Box>
							<Button onClick={handleCreateProduto}>Criar</Button>
						</Box>
					</Box>
				</Modal>
			</Box>
		</>
	);
}

export default CriarProdutoModal;
