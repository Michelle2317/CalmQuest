import Navbar from '../Navbar'
import 
export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}