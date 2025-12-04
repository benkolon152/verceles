import { neon } from '@neondatabase/serverless'

export default async function handler(req, res){
    const conn = neon(process.env.DATABASE_URL)
    console.log('conn', conn)

    if (req.method == 'GET'){
        const result = await conn`SELECT id, name, isMale, age FROM cats LIMIT 20`
        console.log('get result', result)
        return res.status(200).json(result)
    }

    return res.status(200).json('neon-cats endpiont works :3')
}