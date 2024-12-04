import React from "react";
import Searchbar from "../componentes/Searchbar";

const Header = ({ children }) => {
	return (
		<div className="flex flex-row justify-end justify-items-end border-4 border-red-600 border-solid">
			{children}
		</div>
	);
};

export default Header;
