import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import TabContent from "./TabContent";

const TabsWithAccordion: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <Box>
      <Tabs value={tabIndex} onChange={handleChange}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
      <TabContent tabIndex={tabIndex} />
    </Box>
  );
};

export default TabsWithAccordion;
