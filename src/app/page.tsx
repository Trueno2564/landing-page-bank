import BestBusiness from "@/components/BestBusiness/BestBusiness";
import ChooseYourCards from "@/components/ChooseYourCards/ChooseYourCards";
import ControlBilling from "@/components/ControlBilling/ControlBilling";
import CounterData from "@/components/CounterData/CounterData";
import FirstBlock from "@/components/FirstBlock/FirstBlock";
import { Footer } from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PaymentsMethods from "@/components/PaymentsMethods/PaymentsMethods";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header/>
      <FirstBlock/>
      <CounterData/>
      <BestBusiness/>
      <ChooseYourCards/>
      <ControlBilling/>
      <Testimonials/>
      <PaymentsMethods/>
      <Footer/>
    </>
  )
}
