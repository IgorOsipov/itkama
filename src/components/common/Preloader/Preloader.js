import React, {Component} from 'react'
import preloader from '../../../assets/img/preloader.svg'
import styled from 'styled-components'

const PreloaderDiv = styled.div`
    position: absolute;
    left: 47%;
    top: 35%;

    background-color: #fff;
    border: 1px solid rgba(80, 80, 80, 0.308);
    border-radius: 5%;

    width: 100px;
    height: 80px;
`;

const ImageDiv = styled.img`
    width: 100%;
    height: 100%;
`;

class Preloader extends Component {
    render(){
        return (
            <PreloaderDiv>
                <ImageDiv src={preloader}/>
            </PreloaderDiv>
        )
    }
}

export default Preloader