import { useMemo, useState } from "react"

export default function BudgetForm() {

    const [budget, setBudget] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber)
    }

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0
    }, [budget])


    return (
        <form className="space-y-5">
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center" >
                    Definir Presupuesto
                </label>
                <input 
                    type="number" 
                    name="budget" 
                    id="budget" 
                    value={budget} 
                    onChange={handleChange }
                    placeholder="Define tu presupuesto" 
                    className="w-full bg-white border border-gray-200 p-2" />
            </div>

            <input type="submit" value="Definir Presupuesto"
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer disabled:opacity-40 w-full p-2 text-white font-black uppercase"
                disabled={isValid}
            />

        </form>
    )
}
