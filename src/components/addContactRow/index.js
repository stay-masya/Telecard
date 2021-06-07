import React from "react";
import { Button } from "react-bootstrap";
import style from "./addContactRow.module.scss";

export const AddContactRow = ({ formState, setFormState }) => {
  const onChangeInput = e => {
    const name = e.target.name;
    setFormState(prevState => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  return (
    <tr>
      <td>#</td>
      <td>
        <input
          required
          className={style.Input}
          name="name"
          placeholder="Name"
          onChange={onChangeInput}
          type="text"
          value={formState.name}
        />
      </td>
      <td>
        <input
          required
          className={style.Input}
          name="lastname"
          placeholder="Lastname"
          onChange={onChangeInput}
          type="text"
          value={formState.lastname}
        />
      </td>
      <td>
        <input
          required
          className={style.Input}
          name="age"
          placeholder="Age"
          onChange={onChangeInput}
          type="number"
          value={Math.abs(formState.age)}
        />
      </td>
      <td>
        <input
          required
          className={style.Input}
          name="pager"
          placeholder="Pager"
          onChange={onChangeInput}
          type="number"
          value={Math.abs(formState.pager)}
        />
      </td>
      <td>
        <Button type="submit" variant="success">
          Append
        </Button>
      </td>
    </tr>
  );
};
