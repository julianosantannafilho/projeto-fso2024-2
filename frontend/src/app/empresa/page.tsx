"use client";

import CrudEmpresa from "@/componentes/CrudEmpresa";
import LoginEmpresa from "@/componentes/LoginEmpresa";
import ProtectedPage from "@/componentes/ProtectedPage";
import { useStoreBomba } from "@/hooks/store";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

function Page() {
	const empresa = useStoreBomba((state) => state.isEmpresa);

	useEffect(() => {
		console.log("empresa effect", empresa);
	}, [empresa]);
	console.log("empresa", empresa);
	return <div>{!empresa ? <LoginEmpresa /> : <CrudEmpresa></CrudEmpresa>}</div>;
}

export default Page;
