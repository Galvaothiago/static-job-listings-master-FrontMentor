import { CardContainer, ContainerFeatured, ContainerLeft, ContainerNew, ContainerRight } from "./styles";

export function Card() {
    return (
        <CardContainer>
            <ContainerLeft>
                <img src="/images/photosnap.svg" alt="Profile" />
                <div>
                    <div>
                        <p>Photosnap</p>
                        <div>
                            <ContainerNew>New!</ContainerNew>
                            <ContainerFeatured>Featured</ContainerFeatured>
                        </div>
                    </div>
                    <h1>Senior Frontend Developer</h1>
                    <span>
                        <li>1d ago</li>
                        <li>Full Time</li>
                        <li>USA only</li>
                    </span>
                </div>
            </ContainerLeft>

            <ContainerRight>
                <p>JavaScript</p>
                <p>CSS</p>
            </ContainerRight>
        </CardContainer>
    )
}