import { ReactNode } from "react"

type  ErrorMesajeProps = {
    children: ReactNode
}

export default function ErrorMesaje({children} : ErrorMesajeProps ) {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center" >{children}</p>
  )
}
