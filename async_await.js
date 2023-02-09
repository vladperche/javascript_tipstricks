async function getData() {
  console.log('*** entering async');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random()>0.4)
      {
        resolve('*** async end: Dados obtidos');
      }
      else
      {
        reject('*** async error: Erro no processamento');
      }
    }, 1000);
  });
}

async function main() {
  console.log('=== main function ===');
  try {
    console.info('Awaiting for processing...');
    const data = await getData();

    console.info('Returned:');
    console.log('Data:', data);
  } catch (error) {
    console.error(error);
  }
  console.log('=== end of main ===');
}

main();

