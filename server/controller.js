let todos = ["get food", "get water", "sleep"]

const controller = {
    get: (req, res)=> {
        res.status(200).send(todos)
    },
    post: (req, res)=> {
        let {todo} = req.body
        todos.push(todo)
        res.status(200).send(`added ${todo}!`)
    },
    delete: (req, res)=> {
        let {index} = req.params;
        let deleted = todos.splice(index, 1)
        res.status(200).send(`deleted ${deleted}`)
    }
}

module.exports = controller;