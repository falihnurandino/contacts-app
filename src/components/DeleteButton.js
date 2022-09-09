import React from 'react';
import PropType from 'prop-types';

function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
}

DeleteButton.propType = {
  id: PropType.number.isRequired,
  onDelete: PropType.func.isRequired,
};

export default DeleteButton;
