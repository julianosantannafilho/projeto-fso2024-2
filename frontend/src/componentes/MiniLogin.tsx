"use client";
import { Box, Button, Input, InputLabel } from "@mui/material";
import Link from "next/link";
import React, { useRef } from "react";

function MiniLogin() {
	const login = useRef("");
	const senha = useRef("");

	async function queryLogin() {
		const req = await fetch("http:localhost:8080/login", {
			method: "POST",
			body: JSON.stringify({
				login: login.current,
				senha: senha.current,
			}),
		})
			.catch((e) => console.log(e))
			.then((res) => {
				if (res) {
					console.log(res.json());
				}
			});
	}

	return (
		<Box flex={1} p={1} gap={2}>
			<Box>
				<InputLabel>Login</InputLabel>
				<Input onChange={(e) => (login.current = e.target.value)} />
			</Box>
			<Box>
				<InputLabel>Senha</InputLabel>
				<Input
					type="password"
					onChange={(e) => (senha.current = e.target.value)}
				/>
			</Box>
			<Box>
				<Button onClick={queryLogin}>Login</Button>
				<Link href={"/registrar"}>Criar conta</Link>
			</Box>
		</Box>
	);
}

export default MiniLogin;
