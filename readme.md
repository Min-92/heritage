API list
method URL
GET  '/'
GET '/{category : ios,front,back}'
succed :
res.body = {
    questions: [
        {
            "category": "front"or"back"or"ios",
            "company": "company name",
            "question": "question"
        }
    ]
}
fail :
404

GET '/categories'
succed : 
res.body = {
    {
        "categories": {
            "ios" "ios",
            "front": "front",
            "back": "back"
        }
    }
}



POST '/heritage'
req.body : {
    "category" : "front"or"back"or"ios",
        "company" : "company name",
    "questions" : ["question1", "question2", "question3", ... ]
}
succed : 200
fail : 400



DELETE '/heritage/?_id=_id

succed : 200
fail : 400

PUT '/heritage/?_id=_id'
req.body : {
    "category" : "front"or"back"or"ios",
    "company" : "company name",
    "question" : "question1"
}

succed : 200
fail : 400

GET '/heritage/?_id'
succed : 
res.body = {
    "deleted",
    "_id",
    "question",
    "category",
    "company",
    "created_at",
    "updatedAt",
    "__v"
}

fail : 400

GET '/exam'
succed : 
res.body = {
    {
        "categories": {
            "ios" "ios",
            "front": "front",
            "back": "back"
        }
    }
}

GET '/exam/{category : ios,front,back}'
succed : 
res.body = {
    "questions": [
        {
            "deleted",
            "_id",
            "category",
            "question",
            "company",
            "created_at",
            "updatedAt",
            "__v": 0
        },
        {
            "deleted",
            "_id",
            "category",
            "question",
            "company",
            "created_at",
            "updatedAt",
            "__v": 0
        },
         ...
    ]
}
fail : 
statusCode : 400
