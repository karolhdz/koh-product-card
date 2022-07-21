import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product2 } from '../data/productos';

const {act} = renderer; 

describe('Pruebas sobre el componente <ProductCard/>', () => {
    test('Debe de mostrar el componente correctamente con la imagen personalizado', () => {

        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    });
    test('Debe de incrementar el contador ', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    ({ count, onHandleIncrease }) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => onHandleIncrease(1)} >+</button>
                        </>

                    )
                }
            </ProductCard>
        )

        let tree = wrapper.toJSON()
        
        expect(tree).toMatchSnapshot();

        act(() =>{
            (tree as any).children[2].props.onClick();
        })

        

        tree = wrapper.toJSON();

        expect((tree as any).children[1].children[0]).toBe('1')
        
    })

})
