import { useState } from 'react';

//{items: [], headings: string}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook
  const [selectedItems, setSelectedItems] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            className={selectedItems === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => {
              setSelectedItems(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
