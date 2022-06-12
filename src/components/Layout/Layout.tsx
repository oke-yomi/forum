import React from "react";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			{/* <Navbar /> */}
			<main>{children}</main>
		</>
	);
};
export default Layout;
