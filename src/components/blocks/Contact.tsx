"use client";
import { BlockProps } from "@/config/blocks";
import { Button } from "@/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Block } from "../Block";
const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = ({ active }: BlockProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
  }

  if (form.formState.isSubmitting) {
    return (
      <Block active={active} className="p-6 relative">
        <div className="absolute z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </Block>
    );
  }
  if (form.formState.isSubmitSuccessful) {
    return (
      <Block active={active} className="p-0 relative">
        <div className="absolute z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
        <div className="mt-5 gap-2 flex flex-col items-center justify-center min-h-[150px] z-50 h-full w-full">
          <span className="text-lg font-semibold z-50">
            Thank you for your message!
          </span>
          <span className="text-sm text-gray-500 z-50">
            I will get back to you as soon as possible.
          </span>
        </div>
      </Block>
    );
  }
  return (
    <Block active={active} className="p-6 relative">
      <div className="absolute z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute z-10 left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex  flex-col gap-4 justify-center items-center  m-auto"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2 w-full z-50">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="email"
                    {...field}
                    className="rounded-sm py-1 px-3 text-white bg-white/[0.1]"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="space-y-2 w-full z-50">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Say hello!"
                    {...field}
                    className="rounded-sm py-1 px-3 text-white bg-white/[0.1]"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-md z-50 bg-white/[0.1] rounded-sm px-8 hover:bg-white/[0.2]"
          >
            Submit
          </Button>
        </form>
      </Form>
    </Block>
  );
};

export default Contact;
