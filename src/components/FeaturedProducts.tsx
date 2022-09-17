import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { IProduct } from '../redux/Interfaces';
import { getFeaturedProductsFromAPI } from '../redux/slices/featured-products-slice';
import SectionTitle from './SectionTitle';


function FeaturedProducts() {
  const dispatch = useDispatch()
  const { featuredProducts, isLoading, isError, isSuccess } = useSelector((state: any) => state.featuredProducts)

  useEffect(() => {
    dispatch(getFeaturedProductsFromAPI() as any)
  }, [dispatch])


  const renderParagraphs = (text: string) => text.split('\n').map((paragraph: string, index: number) => <p key={index}>{paragraph}</p>)
  return (
    <div style={{width: '100%', padding: "5%", backgroundColor: '#F9F9F9'}}>
      <SectionTitle title="Featured Products" />
      {isLoading? <div>Loading</div> : isError? <div>Error</div> : isSuccess && (
        <Container>
          {
            featuredProducts?.map((product: IProduct) => (
              <Grid container spacing={3}  key={product.id}>
                <Grid item xs={12} md={6}>
                  <h3 style={{color: '#F26522'}}>{product.title_english}</h3>
                  <p style={{color: '#14325C'}}><small><strong>{product.category_english}</strong></small></p>
                  <div className='content' style={{fontSize: '14px', color: '#6F6F6F'}}>
                    {renderParagraphs(product.description_english)}
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div style={{backgroundColor: '#F26522', width: '75%', height: '100%', position: 'relative', marginLeft: '15%'}}>
                    <img
                      src={`http://demos-iconcreations.com/schlafmiestrback${product.product_photos[0].photo_path}`}
                      alt={product.title_english}
                      style={{
                        height: '100%',
                        objectFit: 'contain',
                        width: '100%',
                        position: 'absolute',
                        left: '-15px',
                        top: '15px',
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
            ))
          }
        </Container>
      )}
    </div>
  )
}

export default FeaturedProducts