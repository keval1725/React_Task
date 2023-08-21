import React from 'react'
function Header({data})
{
    console.warn(data,"header")
    return(
        <div>
             <div className="add-to-cart">
            <span className="cart-count">{data.cardData.length}</span>
                <image src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </div>
    )
}

export default Header
