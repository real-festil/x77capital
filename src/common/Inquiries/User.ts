export const authUser = ({post, loading }: any) => {
    const feachData = async () => {
        if (loading) return loading 
        try {
            const res = await post('/posts', {})
            localStorage.setItem('token', res.id.toString())

            console.log('token', localStorage.getItem ('token'));
            
            return res 
        } catch (error) {
            console.log(error);
        }
    }
    return feachData()
}


export const registration = ({post, loading }: any) => {
    const feachData = async () => {
        if (loading) return loading 
        try {
            const res = await post('/posts', {})
            return res 
        } catch (error) {
            console.log(error);
        }
    }
    return feachData()
}