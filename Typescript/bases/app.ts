(()=>{

  type Carro = {
    carroceria: string,
    modelo: string,
    antibalas: boolean,
    pasajeros:number;
    disparar?:()=>void;
  }
  
  // Objetos
  const batimovil:Carro = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
  };
  
  const bumblebee:Carro = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
  };
  
  
  // Villanos debe de ser un arreglo de objetos personalizados
  type Villanos = {
    nombre:string,
    edad: number|undefined,
    mutante:boolean;
  }
  
  const villanos:Villanos[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];
  
  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  
  type Charles = {
    poder:string,
    estatura: number;
  }
  
  const charles:Charles = {
    poder:"psiquico",
    estatura: 1.78
  };
  
  console.log("paso por aquí");
  
  
  type Apocalipsis = {
    lider:boolean,
    miembros: string[];
  }
  
  console.log("paso por acá");
  
  
  const apocalipsis:Apocalipsis = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }
  
  console.log(apocalipsis);
  
  
  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: Charles|Apocalipsis;
  
  mystique = charles;
  mystique = apocalipsis;


})()

// 48. Incluir y excluir carpetas y/o archivos
