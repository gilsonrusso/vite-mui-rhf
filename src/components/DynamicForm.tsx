import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { FormsContext } from "../context/FormsContext";
import DynamicSubForm from "./DynamicSubForm";

const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  text: z.string().min(1, "Texto é obrigatório"),
});

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
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  const context = useContext(FormsContext);

  if (!context) {
    return null;
  }

  const { forms, addSubForm, removeSubForm } = context;

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
