
import withSession from '../../lib/session'

export default withSession(async (req, res) => {
    const { username, password } = await req.body

    //TODO: check, if username/password exists in DB
    if (username === 'test' && password === 'test') { //If user found
        const user = {
            userId: 11,
            fullname: "Иван иванич крузерштейн"
        };
        req.session.set('user', user);
        await req.session.save()
        res.json(user)
    } else {
        res.status(401).json("Неверный иваныч")
    }
})