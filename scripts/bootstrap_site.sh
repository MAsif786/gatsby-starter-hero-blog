#!/bin/sh

PS3="Do you want to copy some starter pages and posts? "

yes_no=("Yes" "No")

select copy_starter_content in "${yes_no[@]}"
do
  case ${copy_starter_content} in
    "Yes")

    if [ -d ./content/pages ]; then
      # We don't want to overwrite any existing pages.
      cp -a ./starter/content/pages/* ./content/pages/
    else
      cp -a ./starter/content/pages/ ./content/
    fi
    echo "Copied starter pages."
    echo ""

    if [ -d ./content/posts ]; then
      # We don't want to overwrite any existing posts.
      cp -a ./starter/content/posts/* ./content/posts/
    else
      cp -a ./starter/content/posts/ ./content/
    fi
    echo "Copied starter posts."
    echo ""
    break
    ;;

  "No")
    echo "Only starter page parts and metadata copied. You must create new pages and posts"
    echo "by executing 'yarn new-content' in order for 'gatsby develop' to show a site."
    echo ""
    break
    ;;

  *) echo "Invalid choice.";;

  esac
done

if [ ! -e ./.env ]; then
  cp -f ./starter/.env ./.env
fi

if [ ! -d ./content/images ]; then
  cp -a ./starter/content/images/ ./content/
fi

if [ ! -d ./content/meta ]; then
  cp -a ./starter/content/meta/ ./content/
fi

if [ ! -d ./content/parts ]; then
  cp -a ./starter/content/parts/ ./content/
fi
