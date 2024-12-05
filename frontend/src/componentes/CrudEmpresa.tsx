import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Produtos from "./Produtos";
import CriarProdutoModal from "./CriarProdutoModal";
import Pedidos from "./Pedidos";
import axios from "axios";
import { useStoreBomba } from "@/hooks/store";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function CrudEmpresa() {
	const [value, setValue] = React.useState(0);
	const [data, setData] = React.useState();
	const [pedido, setPedido] = React.useState();
	const [openModal, setOpenModal] = React.useState(false);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	const empresaId = useStoreBomba((state) => state.idEmpresa);
	async function fetchRowData() {
		await axios
			.get(`http://localhost:8080/produto/${empresaId.id}/get`, {
				withCredentials: true,
			})
			.then((res) => {
				setData(res.data);
			});
	}
	async function fetchPedido() {
		await axios
			.get(`http://localhost:8080/pedido`, {
				withCredentials: true,
			})
			.then((res) => {
				if (res) {
					console.log("res data pedido", res.data);
					setPedido(res.data);
				}
			})
			.catch((e) => console.error(e));
	}
	React.useEffect(() => {
		fetchRowData();
		fetchPedido();
	}, [openModal, empresaId]);
	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example">
					<Tab label="Produtos" {...a11yProps(0)} />
					<Tab label="Pedidos" {...a11yProps(1)} />
				</Tabs>
			</Box>
			<CustomTabPanel value={value} index={0}>
				<CriarProdutoModal open={openModal} setOpen={setOpenModal} />
				<Produtos data={data} fetchProduto={fetchRowData} />
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				<Pedidos data={pedido} fetchPedido={fetchPedido} />
			</CustomTabPanel>
		</Box>
	);
}
