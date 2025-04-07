import { loadBills } from "common/localStorage";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useMemo, useState } from "react";
import { Bill } from "../interfaces/bill";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

export function Admin() {
  const bills = useMemo(() => loadBills(), []);
  const [modalDetails, setModalDetails] = useState(false);
  const [modalInfo, setModalInfo] = useState<Bill | null>(null);
  const handleModal = (bill: Bill) => {
    setModalDetails(true);
    setModalInfo(bill);
  };
  return (
    <>
      <h1>Admin</h1>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Bill Id</th>
              <th>Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {bills.length > 0 ? (
              bills.map((bill) => (
                <tr key={bill.clientNo}>
                  <td>{bill.clientNo}</td>
                  <td>{bill.clientInfo.name}</td>
                  <td>
                    <a onClick={() => handleModal(bill)}></a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No bill to show at the moment</td>
              </tr>
            )}
          </tbody>
        </Table>
        <Modal onClose={() => setModalDetails(false)}>
          <Modal.Dialog>
            <Modal.Header>{modalInfo?.billDetails.id}</Modal.Header>
            <Modal.Body>
              <ListGroup>
                {Object.entries(modalDetails).map(([key, value]) => (
                  <ListGroup.Item>
                    {key}: {value}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </Container>
    </>
  );
}
