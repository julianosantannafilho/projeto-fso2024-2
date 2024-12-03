"use client";

import CrudEmpresa from "@/componentes/CrudEmpresa";
import LoginEmpresa from "@/componentes/LoginEmpresa";
import ProtectedPage from "@/componentes/ProtectedPage";
import { useStoreBomba } from "@/hooks/store";
import { useRouter } from "next/router";
import React, { useRef } from "react";

function Page() {
	const empresa = useStoreBomba((state) => state.isEmpresa);

	console.log("empresa", empresa);
	return <div>{!empresa ? <LoginEmpresa /> : <CrudEmpresa></CrudEmpresa>}</div>;
}

export default Page;
