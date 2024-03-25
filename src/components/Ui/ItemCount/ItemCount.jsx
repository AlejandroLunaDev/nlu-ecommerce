import React from 'react';
import { Add } from '@/components/icons/Add';
import { Remove } from '@/components/icons/Remove';

export function ItemCount({ quantity, onAddCart, onRemoveCart }) {
    return (
        <section>
            <article>
                <button onClick={() => onAddCart()}>
                    <Add />
                </button>
                {quantity}
                <button onClick={() => onRemoveCart()}>
                    <Remove />
                </button>
            </article>
        </section>
    );
}
