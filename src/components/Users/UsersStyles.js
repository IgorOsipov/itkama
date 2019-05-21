import styled from 'styled-components';

export const PageBar = styled.div`
    display: flex;
    justify-content: center;

    font-size: 2em;
    line-height: 1.8em;

    margin-top: 0.5em;
`;

export const PageBarSpan = styled.span`
    margin: 0 5px;

    cursor: pointer;
    transition: all 200ms linear;

    &:hover:not(.selected){
        transform: scale(1.2);
        font-weight: bold;
    };

    &.selected{
        font-weight: bold;
        color: #5181b8;
        
        transform: scale(1.5);
    };
`;


export const Wrapper = styled.div`
    border: 1px solid rgb(202, 202, 202);
    border-radius: 1rem;

    padding: 1rem 2rem;
    margin: 1rem;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
`;

export const LeftWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;

    width: 15%;
    height: 100%;

    input[type='button']{
        border: none;
        border-radius: 0.2em;
        text-transform: uppercase;

        font-size: 2em;
        line-height: 1.5em;
        padding: 0.2em 0.7em;
        margin-top: 1rem;

        background-color: #5181b8;
        color: #fff;

        cursor: pointer;

        &:hover{
            background-color: #5181b8;
            box-shadow: 0px 0px 5px 0px rgba(81,129,184,1);
        }
    }
`;

export const Avatar = styled.div`
    width: 120px;
    height: 120px;

    background-image: url(${props => props.ava});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    border-radius: 50%;
    border: 1px solid rgb(207, 207, 207);
`;


export const RightWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;

    padding-left: 3rem;
    
    width: 85%;

    .name_status{
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        

        height: 100%;

        h2{
            font-size: 4em;
            font-weight: 600;
        }

        p{
            font-size: 2em;
            font-weight: 300;

            color: rgb(102, 102, 102);
        }
    }

`;