import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo({repo}){

    return(
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel='noreffer' target="_blank">Ver repositório</a><br/>
            <a href='#' className='remover' rel='noreffer'>Remover</a>
            <hr></hr>
        </ItemContainer>
    )
}

export default ItemRepo;