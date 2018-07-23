#!/bin/sh

archetypes_dir="./content/archetypes"
posts_dir="./content/posts"
pages_dir="./content/pages"
config_file="./content/meta/config.js"

author_name=$(cat ${config_file} | grep authorName | cut -d'"' -f2)

PS3="What type of content do you want to create? "

content_types=("Blog" "Page")

select selected_content_type in "${content_types[@]}"
do
  case ${selected_content_type} in
    "Blog")
      content_type="post"
      new_content_dir_path=${posts_dir}
      echo "New ${content_type} post being created."
      echo ""
      break
      ;;
    "Page")
      content_type="page"
      new_content_dir_path=${pages_dir}
      echo "New ${content_type} being created."
      echo ""
      break
      ;;
    *) echo "Invalid choice.";;
  esac
done

if [ "${content_type}" = "post" ]; then
  echo -n "Enter blog post date (YYYY-MM-DD): "
else
  echo -n "Enter an integer for the page prefix: "
fi

# TODO - validate the data type of prefix

read prefix

if [ "${prefix}" = "" ]; then
  echo "Invalid prefix."
  echo ""
  exit 1
else
  echo "Prefix: ${prefix}"
  echo ""
fi

echo -n "Enter a slug for the ${content_type}: "

read slug

if [ "${slug}" = "" ]; then
  echo "Invalid slug."
  echo ""
  exit 1
else
  echo "Slug: ${slug}"
  echo ""
fi

new_content_dir_name="${prefix}--${slug}"
dir=${new_content_dir_path}/${new_content_dir_name}

if [ -d ${dir} ]; then
  echo "A ${content_type} with the name ${new_content_dir_name} already exists."
  echo ""
else
  mkdir ${dir}
  touch ${dir}/index.md
  echo "Created ${dir}."
  echo ""
fi

echo -n "Enter a title for the ${content_type}: "

read title

if [ "${title}" = "" ]; then
  echo "Invalid title."
  echo ""
  exit 1
else
  echo "Title: ${title}"
  echo ""
fi

if [ "${content_type}" = "post" ]; then
  echo -n "Enter a file name for the cover photo (optional for now): "
  read cover

  echo "---" > ${dir}/index.md
  echo "title: ${title}" >> ${dir}/index.md
  echo "author: ${author_name}" >> ${dir}/index.md
  echo "category: software-development" >> ${dir}/index.md
  if [ -z ${cover} ]; then
    echo "cover: " >> ${dir}/index.md
  else
    echo "cover: ${cover}" >> ${dir}/index.md
  fi
  echo "draft: true" >> ${dir}/index.md
  echo "tags: []" >> ${dir}/index.md
  echo "---" >> ${dir}/index.md
  echo "" >> ${dir}/index.md
  if [ -n ${cover} ]; then
    echo "![](${cover})" >> ${dir}/index.md
    echo "" >> ${dir}/index.md
  fi

else
  echo -n "Enter a menu title if it should be different than the title: "
  read menu_title

  echo "---" > ${dir}/index.md
  echo "title: ${title}" >> ${dir}/index.md
  if [ -z ${menu_title} ]; then
    echo "menuTitle: " >> ${dir}/index.md
  else
    echo "menuTitle: ${menu_title}" >> ${dir}/index.md
  fi
  echo "shownInMenu: false" >> ${dir}/index.md
  echo "---" >> ${dir}/index.md
  echo "" >> ${dir}/index.md

fi

exit 0
