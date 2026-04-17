import EcommerceServiceTemplate from "@/app/components/common/SubServices/EcommerceServiceTemplate/EcommerceServiceTemplate";
import CONTENT_MARKETING_DATA from "./SectionsData/serviceData";

const ContentMarketing = () => {
  return (
    <EcommerceServiceTemplate data={CONTENT_MARKETING_DATA} />
  );
};

export default ContentMarketing;
