import React, { useEffect, useState } from 'react';
// import ItemsCarousel from 'react-items-carousel';
import { useDispatch, useSelector } from 'react-redux'
import { IProduct } from '../redux/Interfaces';
import { getProductsFromAPI } from '../redux/slices/products-slice';
import SectionTitle from './SectionTitle';


function OurProducts() {
  const dispatch = useDispatch()
  const { products, isLoading, isSuccess, isError} = useSelector((state: any) => state.products)
  useEffect(() => {
    dispatch(getProductsFromAPI() as any)
  }, [dispatch])

  const [activeCategory, setActiveCategory] = useState(products[0] || null)
  const [items, setItems] = useState([])
  const chevronWidth = 40;

  return (
    <div style={{width: '100%', padding: "5%"}}>
      <SectionTitle title="Our Products" />
      <div style = {{ width: "100%" }} >
        <div style= {{
          width: "100%"
        }}
        >
          {
            Array.from(Array(3).keys()).map((i) => (
              <div
                key={i}
                style={{
                  height: 200,
                  background: '#EEE',
                  width: '100%',
                  margin: '0 8px',
                }}
              >
                {products[i].name}
              </div>
            ))
          }
        </div>
        <div style={{ padding: `0 ${chevronWidth}px` }}>
        <div>
          {/* <ItemsCarousel */}
          {/* {items.map((item, i) => <div key={i}>{item.title_english}</div>)} */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default OurProducts