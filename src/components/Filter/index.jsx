import { ItemFilter } from "../ItemFilter";
import { ContainerFilter } from "./styles";

export function Filter({ tags, onRemove, onClean }) {
    return (
        <ContainerFilter>
            <div>
                { tags.map( (tag, index) => <ItemFilter key={`${index}-${tag}`} onRemove={onRemove} textContent={tag}/> ) }
            </div>
            <button onClick={onClean}>Clear</button>
        </ContainerFilter>
    )
}