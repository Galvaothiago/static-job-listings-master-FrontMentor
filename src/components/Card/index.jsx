import { CardContainer, ContainerLeft, ContainerRight } from "./styles";

export function Card() {
    return (
        <CardContainer>
            <ContainerLeft>
                <img src="/images/photosnap.svg" alt="Profile" />
                <div>
                    <div></div>
                    <h1></h1>
                    <span></span>
                </div>
            </ContainerLeft>

            <ContainerRight>
                <p>Hello</p>
                <p>Hello</p>
            </ContainerRight>
        </CardContainer>
    )
}