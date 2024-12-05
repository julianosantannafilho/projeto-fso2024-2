"use client";

import CrudEmpresa from "@/componentes/CrudEmpresa";
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
	const cnpj = useRef("");
	const setIsEmpresa = useStoreBomba((state) => state.setEmpresa);
	const setIdEmpresa = useStoreBomba((state) => state.setIdEmpresa);
	const router = useRouter();
	async function registerQuery() {
		const req = await axios
			.post(
				"http://localhost:8080/empresa/registrar",
				{
					nome: nome.current,
					email: email.current,
					senha: senha.current,
					cep: cep.current,
					cnpj: cnpj.current,
				},
				{ withCredentials: true }
			)
			.catch((e) => console.log(e))
			.then((res) => {
				if (res) {
					console.log(res.data);
					setIsEmpresa(true);
					setIdEmpresa(res.data.id);
				}

				router.push("/empresa");
			});
	}
	const empresa = useStoreBomba((state) => state.isEmpresa);

	return (
		<>
			{!empresa ? (
				<>
					<Box
						sx={{
							display: "flex",
							height: "90vh",
							justifyItems: "center",
							alignContent: "center",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								padding: 4,
								alignContent: "center",
								alignItems: "center",
							}}>
							<Box>
								<InputLabel>Nome</InputLabel>
								<Input
									onChange={(e) => (nome.current = e.target.value)}></Input>
							</Box>
							<Box>
								<InputLabel>Email</InputLabel>
								<Input
									type="email"
									onChange={(e) => (email.current = e.target.value)}></Input>
							</Box>
							<Box>
								<InputLabel>CNPJ</InputLabel>
								<Input
									type="text"
									onChange={(e) => (cnpj.current = e.target.value)}></Input>
							</Box>
							<Box>
								<InputLabel>Cep - Sede</InputLabel>
								<Input
									type="text"
									onChange={(e) => (cep.current = e.target.value)}></Input>
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
				</>
			) : (
				<CrudEmpresa></CrudEmpresa>
			)}
		</>
	);
}

export default Page;
