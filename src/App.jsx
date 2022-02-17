import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wrapper } from "./hoc/Wrapper/Wrapper";
import { About } from "./pages/about-me/About";
import { Main } from "./pages/main-page/Main";

function App() {
  return (
	  <BrowserRouter>
		<Routes>
			<Route path="/" element={<Wrapper/>}>
				<Route index element={<Main/>} />
				<Route path='about-me' element={<About/>}/>
				<Route path='my-skills' element={<div>my-skills</div>}/>
				<Route path='portfolio' element={<div>portfolio</div>}/>
				<Route path='contacts' element={<div>contacts</div>}/>
			</Route>
		</Routes>
	 </BrowserRouter>
  );
}

export default App;
