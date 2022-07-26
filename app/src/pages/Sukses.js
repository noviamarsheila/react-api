import axios from "axios";
import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constans";

export default class Sukses extends Component {
	componentDidMount() {
		axios
			.get(API_URL + "keranjangs")
			.then((res) => {
				const keranjangs = res.data;
				keranjangs.map((item) => {
					return axios
						.delete(API_URL + "keranjangs/" + item.id)
						.then((res) => {
							console.log(res);
						})
						.catch((error) => {
							console.log(error);
						});
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="mt-4 text-center">
				<Image src="assets/images/ordersucces.png" width={500} />
				<h2>Sukses Pesan</h2>
				<p>Terimakasih sudah memesan!!!</p>
				<Button variant="primary" as={Link} to="/">
					Kembali
				</Button>
			</div>
		);
	}
}
