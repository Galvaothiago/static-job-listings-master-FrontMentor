import styled from 'styled-components'

export const ContainerFilter = styled.div`
    max-width: 73rem;
    width: 100%;
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
    z-index: 1;
    border-radius: 5px;

    height: 4rem;
    background: #ffff;

    @media(max-width: 785px) {
        height: 8rem;
    }
   

    box-shadow: -2px 6px 30px -24px rgba(0,0,0,.8);
    -webkit-box-shadow: -2px 6px 30px -24px rgba(0,0,0,.8);
    -moz-box-shadow: -2px 6px 30px -24px rgba(0,0,0,.8);

    > div {
        display: flex;
        gap: 1rem;

        @media(max-width: 785px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            
        }
    }

    > button {
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
        color: var(--DesaturatedDarkCyan);

        &:hover {
            text-decoration: underline;
        }
    }
    
`
