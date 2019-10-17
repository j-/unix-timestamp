import * as React from 'react';
import { useSelector } from 'react-redux';
import { getOutputTime, isInputValid } from '../store';

const AppOutputs: React.FC = () => {
  const outputTime = useSelector(getOutputTime);
  const isValid = useSelector(isInputValid);
  
  if (!isValid) return null;

  return (
    <div className="AppOutputs">
      <div className="row">
        <div className="col-sm">
          <div className="form-group">
            <label htmlFor="AppOutputs-milliseconds"><strong>Unix timestamp (milliseconds)</strong></label>
            <input
              id="AppOutputs-milliseconds"
              type="text"
              readOnly={true}
              className="form-control-plaintext"
              value={outputTime.getTime()}
            />
          </div>
        </div>

        <div className="col-sm">
          <div className="form-group">
            <label htmlFor="AppOutputs-seconds"><strong>Unix timestamp (seconds)</strong></label>
            <input
              id="AppOutputs-seconds"
              type="text"
              readOnly={true}
              className="form-control-plaintext"
              value={outputTime.getTime() / 1000}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm">
          <div className="form-group">
            <label htmlFor="AppOutputs-iso"><strong>ISO string</strong></label>
            <input
              id="AppOutputs-iso"
              type="text"
              readOnly={true}
              className="form-control-plaintext"
              value={outputTime.toISOString()}
            />
          </div>
        </div>

        <div className="col-sm">
          <div className="form-group">
            <label htmlFor="AppOutputs-locale"><strong>Locale date/time</strong></label>
            <input
              id="AppOutputs-locale"
              type="text"
              readOnly={true}
              className="form-control-plaintext"
              value={outputTime.toLocaleString()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppOutputs;
