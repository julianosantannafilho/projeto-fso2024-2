import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useStoreBomba } from "@/hooks/store";

const columns: GridColDef<(typeof rows)[number]>[] = [
	{
		field: "id",
		headerName: "id",
		width: 40,
	},
	{
		field: "idPedido",
		headerName: "Id pedido",
		width: 150,
		editable: true,
	},
	{
		field: "data",
		headerName: "Data do pedido",
		width: 150,
		editable: true,
	},
	{
		field: "Status",
		headerName: "Status",
		description: "Status da disponibilidade do produto.",
		sortable: false,
		width: 160,
	},
	{
		flex: 1,
		field: "itemPedido",
		headerName: "Itens pedido",
	},
];

const rows = [
	{
		id: 1,
		idPedido: "Snow",
		data: "10",
		itemPedido: [1, 2, 3],
		Status: "Entregue",
	},
	{
		id: 2,
		idPedido: "Snow",
		data: "10",
		itemPedido: [1, 2, 3],
		Status: "Entregue",
	},
	{
		id: 3,
		idPedido: "Snow",
		data: "10",
		itemPedido: [1, 2, 3],
		Status: "Entregue",
	},
	{
		id: 4,
		idPedido: "Snow",
		data: "10",
		itemPedido: [1, 2, 3],
		Status: "Entregue",
	},
];

export default function Pedidos() {
	const [row, setRow] = React.useState(rows);
	const idEmpresa = useStoreBomba((state) => state.id);

	async function fetchProduto() {
		await fetch(`http://localhost:8080/pedidos/${idEmpresa}`, {
			method: "GET",
		})
			.catch((e) => console.error(e))
			.then((res) => {
				if (res) {
					setRow(res.body);
				}
			});
	}

	return (
		<Box sx={{ height: "80vh", width: "100%" }}>
			<DataGrid
				rows={row}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				pageSizeOptions={[5]}
				disableRowSelectionOnClick
			/>
		</Box>
	);
}
