import { Container } from "./styles";

export function ItemFilter({ textContent }) {
    return (
        <Container>
            <p>{ textContent }</p>
            <img src="/images/icon-remove.svg" alt="Icon Remove" />
        </Container>
    )
}