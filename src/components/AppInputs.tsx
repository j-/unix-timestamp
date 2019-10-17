import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getInputValue, getOrderOfMagnitude } from '../store';
import { setInputValue, setOrderOfMagnitude } from '../store/actions';

const AppInputs: React.FC = () => {
  const inputValue = useSelector(getInputValue);
  const oom = useSelector(getOrderOfMagnitude);
  const dispatch = useDispatch();
  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setInputValue(e.currentTarget.value));
  };
  const handleChangeOOM: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setOrderOfMagnitude(e.currentTarget.valueAsNumber));
  };
  return (
    <div className="AppInputs-inputs">
      <div className="row">
        <div className="col-md-9">
          <div className="form-group">
            <label htmlFor="AppInputs-input">Unix timestamp</label><br />
            <input
              id="AppInputs-input"
              className="form-control form-control-lg"
              type="text"
              autoFocus={true}
              autoComplete="off"
              value={inputValue}
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div className="form-group">
            <label htmlFor="AppInputs-oom">Order of magnitude</label><br />
            <input
              id="AppInputs-oom"
              className="form-control form-control-lg"
              type="number"
              value={oom}
              onChange={handleChangeOOM}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppInputs;
