import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const ModalKeranjang = ({ showModal, handleClose, keranjangDetail, jumlah, keterangan, tambah, kurang, changeHandler, handleSubmit, totalHarga, hapusPesanan }) => {
	if (keranjangDetail) {
		return (
			<div>
				<Modal show={showModal} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>
							{keranjangDetail.product.nama} {"  "}( <strong>Rp. {numberWithCommas(keranjangDetail.product.harga)}</strong> )
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3" controlId="exampleform.ControlInput1">
								<Form.Label>Total Harga</Form.Label>
								<p>
									<strong>Rp. {numberWithCommas(totalHarga)}</strong>
								</p>
							</Form.Group>

							<Form.Group className="mb-3" controlId="exampleform.ControlInput1">
								<Form.Label>Jumlah : </Form.Label>
								<br />
								<Button variant="primary" siza="sm" className="me-2" onClick={() => kurang()}>
									<FontAwesomeIcon icon={faMinus} />
								</Button>
								<strong>{jumlah}</strong>
								<Button variant="primary" siza="sm" className="ms-2" onClick={() => tambah()}>
									<FontAwesomeIcon icon={faPlus} />
								</Button>
							</Form.Group>

							<Form.Group className="mb-3" controlId="exampleform.ControlTextarea1">
								<Form.Label>Keterangan :</Form.Label>
								<Form.Control as="textarea" rows="5" cols="5" name="keterangan" value={keterangan} onChange={(event) => changeHandler(event)} placeholder="Contoh : Pedas, Nasi setengah, dll" />
							</Form.Group>
							<Button variant="primary" type="submit">
								Simpan
							</Button>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="danger" onClick={() => hapusPesanan(keranjangDetail.id)}>
							<FontAwesomeIcon icon={faTrash} /> Hapus Pesanan
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	} else {
		return (
			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Kosong</Modal.Title>
				</Modal.Header>
				<Modal.Body>Kosong</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
};

export default ModalKeranjang;
