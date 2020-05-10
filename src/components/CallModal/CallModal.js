import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './CallModal.css';


function CallModal({ status, callFrom, startCall, rejectCall, contactUser }) {
  const acceptWithVideo = (video) => {
    const config = { audio: true, video };
    return () => startCall(false, callFrom, config);
  };

  return (
    <div className={classnames('call-modal', status)}>
      <p>
        <span className="caller">{`${contactUser} is calling`}</span>
      </p>
      <button
        type="button"
        className="btn-action fa fa-video"
        onClick={acceptWithVideo(true)}
      />
      <button
        type="button"
        className="btn-action fa fa-phone"
        onClick={acceptWithVideo(false)}
      />
      <button
        type="button"
        className="btn-action hangup fa fa-phone"
        onClick={rejectCall}
      />
    </div>
  );
}

CallModal.propTypes = {
  status: PropTypes.string.isRequired,
  callFrom: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired,
  rejectCall: PropTypes.func.isRequired
};

export default CallModal;