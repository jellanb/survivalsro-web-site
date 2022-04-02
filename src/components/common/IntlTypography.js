import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const IntlTypography = ({ text, ...props }) => {
  const { t } = useTranslation();

  return <Typography {...props}>{t(text)}</Typography>;
};

export default IntlTypography;
