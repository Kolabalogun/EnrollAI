import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@chakra-ui/react";
import { SubmitButton } from "@/components/common";
import { systemData } from "@/constant/data/systemdata";

const System = () => {
  // Create a dynamic Zod schema based on systemData array
  const FormSchema = z.object(
    systemData.reduce((schema, item) => {
      schema[item.name] = z.boolean().default(item.checked);
      return schema;
    }, {} as Record<string, z.ZodTypeAny>)
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: systemData.reduce((defaults, item) => {
      defaults[item.name] = item.checked;
      return defaults;
    }, {} as Record<string, boolean>),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <section className="bg-white rounded-lg flex-1 h-full w-full flex flex-col px-5 py-5 pb-10 space-y-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="pb-5 border-b">
            <div className="space-y-4">
              {systemData.map((item) => (
                <FormField
                  key={item.name}
                  control={form.control}
                  name={item.name as keyof z.infer<typeof FormSchema>}
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg xl:gap-0 gap-2 p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-dark-200 inter text-sm roboto font-semibold pb-1">
                          {item.title}
                        </FormLabel>
                        <FormDescription className="text-text-primary text-xs">
                          {item.desc}
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          colorScheme="purple"
                          isChecked={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-start">
            <SubmitButton className="py-2 flex gap-2 w-auto px-8 border rounded-md font-semibold text-xs">
              <p className="font-bold text-xs">Save</p>
            </SubmitButton>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default System;
