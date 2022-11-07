import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './preview-collection.style.scss';

const PreviewCollection = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, i) => i < 4)
                    .map(({id, ...itemPorps}) => (<CollectionItem key={id} {...itemPorps} />))   
            }
        </div>
    </div>
);

export default PreviewCollection;