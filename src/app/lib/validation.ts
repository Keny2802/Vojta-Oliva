import {
    z
} from "zod";

export const ContactFormSchema = z.object({
    name: z.string().min(2, "Vaše jméno, nesmí být kratší než 2 znaky."),
    email: z.string().email("Neplatný email."),
    phone: z.string().optional(),
    emailSubject: z.string().optional(),
    emailMessage: z.string().min(10, "Vaše zpráva, je kratší než 10 znaků.")
});

export type contactFormProps = z.infer<typeof ContactFormSchema>;