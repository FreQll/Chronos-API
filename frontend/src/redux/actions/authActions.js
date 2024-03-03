export const login = ( email, password ) => ({
    type: 'LOGIN',
    payload: { email, password },
})

export const logout = () => ({
    type: 'LOGOUT',
})