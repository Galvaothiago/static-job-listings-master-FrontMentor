import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    p {
        padding: .5rem;
        background-color: var(--LightGrayishCyanFilterTablets);
        text-align: center;
        color: var(--DesaturatedDarkCyan);

        font-size: .87rem;
        font-weight: 700;
    }

    img {
        padding: .5rem;
        background-color: var(--DesaturatedDarkCyan);
        cursor: pointer;
        transition: all .2s;

        &:hover {
            background-color: var(--VeryDarkGrayishCyan);
        }
    }
`
