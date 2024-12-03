"use client";

import React from "react";
import Page from "./page";
import ProtectedPage from "@/componentes/ProtectedPage";
import { useStoreBomba } from "@/hooks/store";

const Layout = () => {
	return (
		<div>
			<Page />
		</div>
	);
};

export default Layout;
