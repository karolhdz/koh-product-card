# KOH-Product-Card

este es un paquete de pruebas de despliegue de NPM

## Karol Olguín Hdz

## Ejemplo

```
import { ProductButtons, ProductImage, ProductTitle, ProductCard } from 'koh-product-card';

```
            <ProductCard
                product={product}
                initialValues={{
                    count: 4,
                    // maxCount: 10,
                }}
            >
                {
                    ({ reset, count, onHandleIncrease, isMaxCountReached }) => (
                        <>
                            <ProductImage/>
                            <ProductTitle />
                            <ProductButtons/>

                        </>
                    )
                }
            </ProductCard>