import { zodResolver } from "@hookform/resolvers/zod";
import { MinorCrashOutlined, PlusOne } from "@mui/icons-material";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

const billsSchema = z.array(
  z.object({
    description: z.string().min(3, "informe a descricao"),
    amount: z.number().positive(),
  })
);
const schema = z.object({
  name: z.string().min(3, "Minimo de 3"),
  bills: billsSchema,
});

type FormDataProps = z.infer<typeof schema>;

export const ExemploAccount = () => {
  const [dados, setDados] = useState<any>("");

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  });

  const handlerSubmitForm = (data: FormDataProps) => {
    setDados(data);
    console.log(data);
  };

  const { fields, append, remove } = useFieldArray({
    name: "bills",
    control,
  });

  return (
    <div className="w-full flex flex-col items-center justify-start p-12">
      <h2 className="mb-4 text-xl">Form</h2>

      <form className="w-full" onSubmit={handleSubmit(handlerSubmitForm)}>
        <div>
          <input
            className="w-full h-12 p-2 text-white"
            type="text"
            {...register("name")}
            placeholder="inform seu nome"
          />
        </div>
        {fields.map((field, index) => (
          <div key={field.id} className="mt-10">
            <div className="mb-5">
              <input
                className="w-full h-12 p-2 text-white"
                type="text"
                {...register(`bills.${index}.description`)}
              />
              {errors?.bills && (
                <p>{errors?.bills[index]?.description.message}</p>
              )}
            </div>
            <div>
              <input
                className="w-full h-12 p-2 text-white"
                type="number"
                {...register(`bills.${index}.amount`, {
                  valueAsNumber: true,
                })}
              />
              {errors?.bills && <p>{errors?.bills[index]?.amount.message}</p>}
            </div>
            <button type="button">
              <MinorCrashOutlined />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => {
            append({
              decription: "",
              amount: 0,
            });
          }}
        >
          <PlusOne />
        </button>

        <button className="w-full bg-blue-500 mt-5" type="submit">
          enviar
        </button>
      </form>

      <div className="h-full w-full mt-10">
        <p>{JSON.stringify(dados)}</p>
      </div>
    </div>
  );
};
