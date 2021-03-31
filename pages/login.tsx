import { useState } from 'react'
import fetchJson from '../lib/fetchJson'
import useUser from '../lib/useUser'


export default function Login({ }) {
    const { mutateUser } = useUser({
        redirectTo: '/hubs',
        redirectIfFound: true,
    })

    const [errorMsg, setErrorMsg] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const body = {
            username: e.currentTarget.username.value,
            password: e.currentTarget.password.value
        }

        try {
            await mutateUser(
                fetchJson('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                })
            )
        } catch (error) {
            console.error('An unexpected error happened:', error)
            setErrorMsg(error.data.message)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>User name</span>
                    <input type="text" name="username" required />
                    <span>Password</span>
                    <input type="password" name="password" required />
                </label>

                <button type="submit">Login</button>
                {errorMsg && <p className="error">{errorMsg}</p>}
            </form>
        </>

    )
}