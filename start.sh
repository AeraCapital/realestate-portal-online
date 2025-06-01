pm2 stop rsp-website
pm2 delete rsp-website

npm install
npm run build

pm2 start npm --name "rsp-website" -- start