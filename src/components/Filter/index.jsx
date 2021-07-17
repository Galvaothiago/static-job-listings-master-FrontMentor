import { ItemFilter } from "../ItemFilter";
import { ContainerFilter } from "./styles";

export function Filter() {
    return (
        <ContainerFilter>
            <div>
                <ItemFilter textContent="Frontend"/>
                <ItemFilter textContent="Sass"/>
                <ItemFilter textContent="NodeJs"/>
                <ItemFilter textContent="CSS" />
            </div>
            <button>Clear</button>
        </ContainerFilter>
    )
}