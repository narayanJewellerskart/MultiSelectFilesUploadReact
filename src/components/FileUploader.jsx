import { useEffect, useState } from "react";

const FileUploader = () => {
	const [filesSelected, setFilesSelected] = useState([]);

	useEffect(() => {
		console.log(filesSelected);
	}, [filesSelected]);

	return (
		<>
			<main className='flex justify-center items-center h-screen'>
				<form className=''>
					<input type='file' multiple className='border-2 border-violet-800 px-3 py-4 rounded-l-md' onChange={(e) => setFilesSelected(e.target.files)} />
					<button type='submit' className='text-white border-[1.5px] border-violet-800 bg-violet-800 font-semibold tracking-wider px-3 py-5 rounded-r-md'>
						Send to S3
					</button>
				</form>
			</main>
		</>
	);
};

export default FileUploader;
