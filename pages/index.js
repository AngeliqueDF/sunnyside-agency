import Head from "next/head";

import Header from "./../components/Header/Header";

export default function Home() {
	return (
		<>
			<Head>
				<title>Sunnyside Agency | Angélique D. Faye</title>
				<meta
					name="description"
					content="An optimized landing page powered by Next.js and prismic!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
		</>
	);
}
