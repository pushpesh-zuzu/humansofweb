import EcommerceServiceTemplate from "@/app/components/common/SubServices/EcommerceServiceTemplate/EcommerceServiceTemplate";
import EMAIL_MARKETING_DATA from "./SectionsData/serviceData";

const EmailMarketing = () => {
  return (
    <EcommerceServiceTemplate data={EMAIL_MARKETING_DATA} />
  );
};

export default EmailMarketing;
