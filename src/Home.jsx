import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/about')
    }
    return (
        <div>
            <h1>Home</h1> <h2>Welcome to the Home page</h2>
            <button style={{backgroundColor: 'lightblue', color: 'black', padding: '10px', borderRadius: '5px'}} onClick={handleClick}>Go to About</button>

        </div>
    )
}