import { GlobalStyle } from "./components/global/globalCSS";
import Footer from "./components/footer";
import GridContatos from "./components/gridContatos";
import HeaderDiv from "./components/header";
import InputsArea from "./components/inputsArea";

function App() {
	return (
		<main>
			<GlobalStyle />
			<HeaderDiv />
			<InputsArea />
			<GridContatos />
			<Footer />
		</main>
	);
}

export default App;
