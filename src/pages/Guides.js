import { display, minHeight, styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import IntlTypography from "../components/common/IntlTypography";

const Container = styled(TabsUnstyled)(({ theme }) => ({
  display: "flex",
  width: "80%",
  maxWidth: 1500,
  height: "fit-content",
  minHeight: "100%",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "95%",
  },
}));

const TabContainer = styled(TabsListUnstyled)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: "6em",
  wordWrap: "break-word",
  gap: "0.3em",
  marginTop: "1em",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    marginLeft: theme.spacing(1),
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
  return (
    <Container defaultValue={0}>
      <TabContainer>
        <Tab>
          <IntlTypography text='leveling' />
        </Tab>
        <Tab>
          <IntlTypography text='guide' />
        </Tab>
      </TabContainer>
      <TabPanel value={0}>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
        <p>Lvl up</p>
      </TabPanel>
      <TabPanel value={1}>2</TabPanel>
    </Container>
  );
};

export default Guides;
