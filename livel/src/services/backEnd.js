import Request from 'request-promise'


  export const getAluno = (AlunoID, AlunoPwd) => {
        return new Promise((resolve, reject) =>{
            Request({
              method: 'GET',
              url: `http://fitgroup.com.br/livel/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=alunoLogin&AlunoID=${AlunoID}&AlunoPwd=${AlunoPwd}`,
              json: true,
              resolveWithFullResponse: true
            }).then((response) => {
              resolve (response.body);
            }).catch((err) => {
              console.log(err);
              reject (err);
            });
      });
  }

  export const getTreinoSemana = () => {
    return new Promise((resolve, reject) =>{
      Request({
          method: 'GET',
          url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=treinoSemana`,
          json: true,
          resolveWithFullResponse: true
        }).then((response) => {
          resolve (response.body);
        }).catch((err) => {
          console.log(err);
          reject (err);
      });
    });
  }

  export const getHorarios = () => {
    return new Promise((resolve, reject) =>{
      Request({
          method: 'GET',
          url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=treinoHorarios`,
          json: true,
          resolveWithFullResponse: true
        }).then((response) => {
          resolve (response.body);
        }).catch((err) => {
          console.log(err);
          reject (err);
      });
    });
  }

  export const registroTreino = (AlunoID, TipoTreinoID, HorarioID) => {
    return new Promise((resolve, reject) =>{
      Request({
          method: 'GET',
          url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=treinoHRegistra&AlunoID=${AlunoID}&TipoTreinoID=${TipoTreinoID}&HorarioID=${HorarioID}`,
          json: true,
          resolveWithFullResponse: true
        }).then((response) => {
          resolve (response.body);
        }).catch((err) => {
          console.log(err);
          reject (err);
      });
    });
  }

  export const checkOut = (TreinoID) => {
    return new Promise((resolve, reject) =>{
      Request({
          method: 'GET',
          url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=treinoCheckOut&TreinoID=${TreinoID}`,
          json: true,
          resolveWithFullResponse: true
        }).then((response) => {
          resolve (response.body);
        }).catch((err) => {
          console.log(err);
          reject (err);
      });
    });
  }


  export const avaliacao = (TreinoID, Avaliacao) => {
    return new Promise((resolve, reject) =>{
      Request({
          method: 'GET',
          url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=treinoAvalia&TreinoID=${TreinoID}&Avaliacao=${Avaliacao}`,
          json: true,
          resolveWithFullResponse: true
        }).then((response) => {
          resolve (response.body);
        }).catch((err) => {
          console.log(err);
          reject (err);
      });
    });
  }

  export const registrarRestricoes = (AlunoID, RestricoesObs, RestricoesLocais) => {
    if (RestricoesObs!==-1) {
      return new Promise((resolve, reject) =>{
        Request({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=restricoesRegistra&AlunoID=${AlunoID}&RestricoesObs=${RestricoesObs}&RestricoesLocais=${RestricoesLocais.join()}`,
            json: true,
            resolveWithFullResponse: true
          }).then((response) => {
            resolve (response.body);
          }).catch((err) => {
            console.log(err);
            reject (err);
        });
      });
    }
    else {
      return new Promise((resolve, reject) =>{
        Request({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=restricoesRegistra&AlunoID=${AlunoID}&RestricoesLocais=${RestricoesLocais.join()}`,
            json: true,
            resolveWithFullResponse: true
          }).then((response) => {
            resolve (response.body);
          }).catch((err) => {
            console.log(err);
            reject (err);
        });
      });
    }
  }

  export const registrarResultado = (TreinoID, Avaliacao) => {
    return new Promise((resolve, reject) =>{
      Request({
          method: 'GET',
          url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=treinoAvalia&TreinoID=${TreinoID}&Avaliacao=${Avaliacao}`,
          json: true,
          resolveWithFullResponse: true
        }).then((response) => {
          resolve (response.body);
        }).catch((err) => {
          console.log(err);
          reject (err);
      });
    });
  }




