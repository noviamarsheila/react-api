import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigasiBar from "./components/NavigasiBar";
import { Home, Sukses } from "./pages/Index";

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<NavigasiBar />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/sukses" element={<Sukses />} />
					</Routes>
				</main>
			</BrowserRouter>
		);
	}
}
