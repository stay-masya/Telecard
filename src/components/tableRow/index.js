import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { delContactAction } from "../../store/contactBookReducer";
import { ChangeContactRow } from "../../components";
import style from "./tableRow.module.scss";

export const TableRow = ({ name, lastname, age, pager, index }) => {
  const dispatch = useDispatch();

  const [isModify, setisModify] = useState(false);

  const onDelContact = pager => {
    dispatch(delContactAction(pager));
  };

  const onChangeContact = () => {
    setisModify(!isModify);
  };

  return (
    <>
      {!isModify ? (
        <tr>
          <td>{index + 1}</td>
          <td>{name}</td>
          <td>{lastname} </td>
          <td>{age}</td>
          <td>{pager}</td>
          <td>
            <span onClick={() => onChangeContact()}>
              <img className={style.Images} width="35" src="/images/change.png" alt="del" />
            </span>
            <span onClick={() => onDelContact({ pager })}>
              <img className={style.Images} width="35" src="/images/del.png" alt="del" />
            </span>
          </td>
        </tr>
      ) : (
        <ChangeContactRow
          name={name}
          lastname={lastname}
          age={age}
          pager={pager}
          index={index}
          setisModify={setisModify}
        />
      )}
    </>
  );
};
