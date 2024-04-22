import { Button } from "@/components/ui/button"
import {
  Form, FormControl,
  FormField, FormItem,
  FormLabel, FormMessage
} from "@/components/ui/form"
import {
  setAppDataEmail,
  setAppDataNombre,
  setAppDataTelefono,
} from "@/store/data"
import { setAppTimeStep } from "@/store/steps"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"

const profileFormSchema = z.object({
  nombre: z
    .string({ required_error: "Ingresa tu nombre completo." })
    .min(2, { message: "Nombre demasiado corto." }),
  email: z
    .string({ required_error: "Ingresa tu correo electrónico." })
    .email({ message: "Ingresa un correo electrónico válido." }),
  telefono: z
    .string({ required_error: "Ingresa tu número de teléfono." })
    .min(10, { message: "Número de teléfono demasiado corto." }),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export default function DataStep() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  })

  function onSubmit(data: ProfileFormValues) {
    setAppDataNombre(data.nombre)
    setAppDataEmail(data.email)
    setAppDataTelefono(data.telefono)
    setAppTimeStep()
  }

  return (
    <div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre Completo</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electronico</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numero de telefono</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-end mt-10 gap-4">
            <Button
              type="submit"
              className="px-10 bg-green-700 hover:bg-green-600 py-6 text-base font-bold"
              disabled={!form.formState.isValid}
            >
              Confimar datos personales
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}