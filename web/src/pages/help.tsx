import {
  Heading,
  Container,
  Text,
  Stack,
  Link,
  AspectRatio,
  Image,
  Box,
} from "@chakra-ui/react";

export default function Help() {
  return (
    <Container
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      maxW="1276px"
    >
      <Stack align="center" h="93vh" justify="center">
        <Stack
          bg="#5B68DF"
          borderRadius="full"
          h="60vh"
          position="relative"
          style={{ filter: "blur(500px)" }}
          w="30vw"
        />
        <Stack
          bg="#5B68DF"
          borderRadius="full"
          h="30vh"
          position="absolute"
          style={{ filter: "blur(250px)" }}
          w="15vw"
        />
        <Stack
          maxW="1076px"
          position="absolute"
          spacing="2.5rem"
          textAlign="center"
        >
          <Heading
            bgClip="text"
            bgGradient="linear(to-r, #66C796 0%, #505CC4 100%)"
            fontSize="90px"
          >
            Find out how you can get tickets quickly
          </Heading>
          <Text color="white" fontSize="26px" fontWeight="normal" opacity={0.5}>
            MetaMask provides the simplest yet most secure way to connect to
            blockchain-based applications.
          </Text>
          <Link
            alignSelf="center"
            bgGradient="linear(to-r, #66C796 0%, #505CC4 100%)"
            borderRadius="full"
            color="white"
            href="#quickStart"
            mb="5rem"
            mt="2rem"
            padding="10px 20px"
            width="fit-content"
          >
            Quick Start
          </Link>
        </Stack>
      </Stack>
      <Stack
        align="center"
        direction="column"
        id="quickStart"
        justify="center"
        minHeight="100vh"
        paddingTop="3rem"
        rowGap="3rem"
      >
        <Stack
          alignItems="center"
          columnGap="3rem"
          direction="row"
          height="fit-content"
          width="fit-content"
        >
          <Stack
            backgroundColor="#66C796"
            borderRadius="full"
            height="1rem"
            width="1rem"
          />
          <Text
            color="white"
            fontSize="26px"
            fontWeight="normal"
            opacity={0.5}
            textAlign="center"
            width="fit-content"
          >
            Add MetaMask extension for Chrome and click on the extension.
          </Text>
        </Stack>
        <Image borderRadius="10px" src="/images/metamask01.jpg" />

        <Stack
          alignItems="center"
          columnGap="3rem"
          direction="row"
          height="fit-content"
          width="fit-content"
        >
          <Stack
            backgroundColor="#66C796"
            borderRadius="full"
            height="1rem"
            width="1rem"
          />
          <Text
            color="white"
            fontSize="26px"
            fontWeight="normal"
            opacity={0.5}
            width="500px"
          >
            Select create an account and set a new password for your wallet.
          </Text>
          <Box bg="white" borderRadius="10px" p="6">
            <Image
              borderRadius="10px"
              height="300px"
              src="/images/metamask02.jpg"
            />
          </Box>
        </Stack>

        <Stack
          alignItems="center"
          columnGap="3rem"
          direction="row"
          height="fit-content"
          width="fit-content"
        >
          <Stack
            backgroundColor="#66C796"
            borderRadius="full"
            height="1rem"
            width="1rem"
          />
          <Text
            color="white"
            fontSize="26px"
            fontWeight="normal"
            opacity={0.5}
            width="fit-content"
          >
            Click next and reveal your secret phrase. Then put your phrase in
            order.
          </Text>
        </Stack>
        <Stack
          alignItems="center"
          columnGap="4rem"
          direction="row"
          height="fit-content"
          width="fit-content"
        >
          <Box bg="white" borderRadius="10px" p="6">
            <Image
              borderRadius="10px"
              height="300px"
              src="/images/metamask03.jpg"
            />
          </Box>
          <Box bg="white" borderRadius="10px" p="6">
            <Image
              borderRadius="10px"
              height="300px"
              src="/images/metamask05.jpg"
            />
          </Box>
        </Stack>
        <Link
          alignSelf="center"
          bgGradient="linear(to-r, #66C796 0%, #505CC4 100%)"
          borderRadius="full"
          color="white"
          href="#htbTicket"
          mb="5rem"
          mt="2rem"
          padding="10px 20px"
          width="fit-content"
        >
          Learn to buy a ticket
        </Link>
      </Stack>
      <Stack align="center" direction="row" mt="4rem" spacing="1.5rem">
        <Stack
          backgroundColor="#66C796"
          borderRadius="full"
          height="1.5rem"
          width="1.5rem"
        />
        <Stack
          backgroundColor="#66C796"
          borderRadius="full"
          height="150px"
          width="1.5rem"
        />
        <Stack
          backgroundColor="#66C796"
          borderRadius="full"
          height="300px"
          width="1.5rem"
        />
        <Stack
          align="center"
          bgGradient="linear(to-r, #66C796 0%, #505CC4 100%)"
          borderRadius="48px"
          justify="center"
          px="1.5rem"
          py="1.5rem"
        >
          <AspectRatio
            borderRadius="36px"
            overflow="hidden"
            ratio={16 / 9}
            width="700px"
          >
            <iframe
              allowFullScreen
              height="315"
              src="https://www.youtube.com/embed/YVgfHZMFFFQ"
              title="YouTube video metamask"
            />
          </AspectRatio>
        </Stack>
        <Stack
          backgroundColor="#505CC4"
          borderRadius="full"
          height="300px"
          width="1.5rem"
        />
        <Stack
          backgroundColor="#505CC4"
          borderRadius="full"
          height="150px"
          width="1.5rem"
        />
        <Stack
          backgroundColor="#505CC4"
          borderRadius="full"
          height="1.5rem"
          width="1.5rem"
        />
      </Stack>
      <Text
            color="white"
            fontSize="26px"
            fontWeight="normal"
            opacity={0.5}
            textAlign="center"
            width="fit-content"
            marginTop="60px"
          >
            Quick tour through the app, see how you can buy, sell and create your own real NFT tickets
          </Text>
      <Stack align="center" direction="row" mt="4rem" spacing="1.5rem">
        <Stack
          backgroundColor="#66C796"
          borderRadius="full"
          height="1.5rem"
          width="1.5rem"
        />
        <Stack
          backgroundColor="#66C796"
          borderRadius="full"
          height="150px"
          width="1.5rem"
        />
        <Stack
          backgroundColor="#66C796"
          borderRadius="full"
          height="300px"
          width="1.5rem"
        />
        <Stack
          align="center"
          bgGradient="linear(to-r, #66C796 0%, #505CC4 100%)"
          borderRadius="48px"
          justify="center"
          px="1.5rem"
          py="1.5rem"
        >
          <AspectRatio
            borderRadius="36px"
            overflow="hidden"
            ratio={16 / 9}
            width="700px"
          >
            <iframe
              src="https://player.vimeo.com/video/703078755?h=aafd90117a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="1920"
              height="954"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="NFTickets, final project"
            />
          </AspectRatio>
        </Stack>
        <Stack
          backgroundColor="#505CC4"
          borderRadius="full"
          height="300px"
          width="1.5rem"
        />
        <Stack
          backgroundColor="#505CC4"
          borderRadius="full"
          height="150px"
          width="1.5rem"
        />
        <Stack
          backgroundColor="#505CC4"
          borderRadius="full"
          height="1.5rem"
          width="1.5rem"
        />
      </Stack>
      <Link color="white" href="https://metamask.io/" mb="5rem" mt="2rem">
        Learn More
      </Link>
      <Text
            color="white"
            fontSize="26px"
            fontWeight="normal"
            opacity={0.5}
            textAlign="center"
            width="fit-content"
            marginTop="60px"
          >
            We use ropstens test network. So you should choose that net in your metamask, if you do not see them set the test networks to visible first. This is how you do it
          </Text>
          <Stack
          alignItems="center"
          columnGap="3rem"
          direction="row"
          height="fit-content"
          width="fit-content"
        >
          <Image
            borderRadius="10px"
            height="500px"
            src="/images/guia1.png"
          />
          <Box bg="white" borderRadius="10px" p="3">
            <Image
              borderRadius="10px"
              height="500px"
              src="/images/guia2.png"
            />
          </Box>
        </Stack>
        <Text
            color="white"
            fontSize="26px"
            fontWeight="normal"
            opacity={0.5}
            textAlign="center"
            width="fit-content"
            marginTop="60px"
          >
              Now you have to get some ETH which in reality it is rETH (ropsten eth). These two webpages can give you some, please note that depending on the queue it could not be instantaneous
          </Text>
          <Link mt="2rem" color="white" fontSize="20px" href="https://faucet.egorfine.com/">faucet.egorfine</Link>
          <Link color="white" fontSize="20px" href="https://faucet.dimensions.network/">fauce.dimensions.network</Link>
      <Stack
        align="center"
        direction="column"
        id="htbTicket"
        justify="center"
        minHeight="100vh"
        paddingTop="3rem"
        pb="5rem"
        rowGap="3rem"
      >
        <Stack
          alignItems="center"
          columnGap="3rem"
          direction="row"
          height="fit-content"
          width="fit-content"
        >
          <Stack
            backgroundColor="#66C796"
            borderRadius="full"
            height="1rem"
            width="1rem"
          />
          <Text
            color="white"
            fontSize="26px"
            fontWeight="normal"
            opacity={0.5}
            textAlign="center"
            width="fit-content"
          >
            Select your ticket from explore and then press buy ticket from the
            detail.
          </Text>
        </Stack>
        <Stack
          alignItems="center"
          columnGap="3rem"
          direction="row"
          height="fit-content"
          width="fit-content"
        >
          <Image
            borderRadius="10px"
            height="300px"
            src="/images/ticket01.png"
          />
          <Box bg="white" borderRadius="10px" p="3">
            <Image
              borderRadius="10px"
              height="300px"
              src="/images/ticket02.png"
            />
          </Box>
        </Stack>

        <Stack
          alignItems="center"
          columnGap="3rem"
          direction="row"
          height="fit-content"
          width="fit-content"
        >
          <Stack
            backgroundColor="#66C796"
            borderRadius="full"
            height="1rem"
            width="1rem"
          />
          <Text
            color="white"
            fontSize="26px"
            fontWeight="normal"
            opacity={0.5}
            width="25vw"
          >
            Confirm the buying and then your MetaMask transaction.
          </Text>
          <Box bg="white" borderRadius="10px" p="2">
            <Image
              borderRadius="10px"
              height="480px"
              src="/images/ticket04.png"
            />
          </Box>
        </Stack>
        <Stack
          alignItems="center"
          columnGap="3rem"
          direction="row"
          height="fit-content"
          width="fit-content"
        >
          <Stack
            backgroundColor="#66C796"
            borderRadius="full"
            height="1rem"
            width="1rem"
          />
          <Box bg="white" borderRadius="10px" p="2">
            <Image borderRadius="10px" src="/images/ticket05.png" />
          </Box>
          <Text
            color="white"
            fontSize="26px"
            fontWeight="normal"
            opacity={0.5}
            width="35vw"
          >
            You will receive your MetaMask confirmation.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}
