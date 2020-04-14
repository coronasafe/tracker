import React from "react";
import Modal from "../../common/Modal";
import Table from "../../common/Table";
import { existingSuspectsConfig } from "./config";
// import Button from "../../common/Button";

function ExistingSuspectsPopup({ existingSuspects, onClose, onOverride }) {
  if (existingSuspects.length === 0) {
    return <div />;
  }
  return (
    <Modal onClose={onClose}>
      <div className="p-8">
        <div className="p-3" style={{ maxHeight: "50vh", overflowY: "scroll" }}>
          <Table rows={existingSuspects} config={existingSuspectsConfig} />
        </div>
        <br />
        {/*<Button text="Override and create" onClick={onOverride} />*/}
      </div>
    </Modal>
  );
}

export default ExistingSuspectsPopup;
