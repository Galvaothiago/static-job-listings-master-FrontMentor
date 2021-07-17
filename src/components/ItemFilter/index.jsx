import { Container } from "./styles";

export function ItemFilter({ textContent, onRemove }) {
    return (
        <Container>
            <p>{ textContent }</p>
            <img onClick={ () => onRemove(textContent) } src="/images/icon-remove.svg" alt="Icon Remove" />
        </Container>
    )
}