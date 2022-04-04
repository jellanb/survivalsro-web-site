import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import Guide from "../components/Guide/Guide";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";
import { MAX_WIDTH } from "../components/Guide/constants";

const Container = styled(TabsUnstyled)(({ theme }) => ({
  display: "flex",
  width: "90%",
  maxWidth: MAX_WIDTH,
  height: "fit-content",
  minHeight: "100%",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "95%",
  },
  [theme.breakpoints.down("md")]: {
    width: "95%",
  },
}));

const TabContainer = styled(TabsListUnstyled)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  wordWrap: "break-word",
  gap: "0.3em",
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(-2),
    overflowX: "scroll",
    "::-webkit-scrollbar": {
      width: 0,
      background: "transparent",
    },
  },
}));

const Tab = styled(TabUnstyled)(({ theme }) => ({
  backgroundColor: "#3f5067",
  border: "2px",
  borderColor: "#757a75",
  borderRadius: "1em 0 0 1em",
  borderStyle: "double none double double",
  borderWidth: "thick",
  color: "#afc8d6",
  fontSize: "1em",
  maxWidth: "10em",
  minHeight: "5em",
  width: "fit-content",
  padding: "0.5em",
  textTransform: "capitalize",
  "&.Mui-selected": {
    backgroundColor: "#3c7aa2",
    color: "#ffffff",
    fontWeight: "bold",
    "> *": {
      fontSize: "1.1em",
    },
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: "1em 1em 0 0",
    borderStyle: "double double none double",
    minWidth: "6em",
    maxWidth: "none",
  },
}));

const TabPanel = styled(TabPanelUnstyled)`
  background-color: #212122;
  border: 2px #757a75;
  border-radius: 0.5em;
  border-style: double;
  color: #afc8d6;
  padding: 0.5em;
  text-align: center;
  width: 100%;
`;

const Guides = () => {
  const { t } = useTranslation();

  const levelingData = {
    sections: [
      {
        bgUrl: "http://i.epvpimg.com/ieNjdab.png",
        annexes: [
          {
            video: {
              url: "https://www.youtube.com/embed/0156DKSm1V0",
              width: 600,
              height: 400,
            },
          },
        ],
      },
      {
        annexes: [
          {
            text: {
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id sem et nisi ultricies viverra. Duis sagittis viverra pulvinar. Maecenas eget leo maximus, pulvinar massa et, consectetur enim. Mauris ut ligula cursus, bibendum mi quis, hendrerit est. Fusce ornare nisi ac mauris pharetra placerat. Aenean et fringilla arcu, quis accumsan libero. Etiam neque ipsum, iaculis quis malesuada et, consequat in lorem. Sed non nisl vel arcu bibendum congue ornare sit amet ipsum. Duis vel tempor libero. Vestibulum nec sagittis dolor, at convallis sem. Vestibulum quis ipsum vel urna fringilla cursus ac eu orci.",
              width: "100%",
              size: 1,
            },
          },
        ],
      },
      {
        annexes: [
          {
            image: {
              url: "https://s2.coinmarketcap.com/static/img/coins/64x64/3388.png",
              size: 5,
            },
          },
        ],
        height: 550,
      },
    ],
  };

  return (
    <Container defaultValue={0}>
      <TabContainer>
        <Tab>
          <Typography>{t("installing")}</Typography>
        </Tab>
      </TabContainer>
      <TabPanel value={0}>
        <Guide sections={levelingData.sections} />
      </TabPanel>
      <TabPanel value={1}>2</TabPanel>
    </Container>
  );
};

export default Guides;
