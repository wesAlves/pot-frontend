import React from "react";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import {
    Title,
    SubTitle,
    Paragraph,
    Container,
    Icons,
    SocialIcons,
    CurrentLocation,
} from "./styles";

export default function Profile() {
    return (
        <Container>
            <div>
                <img
                    src="https://avatars0.githubusercontent.com/u/14625919?s=460&u=9165cd58ebc1218f6fe06e37f798705e11bd4108&v=4"
                    alt=""
                />
            </div>
            <Title>
                <span>
                    Portfolio de: <br />
                </span>
                Wesley benvindo
            </Title>
            <CurrentLocation>Florianópolis - Brazil</CurrentLocation>
            <SocialIcons>
                <li>
                    <SiAdobeillustrator color={"#fff"} />
                </li>
                <li>
                    <SiAdobephotoshop color={"#fff"} />
                </li>
            </SocialIcons>

            <SubTitle>Bio:</SubTitle>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur scelerisque ipsum id congue pretium. Etiam auctor
                aliquam elementum. Sed ac enim molestie, tempus arcu vitae,
                hendrerit augue. Nunc interdum quam pellentesque ornare
                faucibus. Donec tempor, quam non tempor dapibus, ex tellus
                efficitur nisl, at dignissim nunc risus quis ipsum. Vestibulum
                mi ante, condimentum sed condimentum eget, elementum sit amet
                tellus. Sed maximus ipsum metus, ac fringilla metus pellentesque
                non. Ut cursus odio id tellus blandit euismod. Vivamus imperdiet
                pellentesque lectus, id suscipit purus dignissim eu. Praesent at
                dolor pretium, posuere lorem et, egestas risus. Sed dictum eros
                pretium elementum lobortis.
            </Paragraph>

            <SubTitle>Skills and Tools:</SubTitle>
            <Icons>
                <li>
                    <SiAdobeillustrator color={"#fff"} />
                </li>
                <li>
                    <SiAdobephotoshop color={"#fff"} />
                </li>
            </Icons>
        </Container>
    );
}
