import React from "react";
import Header from "./Header";
import FirstPage from "./FirstPage";
import Footer from "./Footer";
import ShopSection from "./shopSection";
import PageBreak1 from "./pagebreak1";
import ShirtCatalog from "./shirtcatalog";
import Design from "./design";
import ShopPageTop from "./shopPagetop";
import ShopPage2 from "./shopPage2";
import ProductPage from "./productPage";
import CheckoutPage from "./checkoutPage";
import AccountPage from "./accountPage";
import LoginPage from "./loginPage";
import RegisterPage from "./registerPage";


function Dashboard(){
    return(
    <div>
        <Header />

        {/* page2: */}
        {/* <ShopPageTop />
        <ShopPage2 /> */}


        {/* <ProductPage /> */}

        {/* <AccountPage /> */}
        
        {/* <CheckoutPage /> */}

        {/* <LoginPage /> */}

        <RegisterPage />

{/* 
        <FirstPage />
        <ShopSection />
        <PageBreak1 />
        <ShirtCatalog />
        <Design />
        <Footer /> */}

        
    </div>
    );   
}

export default Dashboard;