let contacts = [
  {
    id: 1,
    name: 'Falih Nur Andino',
    tag: 'falihnurandino',
    imageUrl: '/images/default.jpg',
  },
  {
    id: 2,
    name: 'Gabriel Rolas',
    tag: 'gabrielrolas',
    imageUrl: '/images/default.jpg',
  },
  {
    id: 3,
    name: 'Fajar Haryanto',
    tag: 'fajarharyanto',
    imageUrl: '/images/default.jpg',
  },
  {
    id: 4,
    name: 'Aprillian Abu',
    tag: 'aprillianabu',
    imageUrl: '/images/default.jpg',
  },
];

function getContacts() {
  return contacts;
}

function addContact(contact) {
  contacts = [
    ...contacts,
    { id: +new Date(), imageUrl: '/images/default.jpg', ...contact },
  ];
}

function deleteContact(id) {
  contacts = contacts.filter((contact) => contact.id !== id);
}

export { getContacts, addContact, deleteContact };
