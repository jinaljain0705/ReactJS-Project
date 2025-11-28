import SectionTitle from "./components/SectionTitle";
import IntroSection from "./components/IntroSection";
import StatePropsDemo from "./components/StateProps";
import ListFilter from "./components/List";
import FormsEvents from "./components/FormsEvent";
import UseEffectDemo from "./components/UseEffect";
import ClassComponentDemo from "./components/ClassComponent";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="main-container">
      <SectionTitle />
      <IntroSection />
      <StatePropsDemo />
      <ListFilter />
      <FormsEvents />
      <UseEffectDemo />
      <ClassComponentDemo />
    </div>
    </div>
  );
};

export default App;
