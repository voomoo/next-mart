import { NextPage } from "next";
import { Image } from "semantic-ui-react";
import { BannerPropsType } from "../dataTypes/propsTypes";


const Banner: NextPage<BannerPropsType> = ({ img, link }) => {
	return (
		<Image
			src={img}
			as="a"
			fluid
			href={link}
			target="_blank"
			rounded
			bordered
			centered
			style={{ maxHeight: "200px", overflow: "hidden" }}
		/>
	);
};

export default Banner;
