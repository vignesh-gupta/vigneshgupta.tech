import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    {
      name: "description",
      title: "Description",
      type: "string",
    },
    defineField({
      name: "projectLink",
      title: "Project Link",
      type: "string",
    }),
    defineField({
      name: "codeLink",
      title: "Code Link",
      type: "string",
    }),
    defineField({
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "isFeatured",
      title: "Is Featured",
      type: "boolean",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    })
  ],
});
