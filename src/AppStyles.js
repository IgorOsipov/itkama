import styled from 'styled-components';

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;


    max-width: 1024px;
    min-height: 100vh; 
    margin: 0 auto;
    padding-top: 50px;

    background-color: #fff; 
`;

export const AppWrapperContent = styled.div`
    min-height: 100vh;
`;