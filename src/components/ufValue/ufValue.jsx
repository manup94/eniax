'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    year: z.string().min(4, 'Debes introducir un año'),

})


export default function UfValue() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            year: '0'
        }

    })

    console.log(errors);
    const handleOnSubmit = handleSubmit(async (data) => {
        try {
            const response = await fetch(`/api/ufValue?date=${data.year}`)
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    })



    return (
        <div className="p-5 flex gap-5">
            <h2>Obtener valor de Uf</h2>
            <form className="flex gap-5" onSubmit={handleOnSubmit} >
                <fieldset>

                    <input className="bg-gray-100 outline-none" type="number" {...register('year')} placeholder="Introduce un año" />
                    {!!errors.year?.message && <p className='text-red-500'>{errors.year.message}</p>}

                </fieldset>
                <button className="text-white font-bold bg-[#3c82f6] p-2 " type="submit">Calcular</button>
            </form>
        </div>
    )
}



