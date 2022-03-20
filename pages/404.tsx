import { NextPage } from "next";
import { Image } from "semantic-ui-react";

const NotFoundPage : NextPage = () => {
    return(
        <Image centered src="/assets/404.svg"/>
    )
}

export default NotFoundPage;