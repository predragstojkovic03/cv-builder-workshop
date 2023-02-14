import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableItem from '../SortableItem/SortableItem';

const DragAndDropList = ({ items, setItems, removeItem }) => {
  const handleDragEnd = (event) => {
    //console.log('Drag end called');
    const { active, over } = event;
    // console.log('ACTIVE:' + active.id);
    // console.log('OVER:' + over.id);

    if (active.id !== over.id) {
      setItems((items) => {
        console.log(active);
        console.log(items);
        const activeIndex = items.findIndex((item) => item.id === active.id);
        const overIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <SortableItem
            key={item.id}
            id={item.id}
            companyName={item.companyName}
            content={item.content}
            removeItem={removeItem}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default DragAndDropList;
