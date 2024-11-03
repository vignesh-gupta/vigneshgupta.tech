import { defineQuery } from "next-sanity";

export const SKILLS_QUERY = defineQuery(`*[_type=="skill"]{
  _id,category,name,icon
}`);

export const FEATURED_PROJECTS_QUERY =
  defineQuery(`*[_type=="project" && isFeatured][0..2] |  order(_createdAt desc){
  codeLink,description,_id,title,projectLink,imgUrl
}`);

export const PROJECTS_QUERY =
  defineQuery(`*[_type=="project"] |  order(_createdAt desc){
  codeLink,description,_id,title,projectLink,isFeatured,imgUrl
}`);
