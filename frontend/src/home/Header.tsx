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
		<div className="flex-col">
			<div className="">
				<Searchbar />
				asdasd
			</div>
			<div className="">
				<MenuCustom />
			</div>
		</div>
	);
};

export default Header;
