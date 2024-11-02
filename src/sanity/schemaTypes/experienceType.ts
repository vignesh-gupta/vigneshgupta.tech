import { defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";

export const experienceType = defineType({
  name: "experience",
  title: "Experience",
  icon: CaseIcon,
  type: "document",
  fields: [
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "duration",
    }),
    defineField({
      name: "isPresent",
      title: "Is Present",
      type: "boolean",
      initialValue: false,
      validation: (rule) => {
        console.log(rule);

        return rule.custom((value, context) => {
          console.log({ context });

          const endDate = (context?.document?.duration as { end?: string })
            ?.end;

          if (value && endDate) {
            return "Cannot be present and have an end date";
          }

          if (!value && !endDate) {
            return "Must have an end date if not present";
          }

          return true;
        });
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
