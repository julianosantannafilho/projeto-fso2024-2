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
function CriarProdutoModal() {
	const nome = useRef("");
	const quantidade = useRef("");
	const valor = useRef("");
	const tipoProduto = useRef("");
	const status = useRef("");

	const idEmpresa = useStoreBomba((state) => state.idEmpresa);
	const [open, setOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	async function handleCreateProduto() {
		setIsLoading(!isLoading);
		await fetch(`http://localhost:8080/produtos/${idEmpresa}/create`, {
			method: "POST",
			body: JSON.stringify({
				nome,
				quantidade,
				valor,
				tipoProduto,
				status,
			}),
		})
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
							<Button onClick={handleCreateProduto}>Criar</Button>
						</Box>
					</Box>
				</Modal>
			</Box>
		</>
	);
}

export default CriarProdutoModal;
