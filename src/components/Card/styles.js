import styled from 'styled-components'

export const CardContainer = styled.div`
    max-width: 73rem;
    width: 100%;
    height: 10rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    border-radius: 5px;
    border-left: 5px solid var(--DesaturatedDarkCyan);

    background-color: #ffff;
 
    box-shadow: -2px 6px 30px -24px rgba(0,0,0,1);
    -webkit-box-shadow: -2px 6px 30px -24px rgba(0,0,0,1);
    -moz-box-shadow: -2px 6px 30px -24px rgba(0,0,0,1);

`

export const ContainerLeft = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
`
