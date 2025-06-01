#!/bin/bash

# Use full path to pm2
PM2="/home/master/bin/npm/lib/node_modules/bin/pm2"

$PM2 stop rsp-website
$PM2 delete rsp-website

npm install
npm run build

$PM2 start npm --name "rsp-website" -- start