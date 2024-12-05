import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useStoreBomba } from "@/hooks/store";
import axios from "axios";

const columns: GridColDef<any[number]>[] = [
	{ field: "id", headerName: "ID", width: 90 },
	{
		field: "usuario",
		headerName: "usuarioId",
		width: 150,
		editable: true,
	},
	{
		flex: 1,
		field: "itemPedidos",

		valueGetter: (params) => {
			console.log(params);
			return `Quantidade: ${params[0]?.quantidade}, Valor: ${params[0]?.valor}, Produto:${params[0]?.produto}`;
		},
		headerName: "Itens do pedido",
		editable: true,
	},
];

export default function Pedidos({ data, fetchPedido }) {
	console.log("data pedidos", data);

	return (
		<Box sx={{ height: "80vh", width: "100%" }}>
			<DataGrid
				rows={data}
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
