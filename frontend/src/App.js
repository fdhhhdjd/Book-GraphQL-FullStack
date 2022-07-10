import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Container from "react-bootstrap/Container";
import BookList from "./components/BookLists/index";
import Forms from "./components/Forms/index";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container className="py-3 mt-3" style={{ backgroundColor: "lightcyan" }}>
        <h1 className="text-center text-info mb-3">My Books</h1>
        <hr />
        <Forms />
        <hr />
        <BookList />
      </Container>
    </ApolloProvider>
  );
}

export default App;
