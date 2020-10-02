# Bridge Backend
Repository for bridge's backend


# API ENDPOINTS
1. __Part 1__: Signup with first name, last name, email, and password (part 2 is with the group code)
```
POST /accounts/signup

HTTP Body:
{
    "firstName": "Isaac",
    "lastName: "Newton",
    "email": "isaacnewton@gmail.com",
    "password: "abcdefg123",
}
```

2. __Part 2__ Add user information (This part needs the group code)
```
POST /accounts/information

HTTP Body:
{
    "firstName": "Isaac",               //string
    "lastName: "Newton",                //string
    "institutionName": "HospitalABC",   //string
    "code": "f1230",                    //string
    "dob": "06.23.2001",                //string
    "weight": 50,                       //integer or double
    "smoke": true,                      //boolean
    "ethnicity": "White"                //string
    "sex": "male"                       //string
    "diabetes": true                    //boolean
    "status": "student"                 //string
    "institutionName": "HopsitalABC"    //string
}
```

3.  __Part 3__ Institution add patient detail
```
POST 

```


## Installation
```
~ npm install
```

## Starting the backend server
```
~ npm start
```




