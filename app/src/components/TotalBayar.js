import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { API_URL } from "../utils/constans";
import { numberWithCommas } from "../utils/utils";
import { Link } from "react-router-dom";

export default class TotalBayar extends Component {
	submitTotalBayar = (totalBayar) => {
		const pesanan = {
			total_bayar: totalBayar,
			menu: this.props.keranjangs,
		};
		axios.post(API_URL + "pesanans", pesanan).then((res) => {
			this.props.history.push("/sukses");
		});
	};

	render() {
		const totalBayar = this.props.keranjangs.reduce((result, item) => {
			return result + item.total_harga;
		}, 0);
		return (
			<>
				{/* web */}
				<div className="fixed-bottom d-block d-md-block">
					<Row>
						<Col md={{ span: 3, offset: 9 }} className="p-4">
							<h4>
								Total harga : <strong className="float-end me-2">Rp. {numberWithCommas(totalBayar)}</strong>
							</h4>
							<Button variant="primary" as={Link} to="/sukses" onClick={() => this.submitTotalBayar(totalBayar)} style={{ width: "100%" }} className="mb-2 mt-4 me-2">
								<FontAwesomeIcon icon={faShoppingCart} /> <strong>Bayar</strong>
							</Button>
						</Col>
					</Row>
				</div>

				{/* Mobile */}
				<div className="d-sm-block d-md-none">
					<Row>
						<Col md={{ span: 3, offset: 9 }} className="p-4">
							<h4>
								Total harga : <strong className="float-end me-2">Rp. {numberWithCommas(totalBayar)}</strong>
							</h4>
							<Button variant="primary" as={Link} to="/sukses" onClick={() => this.submitTotalBayar(totalBayar)} style={{ width: "100%" }} className="mb-2 mt-4 me-2">
								<FontAwesomeIcon icon={faShoppingCart} /> <strong>Bayar</strong>
							</Button>
						</Col>
					</Row>
				</div>
			</>
		);
	}
}
