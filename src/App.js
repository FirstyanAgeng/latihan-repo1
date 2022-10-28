import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Alert from "react-bootstrap/Alert";
import { Button, Card, Placeholder } from "react-bootstrap";
import CardExample from "./components/CardExample";
const App = () => {
  const navHeading = "Navigation Bar";
  const navText = "SOSMED";
  const clicked = () => {
    return alert("button dipencet");
  };
  const paragraf = () => {
    return (
      <div>
        <h1>Mantap bang</h1>
        <i>selamat asik</i>
        <marquee behavior="" direction="">
          ahay jos mantep
        </marquee>
        <Alert variant="success">
          <Alert.Heading>Halo semua</Alert.Heading>
          <p>halo halo halo</p>
          <p>
            <Alert.Link href="https://id-id.facebook.com/" target="_blank">
              cek link ini{" "}
            </Alert.Link>
          </p>
        </Alert>
      </div>
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <Navbar navText={navText} navHeading={navHeading} />
        <h1>halo halo halo</h1>
        <CardExample />
        <MyButton clicked={clicked} />
        <Footer paragraf={paragraf} />
      </header>
    </div>
  );
};

export default App;
