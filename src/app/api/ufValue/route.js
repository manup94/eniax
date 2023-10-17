
const apiKey = process.env.UF_API_KEY


export async function GET(req) {

    const searchParams = req.nextUrl.searchParams
    const year = searchParams.get('date')

    console.log(year);

    try {
        const response = await fetch(`https://api.cmfchile.cl/api-sbifv3/recursos_api/uf/${year}?apikey=${apiKey}&formato=json`, {
            headers: {
                'Content-Type': 'application/json',

            }
        },)
        const data = await response.json()
        return Response.json({ data })

    } catch (error) {
        console.error(error);
        return Response.json({ message: 'Error al recibir datos' }, { status: 400 })
    }
} 
