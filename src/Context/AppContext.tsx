import { createContext, useContext } from 'react'

export type AppContextType = {
  appData: {
    numberOfProducts: number
    products: Array<any>
    userData: {
      name: string
      id: string
      adress: string
      cellphone: string
    }
  }
}

const initialState = {
  numberOfProducts: 0,
  products: [],
  userData: {
    name: '',
    id: '',
    adress: '',
    cellphone: ''
  }
}

const AppContext = createContext<AppContextType>({
  appData: initialState
})

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppContext.Provider value={{ appData: initialState }}>
      {children}
    </AppContext.Provider>
  )
}
