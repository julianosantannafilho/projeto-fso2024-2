"use client";

import { useStoreBomba } from "@/hooks/store";
import { Box, Button, Input, InputLabel } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

function Page() {
	const nome = useRef("");
	const email = useRef("");
	const senha = useRef("");
	const senha2 = useRef("");
	const cep = useRef("");
	const cpf = useRef("");
	const data_nascimento = useRef("");

	const userId = useStoreBomba((state) => state.setId);

	const router = useRouter();
	async function registerQuery() {
		const req = await axios
			.post(
				"http://localhost:8080/registrar",
				{
					nome: nome.current,
					email: email.current,
					senha: senha.current,
					cep: cep.current,
					cpf: cpf.current,
					data_nascimento: data_nascimento.current,
				},
				{ withCredentials: true }
			)
			.then((res) => {
				if (res.data) {
					userId(res.data.id);
				}

				router.push("/");
			})
			.catch((e) => {
				if (e.status === 409) {
					console.log("erro", e.message);
				}
			});
	}

	return (
		<Box
			sx={{
				flex: 1,
				width: "100vw",
				height: "100vh",
				backgroundColor: "green",
				justifyItems: "center",
				alignContent: "center",

				alignItems: "center",
			}}
			border={1}>
			<Box
				sx={{
					flex: 1,
					padding: 4,
					width: "fit-content",
					height: "fit-content",
					alignContent: "center",
					alignItems: "center",
					backgroundColor: "yellow",
				}}>
				<Box>
					<InputLabel>Nome</InputLabel>
					<Input onChange={(e) => (nome.current = e.target.value)}></Input>
				</Box>
				<Box>
					<InputLabel>Cpf</InputLabel>
					<Input onChange={(e) => (cpf.current = e.target.value)}></Input>
				</Box>
				<Box>
					<InputLabel>Data de nascimento</InputLabel>

					<Input
						onChange={(e) =>
							(data_nascimento.current = e.target.value)
						}></Input>
				</Box>
				<Box>
					<InputLabel>Cep</InputLabel>
					<Input onChange={(e) => (cep.current = e.target.value)}></Input>
				</Box>
				<Box>
					<InputLabel>Email</InputLabel>
					<Input
						type="email"
						onChange={(e) => (email.current = e.target.value)}></Input>
				</Box>
				<Box>
					<InputLabel>Senha</InputLabel>
					<Input
						type="password"
						onChange={(e) => (senha.current = e.target.value)}></Input>
				</Box>

				<Box>
					<InputLabel>Confirma senha</InputLabel>
					<Input
						type="password"
						onChange={(e) => (senha2.current = e.target.value)}></Input>
				</Box>
				<Button onClick={registerQuery}>Registrar</Button>
			</Box>
		</Box>
	);
}

export default Page;
