"use client"

import { createContext, useState, type ReactNode } from "react"
import type { RegisterFormData } from "../types/RegisterType"
import { mockRegisterData } from "../mocks/RegisterMock"

interface RegisterContextType {
  formData: RegisterFormData
  updateField: (field: keyof RegisterFormData, value: string) => void
  resetForm: () => void
}

export const RegisterContext = createContext<RegisterContextType | null>(null)

interface RegisterProviderProps {
  children: ReactNode
}

export function RegisterProvider({ children }: RegisterProviderProps) {
  const [formData, setFormData] = useState<RegisterFormData>(mockRegisterData)

  const updateField = (field: keyof RegisterFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const resetForm = () => {
    setFormData(mockRegisterData)
  }

  return (
    <RegisterContext.Provider value={{ formData, updateField, resetForm }}>
      {children}
    </RegisterContext.Provider>
  )
}
