import React from "react";
import Searchbar from "../componentes/Searchbar";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";
import MenuCustom from "@/componentes/MenuCustom";

const Header = () => {
	return (
		<div className="flex flex-row border border-red-600 border-solid">
			<Searchbar />

			<MenuCustom />
		</div>
	);
};

export default Header;
