import React from 'react';
import classes from './style.module.css'
import { Col } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

export const Loading = () => {
    return (

    <div className={classes.lds_ring}><div></div><div></div><div></div><div></div></div>
    )
}

export const LoadingProducts = () => {
    return (
        <>
            <Col sm={6} md={4} lg={3} style={{ marginBottom: '30px', marginTop: '30px' }}>
                <Skeleton height={180} width={300} />
                <Skeleton height={20} width={300} />
                <Skeleton height={50} width={300} />
            </Col>

            <Col sm={6} md={4} lg={3} style={{ marginBottom: '30px', marginTop: '30px' }}>
                <Skeleton height={180} width={300} />
                <Skeleton height={20} width={300} />
                <Skeleton height={50} width={300} />
            </Col>

            <Col sm={6} md={4} lg={3} style={{ marginBottom: '30px', marginTop: '30px' }}>
                <Skeleton height={180} width={300} />
                <Skeleton height={20} width={300} />
                <Skeleton height={50} width={300} />
            </Col>

            <Col sm={6} md={4} lg={3} style={{ marginBottom: '30px', marginTop: '30px' }}>
                <Skeleton height={180} width={300} />
                <Skeleton height={20} width={300} />
                <Skeleton height={50} width={300} />
            </Col>

            <Col sm={6} md={4} lg={3} style={{ marginBottom: '30px', marginTop: '30px' }}>
                <Skeleton height={180} width={300} />
                <Skeleton height={20} width={300} />
                <Skeleton height={50} width={300} />
            </Col>

            <Col sm={6} md={4} lg={3} style={{ marginBottom: '30px', marginTop: '30px' }}>
                <Skeleton height={180} width={300} />
                <Skeleton height={20} width={300} />
                <Skeleton height={50} width={300} />
            </Col>

            <Col sm={6} md={4} lg={3} style={{ marginBottom: '30px', marginTop: '30px' }}>
                <Skeleton height={180} width={300} />
                <Skeleton height={20} width={300} />
                <Skeleton height={50} width={300} />
            </Col>

            <Col sm={6} md={4} lg={3} style={{ marginBottom: '30px', marginTop: '30px' }}>
                <Skeleton height={180} width={300} />
                <Skeleton height={20} width={300} />
                <Skeleton height={50} width={300} />
            </Col>

        </>
    )
}

export const LoadingProduct = () => {
    return (
        <>
            <Col sm={12} md={6} lg={6} style={{ marginBottom: '30px', marginTop: '30px' }}>
                <Skeleton  className={classes.image_loading} />
            </Col>

            <Col sm={12} md={6} lg={6} style={{ marginBottom: '30px', marginTop: '30px' }}>
                <div className={classes.details_loading}>
                <Skeleton height={180} width={500} className={classes.details_loading_1} />
                <Skeleton height={20} width={100} />
                <Skeleton height={20} width={100} />
                <Skeleton height={50} width={250} />
                <Skeleton height={150} width={500} className={classes.details_loading_5}/>  
                </div>
                
            </Col>
        </>
    )
}
