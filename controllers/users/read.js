function read(req, res, next){
    res.status(200).render("index", {
        title: "/USERS",
        subtitle: "endpoints of users"
    })
}

export default read;