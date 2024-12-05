"use client";
import { useStoreBomba } from "@/hooks/store";
import { Box, Button, Input, InputLabel } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React, { useRef } from "react";

function MiniLogin({ setOpen }) {
	const email = useRef("");
	const senha = useRef("");
	const id = useStoreBomba((state) => state.setId);
	async function queryLogin() {
		const req = await axios
			.post(
				"http://localhost:8080/login",
				{
					email: email.current,
					senha: senha.current,
				},
				{ withCredentials: true }
			)
			.catch((e) => console.log(e))
			.then((res) => {
				if (res) {
					console.log(res.data);
					id(res.data.id);
					setOpen();
				}
			});
	}

	return (
		<Box flex={1} p={1} gap={2}>
			<Box>
				<InputLabel>Login</InputLabel>
				<Input onChange={(e) => (email.current = e.target.value)} />
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
