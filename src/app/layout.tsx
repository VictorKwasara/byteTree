import './globals.css';
import Container from './components/Container';
export const metadata = {
	title: 'byteTree',
	description: 'Create a digital tree, take care of your tree, help capture carbon dioxide, harvest fruits, sell fruits at market value, save the planet have fun',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<Container>
					{children}
				</Container>				
			</body>
		</html>
	);
}
