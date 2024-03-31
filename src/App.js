import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PendingPaymentsSuccess from "./pages/PendingPaymentsSuccess";
import Search from "./pages/Search";
import Welcome from "./pages/Welcome";
import HomeProfile from "./pages/HomeProfile";
import HomeNews from "./pages/HomeNews";
import Search1 from "./pages/Search1";
import Favourite from "./pages/Favourite";
import Contribute from "./pages/Contribute";
import ContributeComplete from "./pages/ContributeComplete";
import Payments from "./pages/Payments";
import PendingPaymentsPayment from "./pages/PendingPaymentsPayment";
import Account from "./pages/Account";
import BookPreview from "./pages/BookPreview";
import Borrow from "./pages/Borrow";
import BorrowComplete from "./pages/BorrowComplete";
import Register from "./pages/Register";
import OTP from "./pages/OTP";
import Verified from "./pages/Verified";
import Login from "./pages/Login";
import MyShelf from "./pages/MyShelf";
import MyShelfReturn from "./pages/MyShelfReturn";
import Home from "./pages/Home";
import HomeSearchAll from "./pages/HomeSearchAll";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/search1":
        title = "";
        metaDescription = "";
        break;
      case "/welcome":
        title = "";
        metaDescription = "";
        break;
      case "/homeprofile":
        title = "";
        metaDescription = "";
        break;
      case "/home-news":
        title = "";
        metaDescription = "";
        break;
      case "/search":
        title = "";
        metaDescription = "";
        break;
      case "/favourite":
        title = "";
        metaDescription = "";
        break;
      case "/contribute":
        title = "";
        metaDescription = "";
        break;
      case "/contributecomplete":
        title = "";
        metaDescription = "";
        break;
      case "/payments":
        title = "";
        metaDescription = "";
        break;
      case "/pending-payments-payment":
        title = "";
        metaDescription = "";
        break;
      case "/account":
        title = "";
        metaDescription = "";
        break;
      case "/book-preview":
        title = "";
        metaDescription = "";
        break;
      case "/borrow":
        title = "";
        metaDescription = "";
        break;
      case "/borrow-complete":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/otp":
        title = "";
        metaDescription = "";
        break;
      case "/verified":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/my-shelf":
        title = "";
        metaDescription = "";
        break;
      case "/my-shelf-return":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/home-search-all":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PendingPaymentsSuccess />} />
      <Route path="/search1" element={<Search />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/homeprofile" element={<HomeProfile />} />
      <Route path="/home-news" element={<HomeNews />} />
      <Route path="/search" element={<Search1 />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/contributecomplete" element={<ContributeComplete />} />
      <Route path="/payments" element={<Payments />} />
      <Route
        path="/pending-payments-payment"
        element={<PendingPaymentsPayment />}
      />
      <Route path="/account" element={<Account />} />
      <Route path="/book-preview" element={<BookPreview />} />
      <Route path="/borrow" element={<Borrow />} />
      <Route path="/borrow-complete" element={<BorrowComplete />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/verified" element={<Verified />} />
      <Route path="/login" element={<Login />} />
      <Route path="/my-shelf" element={<MyShelf />} />
      <Route path="/my-shelf-return" element={<MyShelfReturn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home-search-all" element={<HomeSearchAll />} />
    </Routes>
  );
}
export default App;
