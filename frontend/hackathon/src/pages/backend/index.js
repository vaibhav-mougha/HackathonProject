import style from "./redu.module.css";
import { StarIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
  Grid,
  Progress,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getLocalData } from "../../Utils/LocalStorage";
import { getSession } from "next-auth/react";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const isAuth = getLocalData("isAuth");

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!isAuth) {
        router.push(`login/`);
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) {
    return <Progress hasStripe value={64} mt="2rem" />;
  }

  const handleExpressClick = () => {
    router.push(`express/`);
  };

  const handleNodeClick = () => {
    router.push(`nodejs/`);
  };

  const handleMongoClick = () => {
    router.push(`mongodb/`);
  };

  return (
    <Box className={style.redu} mb="5rem">
      <Button
        mt="1rem"
        ml="3rem"
        onClick={() => router.back()}
        fontSize={"24px"}
        color="white"
        backgroundColor="#257CFF"
        _hover={{
          color: "#257CFF",
          backgroundColor: "white",
          boxShadow: "0 1px 1px 1px #257CFF",
        }}
      >
        Go Back
      </Button>

      <Heading
        fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
        fontFamily={"body"}
        mt="3rem"
        mb="1rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textDecoration="underline"
        color="#257CFF"
        // backgroundColor="#257CFF"
        _hover={{
          color: "#257CFF",
          // backgroundColor: "white",
          // boxShadow: "0 1px 1px 1px #257CFF",
        }}
      >
        BackEnd Courses
      </Heading>

      <Grid
        className={style.gridbox}
        textAlign="left"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        <Box onClick={() => handleExpressClick()}>
          <Center py={6}>
            <Box
              maxW={"320px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
              }
              rounded={"lg"}
              p={6}
              textAlign={"center"}
            >
              <Avatar
                size={"xl"}
                //   src={ele.img}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgAuAwfMMDkwZScsLkBAeZ4GjyfB7GtIzcA&usqp=CAU"
                alt={"Avatar Alt"}
                mb={4}
                pos={"relative"}
                _after={{
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: "green.300",
                  border: "2px solid white",
                  rounded: "full",
                  pos: "absolute",
                  bottom: 0,
                  right: 3,
                }}
              />
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                Learn Express
              </Heading>
              <Box>
                <Text fontWeight={600} color={"gray.500"} mb={4}>
                  Duration of Crash Course : 03:45 hrs
                </Text>
              </Box>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Express is a node js web application framework that provides
                broad features for building web and mobile applications. It is
                used to build a single page, multipage, and hybrid web
                application. It's a layer built on the top of the Node js that
                helps manage servers and routes.
              </Text>
              <Box color="gray">Reading Time : 07:35 hrs max</Box>
              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  Category: Backend
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  4.9 <StarIcon color="tomato" mb="3px" />
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("blue.50", "blue.800")}
                  fontWeight={"400"}
                >
                  Subject: Express
                </Badge>
              </Stack>
              <Button
                mt="1.5rem"
                bg="#31AE33"
                borderRadius="1rem"
                variant="solid"
                // ml="3rem"
                color="white"
                _hover={{
                  background: "white",
                  color: "#31AE33",
                  border: "2px solid #31AE33",
                }}
                ml="1rem"
              >
                Add Course
              </Button>
            </Box>
          </Center>
        </Box>

        <Box onClick={() => handleNodeClick()}>
          <Center py={6}>
            <Box
              maxW={"320px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
              }
              rounded={"lg"}
              p={6}
              textAlign={"center"}
            >
              <Avatar
                size={"xl"}
                //   src={ele.img}
                src="data:image/png;base64,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"
                alt={"Avatar Alt"}
                mb={4}
                pos={"relative"}
                _after={{
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: "green.300",
                  border: "2px solid white",
                  rounded: "full",
                  pos: "absolute",
                  bottom: 0,
                  right: 3,
                }}
              />
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                Learn NodeJS
              </Heading>
              <Box>
                <Text fontWeight={600} color={"gray.500"} mb={4}>
                  Duration of Crash Course : 02:50 hrs
                </Text>
              </Box>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Node JS allows developers for executing JavaScript code outside
                of a browser. Backend and frontend of our app can be written in
                JavaScript. That enables developers to share some code and
                allows one team to work on the whole application.
              </Text>
              <Box color="gray">Reading Time : 05:35 hrs max</Box>
              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  Category: Backend
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  4.9 <StarIcon color="tomato" mb="3px" />
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("blue.50", "blue.800")}
                  fontWeight={"400"}
                >
                  Subject: NodeJS
                </Badge>
              </Stack>
              <Button
                mt="1.5rem"
                bg="#31AE33"
                borderRadius="1rem"
                variant="solid"
                // ml="3rem"
                color="white"
                _hover={{
                  background: "white",
                  color: "#31AE33",
                  border: "2px solid #31AE33",
                }}
                ml="1rem"
              >
                Add Course
              </Button>
            </Box>
          </Center>
        </Box>

        <Box onClick={() => handleMongoClick()}>
          <Center py={6}>
            <Box
              maxW={"320px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
              }
              rounded={"lg"}
              p={6}
              textAlign={"center"}
            >
              <Avatar
                size={"xl"}
                //   src={ele.img}
                src="data:image/png;base64,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"
                alt={"Avatar Alt"}
                mb={4}
                pos={"relative"}
                _after={{
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: "green.300",
                  border: "2px solid white",
                  rounded: "full",
                  pos: "absolute",
                  bottom: 0,
                  right: 3,
                }}
              />
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                Learn MongoDB
              </Heading>
              <Box>
                <Text fontWeight={600} color={"gray.500"} mb={4}>
                  Duration of Crash Course : 04:20 hrs
                </Text>
              </Box>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Using MongoDB can provide many benefits to a software
                development team. Its flexible schema makes it easy to evolve
                and store data in a way that is easy for programmers to work
                with. MongoDB is also built to scale up quickly and supports all
                the main features of modern databases such as transactions.
              </Text>
              <Box color="gray">Reading Time : 01:35 hrs max</Box>
              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  Category: Backend
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  4.3 <StarIcon color="tomato" mb="3px" />
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("blue.50", "blue.800")}
                  fontWeight={"400"}
                >
                  Subject: MongoDB
                </Badge>
              </Stack>
              <Button
                mt="1.5rem"
                bg="#31AE33"
                borderRadius="1rem"
                variant="solid"
                // ml="3rem"
                color="white"
                _hover={{
                  background: "white",
                  color: "#31AE33",
                  border: "2px solid #31AE33",
                }}
                ml="1rem"
              >
                Add Course
              </Button>
            </Box>
          </Center>
        </Box>
      </Grid>
    </Box>
  );
};
export default Page;
