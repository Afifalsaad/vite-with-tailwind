import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOption = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    // console.log(pricingData)
    return (
        <div className='grid md:grid-cols-3 mt-10'>
            {
                pricingData.map(pricing=> <PricingCard pricing={pricing}></PricingCard>)
            }
        </div>
    );
};

export default PricingOption;