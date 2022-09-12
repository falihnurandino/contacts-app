import React from 'react';
import PropType from 'prop-types';
import { FiDelete } from 'react-icons/fi';

function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      <FiDelete />
    </button>
  );
}

DeleteButton.propType = {
  id: PropType.number.isRequired,
  onDelete: PropType.func.isRequired,
};

export default DeleteButton;
