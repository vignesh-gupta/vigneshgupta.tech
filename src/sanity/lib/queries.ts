import { defineQuery } from "next-sanity";

export const SKILLS_QUERY =
  defineQuery(`*[_type=="skill"] | order(_createdAt asc){
  _id,category,name,icon, use, link
}`);

export const FEATURED_PROJECTS_QUERY =
  defineQuery(`*[_type=="project" && isFeatured][0..2] | order(_createdAt desc){
  codeLink,description,_id,title,projectLink,imgUrl,icon
}`);

export const PROJECTS_QUERY =
  defineQuery(`*[_type=="project"] | order(_createdAt desc){
  codeLink,description,_id,title,projectLink,isFeatured,imgUrl,icon
}`);
