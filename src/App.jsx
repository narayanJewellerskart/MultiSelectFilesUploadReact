import FileUploader from "./components/FileUploader";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import BasicTestFile from "./components/BasicTestFile";

setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/");

const App = () => {
	return (
		<main className='w-screen flex flex-col items-center'>
			<BasicTestFile />
		</main>
	);
};

export default App;
