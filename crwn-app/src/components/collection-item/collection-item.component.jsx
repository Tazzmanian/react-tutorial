import React, { Component }  from 'react';
import './collection-item.style.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div className='image'
            style={{backgroundImage: `url(${imageUrl})`}}
        ></div>
        <div className='collection-footer'>
            <div className='name'>{name}</div>
            <div className='price'>{price}</div>
        </div>
    </div>
);

export default CollectionItem;