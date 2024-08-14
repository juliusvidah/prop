import { useState } from "react";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Error from "./components/error/Error";
import SignUp from "./components/signup/SignUp";
import LogIn from "./components/login/LogIn";
import MainHome from "./components/mainhome/MainHome";
import ForgottenPassword from "./components/forgottenpassword/ForgottenPassword";
import ResetPassword from "./components/resetpassword/ResetPassword";
import PropertyList from "./components/propertylist/PropertyList";
import User from "./components/user/User";
import ShowMore from "./components/showmore/ShowMore";
import PricePredictor from "./components/pricepredictor/PricePredictor";
import PopUp from "./components/popup/PopUp";
import Filter from "./components/filter/Filter";
import FilPop from "./components/filpop/FilPop";
import Notification from "./components/notification/Notificatio";
import TopUp from "./components/topup/TopUp";
import PropertyDetail from "./components/propertydetail/PropertyDetail"
import Payment from "./components/payment/Payment";
import Installmental from "./components/installment/Payment"
import Dashboard from "./components/admin/dashboard/Dashboard";
import CreateProps from "./components/admin/create-props/Create";
import AdminLogin from "./components/admin/login/AdminLogin";
import EditProfile from "./components/edit-profile/Edit";
import VerifyAccount from "./components/verify-account/Verify-Account"
import Transactions from "./components/transactions/transaction"
import ViewProperties from "./components/admin/properties/properties";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgottenpassword" element={<ForgottenPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/mainhome" element={<MainHome />} />
        <Route path="/user" element={<User />} />
        <Route path="/topup" element={<TopUp />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/popup" element={<PopUp />} />
        <Route path="/filpop" element={<FilPop />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/showmore" element={<ShowMore />} />
        <Route path="/pricepredictor" element={<PricePredictor />} />
        <Route path="/propertylist" element={<PropertyList />} />
        <Route path="/property/details/:id" element={<PropertyDetail />} />
        <Route path='/full-payment/:id' element={<Payment />} />
        <Route path='/installmental-payment' element={<Installmental />} />
        <Route path="/user/edit-details" element={<EditProfile />} />
        <Route path="/user/account-verified" element={< VerifyAccount />} />
        <Route path="/user/transactions" element={<Transactions />} />

        {/* admin routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/create-property" element={<CreateProps />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/properties" element={<ViewProperties/>} />

        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
