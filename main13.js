  // Método filter   
  console.clear();
  const idades = [32, 33, 16, 40];

  let filtroIdade = idades.filter((idade) => {
      return idade >= 18;
  });
  console.log(filtroIdade);
  console.clear();
  // Outro exemplo do filter 
   const filtoCompleted = tarefas.filter((item) => {
       return item.isCompletas === true;
   });

   console.log(filtroCompletas);