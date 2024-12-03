import { useStoreBomba } from "@/hooks/store";
import { Box, Button, Input, InputLabel } from "@mui/material";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import axios from "axios";

function LoginEmpresa() {
	const email = useRef("");
	const senha = useRef("");

	const router = useRouter();
	const setEmpresa = useStoreBomba((state) => state.setEmpresa);
	async function queryLogin() {
		const req = await axios
			.post(
				"http://localhost:8080/login",
				{
					email: email.current,
					senha: senha.current,
				},
				{
					withCredentials: true,
				}
			)
			.then((res) => {
				if (res) {
					console.log(res.data);
				}
				setEmpresa(true);
				router.push("/empresa");
			})
			.catch((e) => console.log(e));
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
					<InputLabel>Email</InputLabel>
					<Input
						type="email"
						onChange={(e) => (email.current = e.target.value)}
					/>
				</Box>

				<Box>
					<InputLabel>Senha</InputLabel>
					<Input
						type="password"
						onChange={(e) => (senha.current = e.target.value)}
					/>
				</Box>

				<Button onClick={queryLogin}>Login</Button>
			</Box>
		</Box>
	);
}

export default LoginEmpresa;
