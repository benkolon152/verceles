import { neon } from '@neondatabase/serverless'

export default async function handler(req, res){
    const conn = neon(process.env.DATABASE_URL)
    console.log('conn', conn)

    if (req.method == 'GET'){
        const result = await conn`SELECT * FROM cats LIMIT 20`
        console.log('get result', result)
        return res.status(200).json(result)
    }

    if (req.method == 'POST'){
        //TODO - implement Post
    }
    if (req.method == 'PATCH'){
        //TODO - implement PATCH
    }
    if (req.method == 'DELETE'){
        //TODO - implement DELETE
    }

    return res.status(500).json([{error: 'Skill issue :3'}])
}