import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
	return (
		<>
			<Flex
				bg="white"
				height="44px"
				padding="6px 12px"
				justifyContent={{ md: "space-between" }}>
				<Flex
					align="center"
					width={{ base: "40px", md: "auto" }}
					mr={{ base: 0, md: 2 }}
					cursor="pointer"
					// onClick={() => onSelectMenuItem(defaultMenuItem)}
				>
					{/* <Image src="/images/redditFace.svg" height="30px" alt="logoImg" /> */}
					{/* <Image
          display={{ base: "none", md: "unset" }}
          src="/images/redditText.svg"
          height="46px" alt='logoName'
        /> */}
					<Text>LOGO</Text>
				</Flex>
				{/* <Directory /> */}
				<SearchInput />
				<RightContent  />
			</Flex>
		</>
	);
};
export default Navbar;
