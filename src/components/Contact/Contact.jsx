/* eslint-disable react/prop-types */
import styles from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.contact}>
      <span>{contact.name}</span>:{" "}
      <span className={styles.number}>{contact.number}</span>
      <button
        onClick={() => onDeleteContact(contact.id)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
