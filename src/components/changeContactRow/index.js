import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateContactAction } from "../../store/contactBookReducer";
import style from "./changeContactRow.module.scss";

export const ChangeContactRow = props => {
  const dispatch = useDispatch();
  const contactBook = useSelector(state => state.contactBookReducer);

  const [field, setField] = useState(props);
  const [isApplyChange, setIsApplyChange] = useState(false);

  const onDisableChange = () => {
    setField({
      name: props.name,
      lastname: props.lastname,
      age: props.age,
      pager: props.pager,
    });
    props.setisModify(false);
  };

  const onApplyChange = () => {
    setIsApplyChange(true);
    if (contactBook.find(item => item.pager === field.pager && props.pager !== field.pager))
      return alert("The pager must be unique");
    const withOldPager = {
      ...field,
      oldPager: props.pager,
      age: parseInt(field.age),
      pager: parseInt(field.pager),
    };
    dispatch(updateContactAction(withOldPager));
    setIsApplyChange(false);
    props.setisModify(false);
  };

  const onChangeInput = e => {
    const name = e.target.name;
    setField(prevState => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  return (
    <tr>
      <td>{field.index + 1}</td>
      <td>
        <input
          required
          className={style.Input}
          name="name"
          placeholder="Name"
          onChange={e => onChangeInput(e)}
          type="text"
          value={field.name}
        />
      </td>
      <td>
        <input
          required
          className={style.Input}
          name="lastname"
          placeholder="Lastname"
          onChange={e => onChangeInput(e)}
          type="text"
          value={field.lastname}
        />
      </td>
      <td>
        <input
          required
          className={style.Input}
          name="age"
          placeholder="Age"
          onChange={e => onChangeInput(e)}
          type="number"
          value={field.age}
        />
      </td>
      <td>
        <input
          required
          className={style.Input}
          name="pager"
          placeholder="Pager"
          onChange={e => onChangeInput(e)}
          type="number"
          value={field.pager}
        />
      </td>
      <td>
        <button
          disabled={isApplyChange}
          onClick={() => onApplyChange()}
          className={`mr-2 ${style.Button}`}>
          ✅
        </button>
        <button
          disabled={isApplyChange}
          onClick={() => onDisableChange()}
          className={`ml-2 ${style.Button}`}>
          ❌
        </button>
      </td>
    </tr>
  );
};
