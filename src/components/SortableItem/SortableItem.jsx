import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { RxDragHandleDots2 } from 'react-icons/rx';

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
        <div className='dndItemContent'>
          <div className='dragHandle' {...attributes} {...listeners}>
            <RxDragHandleDots2 className='dragHandleIcon' />
          </div>
          <p className='itemName'>{props.id}</p>
        </div>
      </div>
    </div>
  );
};

export default SortableItem;
