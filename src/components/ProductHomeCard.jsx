import React from 'react';
import useGetImage from '@hooks/useGetImage';
import '@styles/productHomeCard.sass'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
});

const ProductHomeCard = ({ product }) => {
    const image = useGetImage(product.id)

    return (
        <div className="product-home-card">
            <figure>
                <img src={image.image_url} alt={product.name} />
            </figure>
            <section className="product-info">
                <p className="product-title">
                    {product.name + ' ' + product.detail}
                </p>
                <span className="product-price">
                    {formatter.format(product.untaxed_price)}
                </span>
                <div className="product-actions">
                    <div className="quantity-selector">
                        <span>
                            -
                        </span>
                        <span>
                            {1}
                        </span>
                        <span>
                            +
                        </span>
                    </div>
                    <button className='a2c-btn' >
                        Add to cart
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ProductHomeCard;