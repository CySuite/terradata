import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
	function dropEditor() {
		let myLabels = document.querySelectorAll('.lbl-toggle');

		Array.from(myLabels).forEach(label => {
			label.addEventListener('keydown', e => {
				// 32 === spacebar
				// 13 === enter
				if (e.which === 32 || e.which === 13) {
					e.preventDefault();
					label.click();
				};
			});
		});
	}

	return (
		<>
			<div className="header">
				<h1>Terra Data</h1>
			</div>
			<div className="main">
				<div className="flex-container">
					<div className="editor-box-1">
						<textarea
							className="data-input"
							rows={4}
							cols={50}
							style={{ resize: "none" }}
							value=""
							defaultValue={""}
						/>
					</div>
					<div className="editor-box-2">
						<textarea
							className="data-input"
							rows={4}
							cols={50}
							style={{ resize: "none" }}
							value=""
							defaultValue={""}
						/>
					</div>
				</div>
			</div>
			<div className="wrap-collabsible">
				<input
					id="collapsible"
					className="toggle"
					type="checkbox"
					defaultChecked=""
					onClick={dropEditor}
				/>
				<label htmlFor="collapsible" className="lbl-toggle" tabIndex={0}>
					See code
				</label>
				<div className="collapsible-content">
					<div className="content-inner">
						<textarea
							className="data-input"
							rows={4}
							cols={50}
							style={{ resize: "none" }}
							value=""
							defaultValue={""}
						/>
					</div>
				</div>
			</div>
			<footer>
				<div className="footer">
					<div className="row">
						<ul className="footer-links">
							<li>
								<a href="#">Contact us</a>
							</li>
							<li>
								<a href="#">Say Thanks!</a>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li>
								<a href="#">Terms &amp; Conditions</a>
							</li>
						</ul>
					</div>
					<div className="row">Copyright © 2022 CySuite - All rights reserved</div>
				</div>
			</footer>
		</>
	)
}
