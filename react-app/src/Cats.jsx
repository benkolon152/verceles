import { useState, useEffect } from 'react'
export default function Cats(props){
    const [cats, setCats] = useState([])

    useEffect(()=>{
        (async () =>{
            const catsJson = await fetch('/api/neon-cats')
            console.log('catsJson', catsJson)
            const cats = await catsJson.json()
            console.log('cats', cats)
            setCats(cats)
        })().catch(console.warn)
    }, [])

    return (
        <>
            {JSON.stringify(cats)}
        </>
    )
}