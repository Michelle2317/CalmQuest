import Navbar from '../Navbar'
import Tabbar from '../Tabbar'

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}