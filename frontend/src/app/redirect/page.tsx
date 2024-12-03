"use client";

import { useMsal } from "@azure/msal-react";
import React from "react";

const page = () => {
	const { instance } = useMsal();
	const activeAccount = instance.getActiveAccount();

	console.log(activeAccount);
	return <div>page</div>;
};

export default page;
