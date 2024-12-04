"use client";

import { Box } from "@mui/material";
import Home from "../home";

export default function Page() {
	return (
		<Box display={"flex"} flexDirection={"row"}>
			<Box width={"20vw"}></Box>
			<Box width={"60vw"}>
				<Home />
			</Box>
			<Box width={"20vw"}></Box>
		</Box>
	);
}
