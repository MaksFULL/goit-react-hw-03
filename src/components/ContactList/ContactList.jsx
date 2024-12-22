import Contact from "./Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contactList, handleDelete }) => {
    return <ul className={s.listbox}>
        {contactList.map(contact => <Contact key={contact.id} contact={contact} handDelete={handleDelete} />)}
    </ul>
};

export default ContactList;
