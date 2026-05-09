import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
function ErrorModal(props) {
  const {modal, modalToggle} = props;
    return (
    <>
       <Modal isOpen={modal} toggle={modalToggle}>
        <ModalHeader toggle={modalToggle}>Hata</ModalHeader>
        <ModalBody>
         İnternet bağlantısı nedeniyle bir hata oluştu. Lütfen bağlantınızı kontrol ediniz.
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={modalToggle}>
            Tamam
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </>
)}
export default ErrorModal;