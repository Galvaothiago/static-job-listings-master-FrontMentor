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
 
    box-shadow: -2px 6px 30px -24px rgba(0,0,0,8);
    -webkit-box-shadow: -2px 6px 30px -24px rgba(0,0,0,8);
    -moz-box-shadow: -2px 6px 30px -24px rgba(0,0,0,8);

`
export const ContainerNew = styled.span`
    padding: .5rem;
    border-radius: 30px;

    background-color: var(--DesaturatedDarkCyan);
    color: #fff;
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: 700;
` 

export const ContainerFeatured = styled.span`
    padding: .5rem;
    border-radius: 30px;
    margin-left: .5rem;

    background-color: var(--VeryDarkGrayishCyan);
    color: #fff;
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: 700;
` 

export const ContainerLeft = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 5.8rem;

        > div {
            display: flex;
            align-items: center;
            gap: 1rem;

            p {
                color: var(--DesaturatedDarkCyan);
                font-weight: 700;
            }

        }

        h1 {
            font-weight: 700;
            font-size: 1.2rem;
            color: var(--VeryDarkGrayishCyan);
        }

        > span {
            display: flex;
            color: var(--DarkGrayishCyan);

            li {
                & + li {
                    margin-left: 1rem;
                }

                :not(& + li) {
                    list-style-type: none;
                }
            }
        }
    }
`

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;

    p {
        padding: .6rem;
        background-color: var(--LightGrayishCyanBackground);
        color: var(--DesaturatedDarkCyan);
        line-height: 1rem;

        border-radius: 5px;
        font-weight: 700;

        cursor: pointer;
        transition: all .4s;

        & + p {
            margin-left: 1rem;
        }

        &:hover {
            background-color: var(--DesaturatedDarkCyan);
            color: #ffff;
        }

    }


`
