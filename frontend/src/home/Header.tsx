import React from "react";
import Searchbar from "../componentes/Searchbar";

const Header = ({ children }) => {
	return (
		<div className="flex flex-row border-4 border-red-600 border-solid">
			<Searchbar />

			{children}
		</div>
	);
};

export default Header;
