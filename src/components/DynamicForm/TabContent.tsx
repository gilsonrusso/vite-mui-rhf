import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import DynamicForm from "./DynamicForm";
import { FormsContext } from "./FormsContext";

interface TabContentProps {
  tabIndex: number;
}

const TabContent: React.FC<TabContentProps> = ({ tabIndex }) => {
  const context = useContext(FormsContext);

  if (!context) {
    return null;
  }

  const { forms, addForm, removeForm } = context;

  return (
    <Box>
      {forms[tabIndex]?.map((_, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Formulário {index + 1}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DynamicForm
              tabIndex={tabIndex}
              index={index}
              removeForm={removeForm}
            />
          </AccordionDetails>
        </Accordion>
      ))}
      <Button
        onClick={() => addForm(tabIndex)}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Adicionar Formulário
      </Button>
    </Box>
  );
};

export default TabContent;
