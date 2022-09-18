import { Alert, Card, CircularProgress, Grid, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../redux/Interfaces";
import { getProductTypesFromAPI } from "../redux/slices/product-types-slice";
import { IProductType } from "../redux/Interfaces";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import MediaCard from "./MediaCard";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";
// install Swiper modules
SwiperCore.use([Navigation]);

function ProductTypes() {
  const dispatch = useDispatch();
  const { productTypes, isLoading, isSuccess, isError } = useSelector(
    (state: any) => state.productTypes
  );
  const [activeCategory, setActiveCategory] = useState<IProductType | null>(null);
  const [items, setItems] = useState<IProduct[]>([]);

  const phoneWidth = useMediaQuery('(max-width: 600px)');
  const tabletWidth = useMediaQuery('(min-width: 600px) and (max-width: 960px)');
  const desktopWidth = useMediaQuery('(min-width: 960px)');
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    phoneWidth && setSlidesPerView(1);
    tabletWidth && setSlidesPerView(2);
    desktopWidth && setSlidesPerView(3);
  }, [ phoneWidth, tabletWidth, desktopWidth ])

  useEffect(() => {
    dispatch(getProductTypesFromAPI() as any);
  }, [dispatch]);

  useEffect(() => {
    if(isSuccess === true) {
      setActiveCategory(productTypes[0]);
      setItems( productTypes[0].products );
      console.log(productTypes[0].products);
    }
  }, [isSuccess]);

  const handleCategoryClick = (category: IProductType) => {
    setActiveCategory(category);
    setItems(category.products);
  };

  const renderHeader = () => {
    return Array.from(Array(3).keys()).map((i) => (
      <Grid
        item
        sm={12}
        md={4}
        key={i}
        className="flex-center"
        style={{
          height: 71,
          background: activeCategory === productTypes[i] ? "#F26522" : "#141E36",
          width: "100%",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => handleCategoryClick(productTypes[i])}
      >
        <div
          className="flex-center"
          style={{
            width: "100%",
            margin: "5px 0",
            borderLeft: "1px solid #FFF",
            padding: "13px 0",
          }}
        >
          {productTypes[i].title_english}
        </div>
      </Grid>
    ));
  };

  return isLoading ? (
    <div className="flex-center"><CircularProgress /></div>
  ) : isError ? (
    <Alert severity="error">Error</Alert>
  ) : (
    isSuccess && (
      <div style={{ width: "100%", padding: "5%", paddingBottom: 0 }} id="product-types">
        <SectionTitle title="Our mattresses lines" />
        <div style={{ width: "100%" }}>
          <Grid container spacing={0}>
            {renderHeader()}
          </Grid>
          <div style={{ padding: "0 40px", margin: "30px 0" }}>
            <Swiper
              slidesPerView={slidesPerView}
              centeredSlides={true}
              spaceBetween={20}
              pagination={false}
              navigation={true}
              className="mySwiper"
            >
              {items.map((item) => {
              return (
                  <SwiperSlide key={item.id}>
                    <MediaCard item={item} type={true} />
                  </SwiperSlide>
              )}
            )}
            </Swiper>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductTypes;
