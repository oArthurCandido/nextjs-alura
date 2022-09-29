import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import theme from "@src/theme/theme";
import Background from "./patterns/Background/Background";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import Menu from "./patterns/Menu/Menu";

export default function HomeScreen() {
  return (
    <Box tag="main" styleSheet={{
      backgroundColor: 'black',
      color: 'white',
      flex: 1

    }}>
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text tag={"h1"} variant={"display1"}>Últimas atualziações</Text>
        <Feed.Posts />
      </Feed>
      <Footer />
    </Box>
  )
}
