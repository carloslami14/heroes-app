import { BrowserRouter } from 'react-router-dom';
import RouterConfig from "../../navigation/RouterConfig";

function Layout() {
    return (
        <BrowserRouter>
            <RouterConfig />
        </BrowserRouter>
    );
}

export default Layout;

  