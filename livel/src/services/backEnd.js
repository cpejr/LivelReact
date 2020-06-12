import Request from 'request-promise'


//////////////////////////////////////////////COACHEE//////////////////////////////////////////////////////////////

  export const alunoLogin = (AlunoID, AlunoPwd) => {
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

  export const treinoHorarios = () => {
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

  export const treinoRegistra = (AlunoID, TipoTreinoID, HorarioID) => {
    return new Promise((resolve, reject) =>{
      Request({
          method: 'GET',
          url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=treinoRegistra&AlunoID=${AlunoID}&TipoTreinoID=${TipoTreinoID}&HorarioID=${HorarioID}`,
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

  export const treinoCheckOut = (TreinoID) => {
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



  export const restricoesRegistra = (AlunoID, RestricoesObs, RestricoesLocais) => {
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

  export const treinoAvalia = (TreinoID, Avaliacao) => {
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

  export const resultadoRegistra = (AlunoID, DataResultado, Peso, Altura, AlongamentoNivel, Adbominais, Flexoes, Barra, Pescoco, Cintura, Quadril, Biceps, Coxa) => {
    return new Promise((resolve, reject) =>{
      Request({
          method: 'GET',
          url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=resultadoRegistra&AlunoID=${AlunoID}&DataResultado=${DataResultado}&Peso=${Peso}&Altura=${Altura}&AlongamentoNivel=${AlongamentoNivel}&Adbominais=${Adbominais}&Flexoes=${Flexoes}&Barra=${Barra}&Pescoco=${Pescoco}&Cintura=${Cintura}&Quadril=${Quadril}&Biceps=${Biceps}&Coxa=${Coxa}`,
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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////COACH////////////////////////////////////////////////////////////////

  export const getCoach = (matricula, pwd) => {
    return new Promise((resolve, reject) =>{
        Request({
          method: 'GET',
          url: `http://fitgroup.com.br/livel/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=professorAutentica&ProfessorLogin=${matricula}&ProfessorPwd=${pwd}`,
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

  export const getCoachHorarios = (ProfessorID) => {
    return new Promise((resolve, reject) =>{
        Request({
          method: 'GET',
          url: `http://fitgroup.com.br/livel/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=professorHoriarios&ProfessorID=${ProfessorID}`,
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

  export const treinoTransfere = (TreinoID, UsuarioDestinoID) => {
    return new Promise((resolve, reject) =>{
        Request({
          method: 'GET',
          url: `http://fitgroup.com.br/livel/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=treinoTransfere&TreinoID=${TreinoID}&UsuarioDestinoID=${UsuarioDestinoID}`,
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
