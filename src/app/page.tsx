import { InputForm } from "@/components/InputForm";

export default function Page() {
   return (
      <div>
         <h1>Secret Santa</h1>
         <p>Fast, easy, and safe, pick three!</p>
         <div className="flex w-full flex-col items-center">
            <InputForm />
         </div>
      </div>
   );
}
