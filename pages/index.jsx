import { Center, Container } from "@chakra-ui/react";
import {
  Flex,
  Box,
  SimpleGrid,
  Text,
  Skeleton,
  Heading,
  Stack
} from "@chakra-ui/react";
import {
  ConnectWallet,
  useContract,
  useMetadata,
  MediaRenderer,
  useContractRead,
  Web3Button,
  useAddress,
} from "@thirdweb-dev/react";
// import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  const address = useAddress();
  const contarctAddress = "0x8faf0Db523fb3893D069624a3b5F1164F3fCDDdb";

  const { contract } = useContract(contarctAddress);

  const { data: metadata, isLoading: isLoadingMetadata } =
    useMetadata(contract);

  const { data: totalMinted, isLoaded: isTotalMintedLoading } = useContractRead(
    contract,
    "totalMinted"
  );
  return (
    <Container maxWidth={"1220px"}>
      <Flex p={"20px"} justifyContent={"space-between"}>
        <Box></Box>
        <ConnectWallet />
      </Flex>
      <Flex h={"90vh"} justifyContent={"center"} alignItems={"center"}>
        <SimpleGrid column={2} spacing={10}>
          <Box>
            <Skeleton isLoaded={!isLoadingMetadata}>
              <MediaRenderer src={metadata?.image} />
            </Skeleton>
          </Box>
          <Stack spacing={4} direction={"column"}>

          <Flex direction={"column"}>
            <Skeleton isLoaded={!isLoadingMetadata}>
              <Heading>{metadata?.name}</Heading>
            </Skeleton>
            <Skeleton isLoaded={!isLoadingMetadata}>
              <Text>{metadata?.description}</Text>
            </Skeleton>
            <Skeleton isLoaded={!isTotalMintedLoading}>
              <Text>Total Miinted {totalMinted?.toNumber()}/5</Text>
              {
                address ?(

              <Web3Button contractAddress={contarctAddress}
              action={(contract)=>contract.erc721.claim(1)}>Claim </Web3Button>
                ):
                (<p>Please connect your addres </p>)
              }
            </Skeleton>
          </Flex>
          </Stack>
        </SimpleGrid>
      </Flex>
    </Container>
  );
}
