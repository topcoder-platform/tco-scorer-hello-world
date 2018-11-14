FROM topcoder/topcoder-tco2018-base
ADD . .
RUN npm i
CMD [ "npm", "start" ]
