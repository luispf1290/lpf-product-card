import React from "react";

import renderer from 'react-test-renderer';
import ProductCard from "../../src/components";
import { product2 } from "../data/products";

const {act} = renderer;

describe('ProductCard', () => {
    test("debe de mostar el componente correctamente", () => {
       const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => <h1>ProductCard</h1>
                }
            </ProductCard>
       );
       expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test("debe de incrementar el contador", () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    ({count, handleIncreaseBy}) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => handleIncreaseBy(+1)}></button>
                        </>
                    )
                }
            </ProductCard>
       );
       let tree = wrapper.toJSON();
       expect(tree).toMatchSnapshot();

       act(() => {
           (tree as any).children[2].props.onClick();
       })

       tree = wrapper.toJSON();
       expect((tree as any).children[1].children[0]).toBe('0')
    });
    
    
})