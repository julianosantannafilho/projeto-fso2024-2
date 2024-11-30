"use client";

import { Box, Input, InputLabel } from "@mui/material";
import React, { useRef } from "react";

function Page() {
	const nome = useRef("");
	const email = useRef("");
	const senha = useRef("");
	const senha2 = useRef("");

	return (
		<Box
			sx={{
				width: "100vw",
				height: "100vh",
				backgroundColor: "green",
				justifyContent: "center",
				justifyItems: "center",
				alignItems: "center",
			}}
			border={1}>
			<Box
				sx={{
					flex: 1,
					flexDirection: "row",
					width: "fit-content",
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
			</Box>
			<Box>asdasd</Box>
		</Box>
	);
}

export default Page;
