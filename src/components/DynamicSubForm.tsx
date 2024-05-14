import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const subFormSchema = z.object({
  profession: z.string().min(1, "Profissão é obrigatória"),
  experience: z.string().min(1, "Tempo de experiência é obrigatório"),
});

type SubFormData = z.infer<typeof subFormSchema>;

interface DynamicSubFormProps {
  tabIndex: number;
  formIndex: number;
  subFormIndex: number;
  removeSubForm: (
    tabIndex: number,
    formIndex: number,
    subFormIndex: number
  ) => void;
}

const DynamicSubForm: React.FC<DynamicSubFormProps> = ({
  tabIndex,
  formIndex,
  subFormIndex,
  removeSubForm,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubFormData>({
    resolver: zodResolver(subFormSchema),
  });

  const onSubmit: SubmitHandler<SubFormData> = (data) => console.log(data);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mb: 2, border: "1px solid #ccc", p: 2, borderRadius: 1 }}
    >
      <TextField
        fullWidth
        label="Profissão"
        variant="outlined"
        margin="normal"
        {...register("profession")}
        error={!!errors.profession}
        helperText={errors.profession?.message}
      />
      <TextField
        fullWidth
        label="Tempo de Experiência"
        variant="outlined"
        margin="normal"
        {...register("experience")}
        error={!!errors.experience}
        helperText={errors.experience?.message}
      />
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
      <Button
        onClick={() => removeSubForm(tabIndex, formIndex, subFormIndex)}
        variant="contained"
        color="secondary"
        sx={{ ml: 2 }}
      >
        Remover
      </Button>
    </Box>
  );
};

export default DynamicSubForm;
