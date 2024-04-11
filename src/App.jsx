import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [filesSelected, setFilesSelected] = useState([]);

	useEffect(() => {
		console.log(filesSelected);
	}, [filesSelected]);

	// const handleFileChange = (e) => {
	// 	const selectedFiles = Array.from(e.target.files);
	// 	setFilesSelected(selectedFiles);
	// };

	return (
		<>
			<main className='flex justify-center items-center h-screen'>
				<input type='file' multiple className='border-2 border-black px-3 py-5 rounded-2xl' onChange={(e) => setFilesSelected(e.target.files)} />
			</main>
		</>
	);
}

export default App;
