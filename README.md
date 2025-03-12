I have downloaded the exercise starter and I only do the first following steps:

To install Chakra and its dependencies, use the following command in your project folder:

npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
Next, we have to add a ChakraProvider(opens in a new tab). 

This special component should wrap every other place where you want to use Chakra. Place this all the way at the root of our component tree in main.jsx.


Open main.jsx and add the import for the ChakraProvider. 

import { ChakraProvider } from '@chakra-ui/react'

Wrap the <App /> inside the jsx in a <ChakraProvider></ChakraProvider>.

<ChakraProvider>
    <App />
</ChakraProvider>

