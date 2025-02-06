import { Resend } from "resend";
import {redirect} from  'next/navigation'


// EMAIL SENDING FUCTIONALITY 
// ADD RESEND_API_KEY IN YOUR .ENV FILE 
const resend = new Resend(process.env.re_fYcedbdv_K84B58kNxSnEDteX8Fzin61y);
export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");
  if (!message) {
    return {
      error: "Invalid message",
    };
  }
  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: `harley.gutierrezcarbonell@gmail.com`,
    subject: `${name} From Contact Form.`,
    replyTo: `${SenderEmail}`,
    text: `sender email: ${SenderEmail} 
     ${message}`,
  });

return redirect('/')
 
  
};
