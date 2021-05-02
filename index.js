const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080

app.get('/service/scim/Users/', (req, res) => {
    console.log('Request params : ' + req.query.filter)
    const userId = req.query.filter ? req.query.filter.split(" ")[2].replace(/"/g,'') : "<Your_Email_Address>"
    console.log('User ID: ' + userId)

    const results = {
        totalResults: 1,
        Resources: [{
            emails: [{
                primary: true,
                value: userId
            }],
            name: {
                givenName: "<Your_Given_Name>",
                familyName: "<Your_Family_Name>"
            },
            userName: userId,
            userUuid: "7326d7bb-7670-4d6f-b652-c73276695a0e"
        }]
    }

    res.status(200).json(results)

})

app.get('/*', (req, res) => {
    const path = req.path
    console.log("Request to default handler: " + req.path)
    res.send('Hello world!')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
