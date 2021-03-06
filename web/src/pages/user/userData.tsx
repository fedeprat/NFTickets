import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { verify } from "jsonwebtoken";
import axios from "axios";
import { useWeb3React } from "@web3-react/core";
import { Button, Input, Stack, Text } from "@chakra-ui/react";

import checkConnection from "../../lib/walletConectionChecker";

interface InputProps {
  name: string;
  email: string;
  image: FileList;
}

const estilos = {
  fontSize: "50px",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function UserData() {
  const { account, activate } = useWeb3React();
  const router = useRouter();
  const { register, handleSubmit } = useForm<InputProps>();

  async function logOut() {
    checkConnection(false, activate, async () => {
      await axios.post("/api/auth/logout", {}, { withCredentials: true });
      router.push("/nouser");
    });
  }

  useEffect(() => {
    logOut();
  }, [account]);
  if (!account) return <div style={estilos}>Detecting wallet...</div>;

  const onSubmit: SubmitHandler<InputProps> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("file", data.image[0]);
      formData.append("upload_preset", "eqhbw7eb");

      axios
        .post(
          "https://api.cloudinary.com/v1_1/dm9n9hrgn/image/upload",
          formData
        )
        .then(async (res) => {
          const atr = await axios.post(
            "/api/users",
            {
              name: data.name,
              email: data.email,
              walletAddress: account,
              image: res.data.public_id.toString(),
            },
            { withCredentials: true }
          );
          if (atr.status === 200) router.push("/user/dataUserSuccess");
          else if (atr.status === 403) router.push("user/forbidden");
          else if (atr.status === 500) router.push("user/error");
        })
        .catch(() => {});
    } catch (error: any) {
      if (error.response.request.status === 403) router.push("/user/forbidden");

      router.push("/user/error");
    }
  };

  return (
    <Stack align="center" height="75vh" margin="50%" mb="40px" mt="50px">
      <Stack
        align="center"
        alignItems="center"
        as="form"
        bg="white"
        borderRadius="1rem"
        direction="column"
        gap="50px"
        height="600px"
        margin="auto 0"
        padding="3rem"
        width="500px"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Text fontSize="32px">Sign up</Text>
        <Input placeholder="Name" {...register("name")} w={300} />
        <Input placeholder="E-mail" {...register("email")} w={300} />
        <Input
          placeholder="User Image"
          {...register("image")}
          accept=".png,.jpg,.jpeg"
          type="file"
        />
        <Button
          _active={{ bg: "linear(to-r, #73E0A9 0%, #5B68DF 100%)" }}
          _hover={{
            bg: "linear(to-r, #73E0A9 0%, #5B68DF 100%)",
            opacity: "0.85",
          }}
          alignSelf="end"
          bgGradient="linear(to-r, #73E0A9 0%, #5B68DF 100%)"
          borderRadius="full"
          colorScheme="teal"
          mt="0.75rem"
          type="submit"
          width="100px"
        >
          Submit
        </Button>
      </Stack>
    </Stack>
  );
}

export async function getServerSideProps(context: {
  req: { cookies: { NFTicketLoginJWT: string } };
}) {
  const { cookies } = context.req;
  const loginJWT = cookies?.NFTicketLoginJWT;

  return verify(loginJWT, process.env.SECRET_WORD as string, (error) => {
    if (error) {
      return {
        redirect: {
          permanent: false,
          destination: "/nouser",
        },
        props: {},
      };
    }
    return {
      props: {},
    };
  });
}
