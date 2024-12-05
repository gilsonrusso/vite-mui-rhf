import { z } from "zod";

const subFormSchema = z.object({
  profession: z.string().min(1, "Profissão é obrigatória"),
  experience: z.string().min(1, "Tempo de experiência é obrigatório"),
});

const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  subFormsOne: z.array(subFormSchema),
  subFormsTwo: z.array(subFormSchema),
});

export { formSchema, subFormSchema };
