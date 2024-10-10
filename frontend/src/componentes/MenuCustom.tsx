import React from "react";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";

const MenuCustom = () => {
	return (
		<div>
			<Menubar>
				<MenubarMenu>
					<MenubarTrigger>Categorias</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>Veículos</MenubarItem>
						<MenubarItem>Eletrodomesticos</MenubarItem>
						<MenubarItem>Ferramentas</MenubarItem>
						<MenubarItem>Mais vendidos</MenubarItem>
					</MenubarContent>
				</MenubarMenu>

				<MenubarMenu>
					<MenubarTrigger>BOmba</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							New Tab <MenubarShortcut>⌘T</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>New Window</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Share</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Print</MenubarItem>
					</MenubarContent>
				</MenubarMenu>

				<MenubarMenu>
					<MenubarTrigger>Merda</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							New Tab <MenubarShortcut>⌘T</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>New Window</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Share</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Print</MenubarItem>
					</MenubarContent>
				</MenubarMenu>

				<MenubarMenu>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							New Tab <MenubarShortcut>⌘T</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>New Window</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Share</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Print</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		</div>
	);
};

export default MenuCustom;
