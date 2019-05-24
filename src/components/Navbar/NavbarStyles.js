import styled from 'styled-components'

export const NavWrapper = styled.div`
    width: 100%;
    height: 50px;

    background:#fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 8px 0px 14px 0px rgba(70, 70, 70, 0.55);
    
    position: fixed;
    left: 0;
    top: 0;
`;

export const NavList = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    
    margin: 0 auto;


    list-style: none;

    height: 100%;
    max-width: 1024px;

    font-size: 1.8em;
    line-height: 1.2em;

    
    li{
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        a{
            text-decoration: none;
            color: #C0C0C0;

            transition: all 100ms linear;
            &.active{
                font-weight: bold;
                color: #808080;
                font-size: 1.2em;
            }
            &:hover{
                color: #808080;
            }
        }
    }
`;

