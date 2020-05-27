import Request from 'request-promise'


    export const getAluno = (AlunoID, AlunoPwd) => {
        return new Promise((resolve, reject) =>{
            Request({
              method: 'GET',
              url: `${process.env.REACT_APP_API_URL}/livel_app.php?AuthToken=${process.env.REACT_APP_AUTH_TOKEN}&Metodo=alunoLogin&AlunoID=${AlunoID}&AlunoPwd=${AlunoPwd}`,
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

