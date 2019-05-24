import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;

    padding: 3rem;
`;

export const AvatarContainer = styled.div`
    width: 300px;
    height: 300px;


    background-image: url(${props=>props.photo});
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    overflow: hidden;

    border: none;
`;

export const InfoContainer = styled.div`
    width: auto;
    padding-left: 10em;
    padding-top: 2em;

    h3{
        font-size: 4em;
        line-height: 1.5em;
        font-weight: normal;
    }

    @media (max-width: 576px) { padding-left:0 }
`;