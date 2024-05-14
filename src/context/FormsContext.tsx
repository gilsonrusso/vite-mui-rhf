import { createContext, ReactNode, useState } from "react";

interface SubForm {
  profession: string;
  experience: string;
}

interface Form {
  subForms: SubForm[];
}

interface FormsContextType {
  forms: Array<Array<Form>>;
  addForm: (tabIndex: number) => void;
  removeForm: (tabIndex: number, formIndex: number) => void;
  addSubForm: (tabIndex: number, formIndex: number) => void;
  removeSubForm: (
    tabIndex: number,
    formIndex: number,
    subFormIndex: number
  ) => void;
}

const FormsContext = createContext<FormsContextType | undefined>(undefined);

const FormsProvider = ({ children }: { children: ReactNode }) => {
  const [forms, setForms] = useState<Array<Array<Form>>>([[]]);

  const ensureTabInitialized = (tabIndex: number) => {
    if (!forms[tabIndex]) {
      const newForms = [...forms];
      newForms[tabIndex] = [];
      setForms(newForms);
    }
  };

  const ensureFormInitialized = (tabIndex: number, formIndex: number) => {
    ensureTabInitialized(tabIndex);
    if (!forms[tabIndex][formIndex]) {
      const newForms = [...forms];
      newForms[tabIndex][formIndex] = { subForms: [] };
      setForms(newForms);
    }
  };

  const addForm = (tabIndex: number) => {
    ensureTabInitialized(tabIndex);
    const newForms = [...forms];
    newForms[tabIndex] = [...newForms[tabIndex], { subForms: [] }];
    setForms(newForms);
  };

  const removeForm = (tabIndex: number, formIndex: number) => {
    ensureTabInitialized(tabIndex);
    const newForms = [...forms];
    newForms[tabIndex] = newForms[tabIndex].filter(
      (_, index) => index !== formIndex
    );
    setForms(newForms);
  };

  const addSubForm = (tabIndex: number, formIndex: number) => {
    ensureFormInitialized(tabIndex, formIndex);
    const newForms = [...forms];
    newForms[tabIndex][formIndex].subForms = [
      ...newForms[tabIndex][formIndex].subForms,
      { profession: "", experience: "" },
    ];
    setForms(newForms);
  };

  const removeSubForm = (
    tabIndex: number,
    formIndex: number,
    subFormIndex: number
  ) => {
    ensureFormInitialized(tabIndex, formIndex);
    const newForms = [...forms];
    newForms[tabIndex][formIndex].subForms = newForms[tabIndex][
      formIndex
    ].subForms.filter((_, index) => index !== subFormIndex);
    setForms(newForms);
  };

  return (
    <FormsContext.Provider
      value={{ forms, addForm, removeForm, addSubForm, removeSubForm }}
    >
      {children}
    </FormsContext.Provider>
  );
};

export { FormsContext, FormsProvider };
