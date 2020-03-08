import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = ( { collections } ) => (
            <div className="shop-page">
              <CollectionsOverview />
           </div>
        );

export default ShopPage;