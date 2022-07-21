import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/productos';

describe('Pruebas sobre el componente <ProductImage/>', () => {
    test('Debe de mostrar el componente correctamente con la imagen personalizado', () => {

        const wrapper = renderer.create(
            <ProductImage img='cosa1.jpg' />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
      
    });

    test('Debe de mostar el componente con la imagen  del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                       <ProductImage/> 
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
      
    })
    
})
