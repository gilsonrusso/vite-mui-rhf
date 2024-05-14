import { AppBar, Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import TabContent from "./TabContent";

const TabsWithAccordion: React.FC = () => {
  const [value, setValue] = useState(0);
  const tabData = [{ nome: "Tab 1" }, { nome: "Tab 2" }, { nome: "Tab 3" }];

  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
    setValue(newValue);

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          {tabData.map((tab, index) => (
            <Tab label={tab.nome} key={index} />
          ))}
        </Tabs>
      </AppBar>
      {tabData.map((tab, index) => (
        <Box
          key={index}
          role="tabpanel"
          hidden={value !== index}
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
          sx={{ p: 3 }}
        >
          {value === index && <TabContent tabIndex={index} />}
        </Box>
      ))}
    </Box>
  );
};

export default TabsWithAccordion;
