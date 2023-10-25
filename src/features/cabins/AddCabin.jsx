import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
// import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <>
      <Modal>
        <div>
          <Modal.Open opens="cabin-form">
            <Button>Add new Cabin</Button>
          </Modal.Open>
        </div>
        {/* <Modal.Window
          name="cabin-form"
          render={(closeModal) => {
            return <CreateCabinForm onCloseModal={closeModal} />;
          }}
        ></Modal.Window> */}
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>

      {/* <Modal>
        <Modal.Open opens="cabin-table">
          <Button>View Cabin</Button>
        </Modal.Open>
        <Modal.Window
          name="cabin-table"
          render={() => {
            return <CabinTable />;
          }}
        ></Modal.Window>
      </Modal> */}
    </>
  );
}

export default AddCabin;
