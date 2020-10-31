import { Button } from "components/buttons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeUserName, setDecrement, setIncrement, setValueDec, setValueInc } from "reducers/main/actions";
import { getCount, getDarkMode, getUserBalanceState, getValue } from "reducers/main/selectors";
import { Color, Size } from "../../components/buttons/button/button";
import { Input } from "../../components/input/input";
import s from "./style.scss";
import cx from "classnames";

// const initialState = {
//   count: 0,
//   valueDec: "-",
//   valueInc: "+",
// };
//
// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return {
//         count: state.count + 1,
//         valueDec: state.valueDec,
//         valueInc: state.valueInc,
//       };
//     case "decrement":
//       return {
//         count: state.count - 1,
//         valueDec: state.valueDec,
//         valueInc: state.valueInc,
//       };
//     case "inputInc":
//       return {
//         valueDec: state.valueDec,
//         valueInc: action.payload,
//         count: state.count,
//       };
//     case "inputDec":
//       return {
//         valueInc: state.valueInc,
//         valueDec: action.payload,
//         count: state.count,
//       };
//     default:
//       throw new Error();
//   }
// }

export function MyFirstPage() {
  const dispatch = useDispatch();
  const count = useSelector(getCount);
  const value = useSelector(getValue);
  const darkMode = useSelector(getDarkMode);
  const { user } = useSelector(getUserBalanceState);
  const handleInc = () => dispatch(setIncrement());
  const handleDec = () => dispatch(setDecrement());
  const onChangeInc = (e) => dispatch(setValueInc(e));
  const onChangeDec = (e) => dispatch(setValueDec(e));

  return (
    <div className={cx(s.container, {[s.dark]: darkMode})}>
      <div className={s.wrap}>
        <div className={s.buttons}>
          <div>
            <Button size={Size.BIG} name={value.valueDec} onClick={handleDec}/>
            <Input value={value.valueDec} onChange={onChangeDec}/>
          </div>
          <div className={s.val}>{count}</div>
          <div>
            <Button size={Size.BIG} name={value.valueInc} onClick={handleInc}/>
            <Input value={value.valueInc} onChange={onChangeInc}/>
          </div>
        </div>
        <div>
          <Input value={user.name} onChange={(e) => dispatch(changeUserName(e))}/>
          <Link to={"/"} children={"go to main page"}/>
        </div>
      </div>
    </div>
  )
}
