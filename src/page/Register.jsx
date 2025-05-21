
import Input from 'costuminputg'
import { useState } from 'react'
const Register= () => {
    const [name , setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handileSubmit = () => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        setEmail("")
        setPassword("")
    }

    return (
        <center>
            <div className="item-center justify-center w-150 h-full mt-50 bg-red-100">

                <form onSubmit={handileSubmit}>
                    <Input
                        type='text'
                        label='name'
                        placeholder='Name'
                        className='w-[80%] h-10 border border-gray-300 rounded-md px-4'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        type='tel'
                        label='phone'
                        placeholder='phone number'
                        className='w-[80%] h-10 border border-gray-300 rounded-md px-4'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />


                    <Input
                        type='email'
                        label='Email address'
                        placeholder='Email address'
                        className='w-[80%] h-10 border border-gray-300 rounded-md px-4'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        type='password'
                        label='password'
                        placeholder='Enter your password'
                        className='w-[80%] h-10 border border-gray-300 rounded-md px-4'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className=' bg-blue-600 w-full mp-4' type='submit'>Login</button>
                </form>
            </div>
        </center>
    )

}
export default Register