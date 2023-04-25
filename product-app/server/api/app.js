
export default defineEventHandler(async (event) => {
    //..handle query params
    const {name} = getQuery(event)
    const {age} = await readBody(event)
    return{
        message: `Hey, ${name}, You are ${age} years old`
    }
})