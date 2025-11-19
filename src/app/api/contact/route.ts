// import {
//     Resend
// } from "resend";
// import {
//     NextResponse
// } from "next/server";
// import {
//     ContactFormSchema
// } from "@/app/lib/validation";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(reque: Request) {
//     try {
//         const bodyData = await reque.json();

//         const parsedContactFormSchema = ContactFormSchema.safeParse(bodyData);

//         if (!parsedContactFormSchema.success) {
//             return NextResponse.json(
//                 {
//                     errors: "Něco se nepovedlo."
//                 },
//                 {
//                     status: 400
//                 }
//             );
//         };

//         const {
//             name,
//             email,
//             phone,
//             emailSubject,
//             emailMessage
//         } = parsedContactFormSchema.data;

//         await resend.emails.send({
//             from: "Modernizujme.cz <onboarding@resend.dev>",
//             to: "info.modernizujme@gmail.com",
//             // process.env.MY_EMAIL
//             subject: emailSubject ? emailSubject : "Vojto, zpráva od klienta",
//             html: emailMessage
//         });
//     } catch (catchError) {};
// };

// import { Resend } from "resend";
// import { NextResponse } from "next/server";
// import { ContactFormSchema } from "@/app/lib/validation";

// const resend = new Resend(process.env.RESEND_API_KEY);

// console.log(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const bodyData = await req.json();

//     const parsed = ContactFormSchema.safeParse(bodyData);

//     if (!parsed.success) {
//       return NextResponse.json(
//         { errors: parsed.error.flatten().fieldErrors },
//         { status: 400 }
//       );
//     }

//     const { name, email, phone, emailSubject, emailMessage } = parsed.data;

//     await resend.emails.send({
//       from: "Web Kontakt <onboarding@resend.dev>",
//       to: "info.modernizujme@gmail.com",
//       subject: emailSubject || "Vojto, máš novou zprávu",
//       html: `
//         <h2>Nová zpráva z formuláře</h2>
//         <p><strong>Jméno:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
//         <p><strong>Zpráva:</strong></p>
//         <p>${emailMessage}</p>
//       `
//     });

//     return NextResponse.json({ success: true });

//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "Server error." },
//       { status: 500 }
//     );
//   }
// }

import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ContactFormSchema } from "@/app/lib/validation";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_VV8PRF8e_DnmAtrtccSvnVBAVxuEGpMwd");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ContactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ errors: "Něco se nepovedlo." }, { status: 400 });
    }

    const { name, email, phone, emailSubject, emailMessage } = parsed.data;

    await resend.emails.send({
      from: "onboarding@resend.dev", // nebo 'No reply - vojtaoliva.cz'
    //   to: process.env.MY_EMAIL,
      to: "oliva.vojta@gmail.com",
      subject: emailSubject || "Vojto, zpráva od klienta",
      html: `
        <div class="bg-black/30">
            <p>Jméno: ${name}</p>
            <p>Email: ${email}</p>
            <p>Telefon: ${phone || "-"}</p>
            <p>Zpráva: ${emailMessage}</p>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Chyba při odesílání:", err);
    return NextResponse.json({ errors: "Nepodařilo se odeslat email." }, { status: 500 });
  }
}