apt-get update;

rm -rf *;
rm -rf .*;
----------
cat > pull.sh
----------
rm -rf .git;
git init;
ls -lAF;
git config user.name "g00u00";
git config user.email "g00u00@outlook.com";
git branch -M main;
git branch;
git remote add origin git@github.com:g00u00/product.git;
git pull origin main;
git status;
git log;
ls -lAF;
git config --list;

rm package-lock.json


ufw status verbose
ufw disable

sudo apt-get update && sudo apt-get install yarn
yarn install
yarn start
yarn add react-router-dom

yarn build
su npm install -g serve
su yarn global add serve
serve -s build


cat > push.sh
----------
git add .;
git status;
git status --ignored;
git commit -m "000";
git log;
git push --set-upstream origin main;
