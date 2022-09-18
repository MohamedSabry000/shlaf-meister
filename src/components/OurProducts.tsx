import React, { useEffect, useState } from 'react';
// import ItemsCarousel from 'react-items-carousel';
import { useDispatch, useSelector } from 'react-redux'
import { IProduct } from '../redux/Interfaces';
import { getProductsFromAPI } from '../redux/slices/products-slice';
import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";
import MediaCard from "./MediaCard";

import "swiper/css/grid";
import { Alert, Button, CircularProgress, useMediaQuery } from '@mui/material';


// install Swiper modules
SwiperCore.use([Navigation]);


function OurProducts() {
  const dispatch = useDispatch()
  const { products, isLoading, isSuccess, isError} = useSelector((state: any) => state.products)

  const phoneWidth = useMediaQuery('(max-width: 600px)');
  const tabletWidth = useMediaQuery('(min-width: 600px) and (max-width: 960px)');
  const desktopWidth = useMediaQuery('(min-width: 960px)');
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    phoneWidth && setSlidesPerView(1);
    tabletWidth && setSlidesPerView(2);
    desktopWidth && setSlidesPerView(4);
  }, [ phoneWidth, tabletWidth, desktopWidth ])

  useEffect(() => {
    dispatch(getProductsFromAPI() as any)
  }, [dispatch])

  return isLoading? <div className="flex-center"><CircularProgress /></div>
                    : isError? <Alert severity="error">Error</Alert> : isSuccess && (
    <div style={{width: '100%', padding: "0 5%"}} id="our-products">
      <SectionTitle title="Our Products" />
      <div style = {{ width: "100%" }} >
        <div style= {{
          width: "100%"
        }}
        >
          <div style={{ padding: `0 40px`, margin: "30px 0" }}>
            <Swiper
              slidesPerView={slidesPerView}

              spaceBetween={20}
              pagination={false}
              navigation={true}
              grid={{
                rows: 2,
                fill: "row",

              }}
              modules={[Grid]}
            >
              {products.map((item: IProduct) => {
              return (
                  <SwiperSlide key={item.id}>
                    <MediaCard item={item} type={false} />
                  </SwiperSlide>
              )}
            )}
            </Swiper>
          </div>
          <div className="flex-center" style={{ padding: `0 40px`, margin: "30px 0" }}>
            <Button size="small" className='more-details'>See More</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProducts