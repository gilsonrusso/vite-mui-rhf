import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { SyntheticEvent, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { CreateModelSpecData, otherSchema } from "../../App";
import AccordionUsage from "../accordion/accordion";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = useState<number>(0);

  const createUserForm = useForm<CreateModelSpecData>({
    resolver: zodResolver(otherSchema),
  });

  const { control } = createUserForm;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "techs",
  });

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {Array.from([1, 2, 3]).map((el: number) => (
          <Tab label={`${el} Item`} {...a11yProps(0)} />
        ))}
      </Tabs>
      <TabPanel value={value} index={0}>
        <AccordionUsage />
      </TabPanel>
    </Box>
  );
}
