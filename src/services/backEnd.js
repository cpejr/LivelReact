import Request from 'request-promise'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////Login////////////////////////////////////////////////////////////////

export const loginRequest = (ID, Pwd) => {
  return new Promise((resolve, reject) => {
    // Request({
    //   method: "GET",
    //   url: `http://fitgroup.com.br/livel/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=alunoLogin&AlunoID=${ID}&AlunoPwd=${Pwd}`,
    //   json: true,
    //   resolveWithFullResponse: true,
    // })
    //   .then((response) => {
    //     resolve(response.body);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     reject(err);
    //   });
    resolve({
      USER_TYPE: 'coachee',
      LOGIN: { ID_Aluno: 1, Status: 1 },
      ALUNO_TREINOS: {
        NumTreinosMes: 7,
        PontosNext: 12,
        NumTreinosFaltam: 2,
        ID_ultimoTreinoTipo: 1,
      },
      ALUNO_INFO: {
        AlunoNome: 'Aluízio',
      },
    })
  })
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////COACHEE//////////////////////////////////////////////////////////////

export const getTreinoSemana = () => {
  return new Promise((resolve, reject) => {
    resolve({
      Periodizacao: 'M',
      MargemtRepeticaoInferior: 9,
      MargemRepeticaoSuperior: 20,
      CadeiaExcentrica: 9,
      CadeiaConcentrica: 9,
      ID_Semana: 1,
    })
    // Request({
    //   method: "GET",
    //   url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=treinoSemana`,
    //   json: true,
    //   resolveWithFullResponse: true,
    // })
    //   .then((response) => {
    //     resolve(response.body.TREINO_SEMANA);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     reject(err);
    //   });
  })
}

export const treinoHorarios = () => {
  return new Promise((resolve, reject) => {
    // Request({
    //   method: "GET",
    //   url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=treinoHorarios`,
    //   json: true,
    //   resolveWithFullResponse: true,
    // })
    //   .then((response) => {
    //     resolve(response.body);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     reject(err);
    //   });

    resolve({
      TREINO_HORARIOS: [
        {
          Horario: `${new Date().getHours()}:${
            new Date().getMinutes() + 1 > 9
              ? new Date().getMinutes() + 1
              : `0${new Date().getMinutes() + 1}`
          }:${
            new Date().getSeconds() > 9
              ? new Date().getSeconds()
              : `0${new Date().getSeconds()}`
          }`,
          ID_Horario: 1,
        },
        {
          Horario: `${new Date().getHours() + 1}:${
            new Date().getMinutes() > 9
              ? new Date().getMinutes()
              : `0${new Date().getMinutes()}`
          }:${
            new Date().getSeconds() > 9
              ? new Date().getSeconds()
              : `0${new Date().getSeconds()}`
          }`,
          ID_Horario: 1,
        },
        {
          Horario: `${new Date().getHours() + 2}:${
            new Date().getMinutes() > 9
              ? new Date().getMinutes()
              : `0${new Date().getMinutes()}`
          }:${
            new Date().getSeconds() > 9
              ? new Date().getSeconds()
              : `0${new Date().getSeconds()}`
          }`,
          ID_Horario: 1,
        },
      ],
    })
  })
}

export const treinoRegistra = (AlunoID, TipoTreinoID, HorarioID) => {
  return new Promise((resolve, reject) => {
    Request({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=treinoRegistra&AlunoID=${AlunoID}&TipoTreinoID=${TipoTreinoID}&HorarioID=${HorarioID}`,
      json: true,
      resolveWithFullResponse: true,
    })
      .then((response) => {
        resolve(response.body)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

export const treinoCheckOut = (TreinoID) => {
  return new Promise((resolve, reject) => {
    Request({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=treinoCheckOut&TreinoID=${TreinoID}`,
      json: true,
      resolveWithFullResponse: true,
    })
      .then((response) => {
        resolve(response.body)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

export const restricoesRegistra = (
  AlunoID,
  RestricoesObs,
  RestricoesLocais
) => {
  if (RestricoesObs !== -1) {
    return new Promise((resolve, reject) => {
      Request({
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${
          process.env.REACT_APP_AUTH_TOKEN
        }&Metodo=restricoesRegistra&AlunoID=${AlunoID}&RestricoesObs=${RestricoesObs}&RestricoesLocais=${RestricoesLocais.join()}`,
        json: true,
        resolveWithFullResponse: true,
      })
        .then((response) => {
          resolve(response.body)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  } else {
    return new Promise((resolve, reject) => {
      Request({
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${
          process.env.REACT_APP_AUTH_TOKEN
        }&Metodo=restricoesRegistra&AlunoID=${AlunoID}&RestricoesLocais=${RestricoesLocais.join()}`,
        json: true,
        resolveWithFullResponse: true,
      })
        .then((response) => {
          resolve(response.body)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  }
}

export const treinoAvalia = (TreinoID, Avaliacao) => {
  return new Promise((resolve, reject) => {
    Request({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=treinoAvalia&TreinoID=${TreinoID}&Avaliacao=${Avaliacao}`,
      json: true,
      resolveWithFullResponse: true,
    })
      .then((response) => {
        resolve(response.body)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

export const resultadoRegistra = (
  AlunoID,
  DataResultado,
  Peso,
  Altura,
  AlongamentoNivel,
  Adbominais,
  Flexoes,
  Barra,
  Pescoco,
  Cintura,
  Quadril,
  Biceps,
  Coxa
) => {
  return new Promise((resolve, reject) => {
    Request({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=resultadoRegistra&AlunoID=${AlunoID}&DataResultado=${DataResultado}&Peso=${Peso}&Altura=${Altura}&AlongamentoNivel=${AlongamentoNivel}&Adbominais=${Adbominais}&Flexoes=${Flexoes}&Barra=${Barra}&Pescoco=${Pescoco}&Cintura=${Cintura}&Quadril=${Quadril}&Biceps=${Biceps}&Coxa=${Coxa}`,
      json: true,
      resolveWithFullResponse: true,
    })
      .then((response) => {
        resolve(response.body)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////COACH////////////////////////////////////////////////////////////////

export const getCoachHorarios = (ProfessorID) => {
  return new Promise((resolve, reject) => {
    Request({
      method: 'GET',
      url: `http://fitgroup.com.br/livel/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=professorHoriarios&ProfessorID=${ProfessorID}`,
      json: true,
      resolveWithFullResponse: true,
    })
      .then((response) => {
        resolve(response.body)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

export const treinoTransfere = (TreinoID, UsuarioDestinoID) => {
  return new Promise((resolve, reject) => {
    Request({
      method: 'GET',
      url: `http://fitgroup.com.br/livel/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=treinoTransfere&TreinoID=${TreinoID}&UsuarioDestinoID=${UsuarioDestinoID}`,
      json: true,
      resolveWithFullResponse: true,
    })
      .then((response) => {
        resolve(response.body)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}
