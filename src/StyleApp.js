import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Dashboard = styled.div`
  width: 100%;
  height: calc(100% - 10rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-flex-start;

  padding: 4.5rem 2rem;


  @media(max-width: 785px) {
    padding: 9rem 2rem;
  }

`

export const HeaderContainer = styled.header`
    width: 100%;
    height: 10rem;
    position: relative;
    padding: 0 2rem;
    display: flex;
    justify-content: center;

    background: var(--DesaturatedDarkCyan);
    background-image: url('/images/bg-header-desktop.svg');

    > div {
      transform: translateY(200%);

      @media(max-width: 785px) {
        transform: translateY(80%);
      }
    }

`