import Header from "./components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className=" lg:px-36 px-4">
			<Header />
			{children}
		</main>
	);
}
