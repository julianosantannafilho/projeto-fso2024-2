import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useStoreBomba } from "@/hooks/store";

const columns: GridColDef<(typeof rows)[number]>[] = [
	{ field: "id", headerName: "ID", width: 90 },
	{
		field: "Nome",
		headerName: "Nome",
		width: 150,
		editable: true,
	},
	{
		field: "Quantidade",
		headerName: "Quantidade",
		width: 150,
		editable: true,
	},
	{
		field: "Valor",
		headerName: "Valor",
		type: "number",
		width: 110,
		editable: true,
	},
	{
		field: "Categoria",
		headerName: "Categoria",
		description: "Categoria do produto",
		sortable: false,
		width: 160,
	},
	{
		field: "Status",
		headerName: "Status",
		description: "Status da disponibilidade do produto.",
		sortable: false,
		width: 160,
	},
];

const rows = [
	{ id: 1, Nome: "Snow", Quantidade: 10, Valor: 15.5, Categoria: "Eletro" },
	{ id: 2, Nome: "Lannister", Quantidade: 20, Valor: 31, Categoria: "Eletro" },
	{ id: 3, Nome: "Lannister", Quantidade: 30, Valor: 31, Categoria: "Eletro" },
	{ id: 4, Nome: "Stark", Quantidade: 0, Valor: 11, Categoria: "Eletro" },
	{ id: 5, Nome: "Targaryen", Quantidade: 5, Valor: null, Categoria: "Eletro" },
	{
		id: 6,
		Nome: "Melisandre",
		Quantidade: null,
		Valor: 150,
		Categoria: "Eletro",
	},
	{ id: 7, Nome: "Clifford", Quantidade: 2, Valor: 44, Categoria: "Eletro" },
	{
		id: 8,
		Nome: "Frances",
		Quantidade: "Rossini",
		Valor: 36,
		Categoria: "Eletro",
	},
	{
		id: 9,
		Nome: "Roxie",
		Quantidade: "Harvey",
		Valor: 65,
		Categoria: "Eletro",
	},
];

export default function Produtos() {
	const [row, setRow] = React.useState(rows);
	const [selectedRows, setSelectedRows] = React.useState([]);
	const idEmpresa = useStoreBomba((state) => state.id);

	async function fetchProduto() {
		await fetch(`http://localhost:8080/produtos/${idEmpresa}`, {
			method: "GET",
		})
			.catch((e) => console.error(e))
			.then((res) => {
				if (res) {
				}
			});
	}

	function handleRowSelection(e) {
		console.log(e);
		setSelectedRows(e);
	}

	async function deleteRows() {
		await fetch(`http://localhost:8080/delete/${idEmpresa}`, {
			method: "POST",
			body: JSON.stringify({
				selectedRows,
			}),
		})
			.then((res) => {
				if (res && res.status == 200) {
					setRow(row.filter((e, i) => e.id === selectedRows[i]));
				}
			})
			.catch((e) => console.error(e));
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
				checkboxSelection
				rowSelection
				onRowSelectionModelChange={handleRowSelection}
				disableRowSelectionOnClick
			/>
			<Button onClick={deleteRows}>Excluir produto</Button>
		</Box>
	);
}
