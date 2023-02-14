import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { AiOutlineDelete } from 'react-icons/ai';

import './SortableItem.css';

const SortableItem = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div className='dndItemWrapper'>
        <div className='dndItemContent fullWidth flex align-items-center justify-content-space-between'>
          <div className='dndItemLeft flex'>
            <button
              type='button'
              className='dragHandle'
              {...attributes}
              {...listeners}
            >
              <RxDragHandleDots2 className='dragHandleIcon' />
            </button>
            <div className='dndInfo'>{props.content()}</div>
          </div>
          <div className='dndItemRight flex align-items-center'>
            <button
              type='button'
              className='dndItemDeleteBtn'
              onClick={() => props.removeItem(props.id)}
            >
              <AiOutlineDelete className='dndItemDeleteIcon' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortableItem;
