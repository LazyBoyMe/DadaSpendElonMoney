import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Content />
      <Footer />
    </Provider>
  );
}

export default App;
