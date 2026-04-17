import EcommerceServiceTemplate from "@/app/components/common/SubServices/EcommerceServiceTemplate/EcommerceServiceTemplate";
import AMAZON_MARKETING_DATA from "./SectionsData/serviceData";

const AmazonMarketing = () => {
  return (
    <EcommerceServiceTemplate data={AMAZON_MARKETING_DATA} />
  );
};

export default AmazonMarketing;
