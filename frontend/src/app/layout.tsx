"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/home/Header";

import React from "react";
import { createRoot } from "react-dom/client";
import { msalConfig } from "../lib/auth";
import { PublicClientApplication, EventType } from "@azure/msal-browser";
import AppEntra from "@/componentes/LoginEntraid";

const msalInstance = new PublicClientApplication(msalConfig);

// Default to using the first account if no account is active on page load
if (
	!msalInstance.getActiveAccount() &&
	msalInstance.getAllAccounts().length > 0
) {
	// Account selection logic is app dependent. Adjust as needed for different use cases.
	msalInstance.setActiveAccount(msalInstance.getActiveAccount());
}

// Listen for sign-in event and set active account
msalInstance.addEventCallback((event) => {
	if (event.payload) {
		if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
			const account = event.payload.account;
			msalInstance.setActiveAccount(account);
		}
	}
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="w-full h-full">
				<AppEntra instance={msalInstance}>{children}</AppEntra>
			</body>
		</html>
	);
}
