import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import DynamicSubForm from "./DynamicSubForm";
import { FormsContext } from "./FormsContext";
import { formSchema } from "./schema";

type FormData = z.infer<typeof formSchema>;

interface DynamicFormProps {
  tabIndex: number;
  index: number;
  removeForm: (tabIndex: number, formIndex: number) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  tabIndex,
  index,
  removeForm,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      text: "",
      subForms: [],
    },
  });

  const context = useContext(FormsContext);

  if (!context) {
    return null;
  }

  const { forms, addSubForm, removeSubForm, updateForm } = context;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    updateForm(tabIndex, index, data);
    console.log(data);
  };

  const form = forms[tabIndex][index];

  // Set default values
  useEffect(() => {
    if (form) {
      setValue("name", form.name);
      setValue("email", form.email);
      setValue("text", form.text);
      setValue("subForms", form.subForms);
    }
  }, [form, setValue]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mb: 2, border: "1px solid #ccc", p: 2, borderRadius: 1 }}
    >
      <TextField
        fullWidth
        label="Nome"
        variant="outlined"
        margin="normal"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        fullWidth
        label="Texto"
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
        {...register("text")}
        error={!!errors.text}
        helperText={errors.text?.message}
      />
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
      <Button
        onClick={() => removeForm(tabIndex, index)}
        variant="contained"
        color="secondary"
        sx={{ ml: 2 }}
      >
        Remover
      </Button>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Profissões
      </Typography>
      {forms[tabIndex][index]?.subForms?.map((_, subFormIndex) => (
        <DynamicSubForm
          key={subFormIndex}
          tabIndex={tabIndex}
          formIndex={index}
          subFormIndex={subFormIndex}
          removeSubForm={removeSubForm}
        />
      ))}
      <Button
        onClick={() => addSubForm(tabIndex, index)}
        variant="contained"
        sx={{ mt: 2 }}
      >
        Adicionar Profissão
      </Button>
    </Box>
  );
};

export default DynamicForm;
