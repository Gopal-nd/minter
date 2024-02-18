import { ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css';
import {ChakraProvider} from '@chakra-ui/react'
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = 'mumbai';

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider
			activeChain={activeChain}
			clientId="2003cb2c3fba53045c6eba7d624e2115"
		>   <ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	
		</ThirdwebProvider>
	);
}

export default MyApp;
