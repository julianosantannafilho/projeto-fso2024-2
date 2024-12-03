"use client";

import { useStoreBomba } from "@/hooks/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import LoginEmpresa from "./LoginEmpresa";

const ProtectedPage = ({ children, isEmpresa }) => {
	const router = useRouter();
	const id = useStoreBomba((state) => state.id);
	console.log(isEmpresa);
	// useEffect(() => {
	// 	if (!isEmpresa && !id) {
	// 		router.push("/empresa/login");
	// 	}
	// }, [children]);
	return <>{isEmpresa ? <LoginEmpresa /> : <div>{children}</div>}</>;
};

export default ProtectedPage;
