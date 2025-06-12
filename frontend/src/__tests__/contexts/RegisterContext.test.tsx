import { render, screen, act } from "@testing-library/react"
import { RegisterProvider, RegisterContext } from "/app/src/contexts/RegisterContext"
import { useContext } from "react"
import { mockRegisterData } from "/app/src/mocks/RegisterMock"

const TestComponent = () => {
  const context = useContext(RegisterContext)

  if (!context) return null

  const { formData, updateField, resetForm } = context

  return (
    <div>
      <p>Nome: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <button data-testid="update-name" onClick={() => updateField("name", "Nova Pessoa")}>Atualizar Nome</button>
      <button data-testid="reset" onClick={resetForm}>Resetar</button>
    </div>
  )
}

describe("RegisterProvider", () => {
  it("carrega os dados iniciais corretamente", () => {
    render(
      <RegisterProvider>
        <TestComponent />
      </RegisterProvider>
    )

    expect(screen.getByText(`Nome: ${mockRegisterData.name}`)).toBeInTheDocument()
    expect(screen.getByText(`Email: ${mockRegisterData.email}`)).toBeInTheDocument()
  })

  it("atualiza um campo com updateField", () => {
    render(
      <RegisterProvider>
        <TestComponent />
      </RegisterProvider>
    )

    const btn = screen.getByTestId("update-name")
    act(() => {
      btn.click()
    })

    expect(screen.getByText("Nome: Nova Pessoa")).toBeInTheDocument()
  })

  it("reseta os dados com resetForm", () => {
    render(
      <RegisterProvider>
        <TestComponent />
      </RegisterProvider>
    )

    const updateBtn = screen.getByTestId("update-name")
    act(() => {
      updateBtn.click()
    })

    expect(screen.getByText("Nome: Nova Pessoa")).toBeInTheDocument()

    const resetBtn = screen.getByTestId("reset")
    act(() => {
      resetBtn.click()
    })

    expect(screen.getByText(`Nome: ${mockRegisterData.name}`)).toBeInTheDocument()
  })
})
