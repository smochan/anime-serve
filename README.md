## Backend server starting template

##### clone
```shell
git clone git@github.com:smochan/backend-starting-template.git "project-name"
cd "project-name"
```
##### install dependencies
```shell
npm i
```

##### add env variables
```shell
PORT=PORT_NUMBER
MONGO_URL=URL
```

##### remove origin 
```shell
git remote rm origin
# important to remove remove origin before setting a new one for the latest project
```


##### start the server

```shell
npm run dev
```