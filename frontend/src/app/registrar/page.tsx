"use client";

import { Box, Button, Input, InputLabel } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

function Page() {
	const nome = useRef("");
	const email = useRef("");
	const senha = useRef("");
	const senha2 = useRef("");

	const router = useRouter();
	async function registerQuery() {
		const req = await fetch("http:localhost:8080/login", {
			method: "POST",
			body: JSON.stringify({
				nome: nome.current,
				email: email.current,
				senha: senha.current,
				senha2: senha.current,
			}),
		})
			.catch((e) => console.log(e))
			.then((res) => {
				if (res) {
					console.log(res.json());
				}

				router.push("/");
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
