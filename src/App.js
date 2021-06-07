import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { Table } from "react-bootstrap";
import { TableRow, AddContactRow } from "./components";
import { addContactAction } from "./store/contactBookReducer";

function App() {
  const contactBook = useSelector(state => state.contactBookReducer);
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    name: "",
    lastname: "",
    age: 0,
    pager: 0,
  });

  const onSubmitForm = e => {
    e.preventDefault();

    const newContact = {
      ...formState,
      pager: parseInt(formState.pager),
      age: parseInt(formState.age),
    };

    if (contactBook.find(item => item.pager === newContact.pager)) {
      alert("A contact with the same pager already exists!");
      return;
    }

    dispatch(addContactAction(newContact));
    setFormState({
      name: "",
      lastname: "",
      age: 0,
      pager: 0,
    });
  };

  return (
    <div className="App container">
      <h1>Contact Book!</h1>
      <form onSubmit={e => onSubmitForm(e)}>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>№</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Pager</th>
              <th>MB</th>
            </tr>
          </thead>
          <tbody>
            <AddContactRow formState={formState} setFormState={setFormState} />
            {contactBook.map((item, index) => (
              <TableRow key={index} {...item} index={index} />
            ))}
          </tbody>
        </Table>
      </form>
    </div>
  );
}

export default App;
