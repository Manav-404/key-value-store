
# In-Memory Key Value Store
It is a simple in-memory key value store supporting `search`, `put`, `delete` options. 





## How to run the project

#### 1. Install all dependencies

```
  npm install
```

#### 2. Run the application

```
  npm run dev
```

#### 3. The Key Value store, persists the data in `string:object` format

```
"sde" : {"role": "SDE1", "year": 2023....}
```

#### 4. Input the `search` `put` `delete` operations in preceded format

```
  put key attributeKey1 attributeValue1 attributeKey2...
  search attributeKey attributeValue
  delete key

```

#### 5. Input the `exit` operation to end querying and viewing the results for all operations

```
exit
```


