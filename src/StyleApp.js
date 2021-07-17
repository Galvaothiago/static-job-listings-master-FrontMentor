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
  /* position: relative; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow-y: auto;
  padding: 6rem 2rem;


  /* justify-content: center; */
  /* align-items: flex-start; */

`