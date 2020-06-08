
export const isAuthenticated = () => sessionStorage.getItem('ALUNO') !== null;

export const getAluno = () => {return JSON.parse(sessionStorage.getItem('ALUNO'))};

export const login = (aluno) => {sessionStorage.setItem('ALUNO', JSON.stringify(aluno))};

export const logout = () => {sessionStorage.clear()};