import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonsList } from "./components/PersonsList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { ComponentWrapper } from "./components/ComponentWrapper";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { UserContextExample } from "./components/context/UserContextExample";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { ListGenerics } from "./components/generics/ListGenerics";
import { RandomNumber } from "./restriction/RandomNumber";
import { Toast } from "./components/templateLiterals/Toast";
import { CustomButton } from "./components/html/CustomButton";

const person = {
  firstName: "Zyzz",
  lastName: "Sigma",
};

const nameList = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Juan",
    lastName: "Master",
  },
  {
    firstName: "Sergio",
    lastName: "Jaramillo  ",
  },
];

function App() {
  return (
    <div className="App">
      <Greet name="Hugo" isLoggedIn={true} />
      <Person person={person} />
      <PersonsList nameList={nameList} />
      <Status status="success" />
      <Heading>Heading section</Heading>
      <ComponentWrapper>
        <Person person={person} />
      </ComponentWrapper>
      <Button
        handleClick={(event, id) => {
          console.log("clicked!", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <Container styles={{ border: "1px solid black", padding: "8px" }} />
      <LoggedIn />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <UserContextExample />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Private isLoggedIn={true} component={Profile} />
      {/* <ListGenerics
        items={["Hugo", "Jano", "Yair"]}
        onClick={(item) => {
          console.log(item);
        }}
      />
      <ListGenerics
        items={[1, 2, 3]}
        onClick={(item) => {
          console.log(item);
        }}
      /> */}
      <ListGenerics
        items={[
          { id: 1, name: "hugo", lastName: "aracena" },
          { id: 2, name: "alejandro", lastName: "aracena" },
        ]}
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive />
      <Toast position="right-top" />
      <CustomButton
        variant="primary"
        onClick={() => console.log("Custom button clicked!")}
      >
        Custom Button
      </CustomButton>
    </div>
  );
}

export default App;
