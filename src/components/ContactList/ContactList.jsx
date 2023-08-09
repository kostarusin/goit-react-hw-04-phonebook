import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul className={style.list}>
        {contacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <li className={style.listEl} key={id}>
              {name}: {number}
              <div className={style.listBtnWrap}>
                <button
                  type="button"
                  className={style.listBtn}
                  onClick={() => onDeleteContact(id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
