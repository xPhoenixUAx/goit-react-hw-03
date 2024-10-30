/* eslint-disable react/prop-types */
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.contact}>
          <span>{contact.name}</span>:{" "}
          <span className={styles.number}>{contact.number}</span>
          <button
            onClick={() => onDeleteContact(contact.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
