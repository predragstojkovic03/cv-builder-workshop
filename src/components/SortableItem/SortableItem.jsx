import React, { useRef } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

import './SortableItem.css';

const SortableItem = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: 'none', // important for working on touch devices
  };

  const handleTouchStart = () => {
    dragHandleRef.current.style.backgroundColor = '#f2f2f2';
  };

  const handleTouchEnd = () => {
    dragHandleRef.current.style.backgroundColor = 'transparent';
  };

  const dragHandleRef = useRef();

  return (
    <div ref={setNodeRef} style={style}>
      <div className='dndItemWrapper'>
        <div className='dndItemContent fullWidth flex align-items-center justify-content-space-between'>
          <div className='dndItemLeft flex'>
            <button
              type='button'
              className='dragHandle'
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              ref={dragHandleRef}
              {...attributes}
              {...listeners}
            >
              <RxDragHandleDots2 className='dragHandleIcon' />
            </button>
            <div className='dndInfo flex'>{props.content()}</div>
          </div>
          <div className='dndItemRight flex align-items-center'>
            <button
              type='button'
              className='dndBtn dndEditItemBtn'
              onClick={() => props.onEdit(props.id)}
            >
              <AiOutlineEdit className='dndEditItemIcon' />
            </button>
            <button
              type='button'
              className='dndBtn dndItemDeleteBtn'
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
