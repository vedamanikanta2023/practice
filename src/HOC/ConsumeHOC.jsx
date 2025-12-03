import { withDataFetching } from "./HOC.JSX";
import { MyComponent } from "./MyComponent";

const MyEnhancedComponent = withDataFetching(MyComponent, 'https://api.example.com/data');

const ConsumeHOC = () => {
    return (
            <MyEnhancedComponent />
    );
};

export default ConsumeHOC;