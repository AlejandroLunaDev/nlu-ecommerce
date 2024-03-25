import React from 'react';
import { Add } from '@/components/icons/Add';
import { Remove } from '@/components/icons/Remove';

export function ItemCount({ quantity, onAddCart, onRemoveCart }) {
    return (
        <section>
            <article className='flex items-center gap-1'>
                <button className='border rounded-sm' onClick={() => onAddCart()}>
                    <Add />
                </button>
                <div className='text-[13px] border rounded-sm px-3'>
                {quantity}
                </div>
                <button className='border rounded-sm' onClick={() => onRemoveCart()}>
                    <Remove />
                </button>
            </article>
        </section>
    );
}
